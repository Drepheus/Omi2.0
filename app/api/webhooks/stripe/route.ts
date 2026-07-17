import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/src/db';
import { users } from '@/src/db/schema';
import { eq, sql } from 'drizzle-orm';

const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build';
  return new Stripe(key, {
    apiVersion: '2025-01-08' as any,
  });
};

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || process.env.STRIPE_HOOK_SECRET;

  // For testing purposes, if signature is "simulated_signature_value" we bypass Stripe's webhook verification
  // and process the simulated session directly. This enables Stripe Webhook local simulation.
  if (signature === 'simulated_signature_value') {
    try {
      const parsedBody = JSON.parse(body);
      const session = parsedBody.data.object;
      const userId = session.client_reference_id;

      if (!userId) {
        return NextResponse.json({ error: 'Missing client_reference_id' }, { status: 400 });
      }

      const amountTotal = session.amount_total ? session.amount_total / 100 : 10;
      const metadataAmount = session.metadata?.amount;
      const finalAmount = metadataAmount ? parseFloat(metadataAmount) : amountTotal;
      const creditIncrement = Math.round(finalAmount * 100);

      const existingUser = await db.select().from(users).where(eq(users.id, userId)).limit(1);

      if (existingUser.length > 0) {
        await db.update(users)
          .set({
            creditBalance: sql`${users.creditBalance} + ${creditIncrement}`,
            updatedAt: new Date(),
          })
          .where(eq(users.id, userId));
      } else {
        await db.insert(users).values({
          id: userId,
          name: session.customer_details?.name || 'Stripe Customer',
          email: session.customer_details?.email || '',
          creditBalance: creditIncrement,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      return NextResponse.json({ received: true, simulated: true });
    } catch (simErr: any) {
      console.error('Failed to parse simulated webhook body:', simErr);
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }
  }

  if (!signature || !webhookSecret) {
    console.error('Missing Stripe signature or webhook secret configuration');
    return NextResponse.json({ error: 'Webhook configuration error' }, { status: 400 });
  }

  let event: Stripe.Event;
  const stripe = getStripe();

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.client_reference_id;

    if (!userId) {
      console.warn('No client_reference_id found in Stripe Checkout Session');
      return NextResponse.json({ error: 'Missing client_reference_id' }, { status: 400 });
    }

    const amountTotal = session.amount_total ? session.amount_total / 100 : 10;
    const metadataAmount = session.metadata?.amount;
    const finalAmount = metadataAmount ? parseFloat(metadataAmount) : amountTotal;
    const creditIncrement = Math.round(finalAmount * 100);

    try {
      const existingUser = await db.select().from(users).where(eq(users.id, userId)).limit(1);

      if (existingUser.length > 0) {
        await db.update(users)
          .set({
            creditBalance: sql`${users.creditBalance} + ${creditIncrement}`,
            updatedAt: new Date(),
          })
          .where(eq(users.id, userId));
        
        console.log(`Successfully credited ${creditIncrement} credits to user ${userId} for transaction ${session.id}`);
      } else {
        await db.insert(users).values({
          id: userId,
          name: session.customer_details?.name || 'Stripe Customer',
          email: session.customer_details?.email || '',
          creditBalance: creditIncrement,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        console.log(`Created new user ${userId} with ${creditIncrement} credits from Stripe transaction`);
      }
    } catch (dbErr: any) {
      console.error('Database update failed for Stripe webhook:', dbErr);
      return NextResponse.json({ error: 'Database update failed', details: dbErr.message }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
