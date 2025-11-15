"use client";

import * as Sentry from "@sentry/browser";

export function initSentry() {
  const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (sentryDsn) {
    Sentry.init({
      dsn: sentryDsn,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      environment: process.env.NODE_ENV,
    });
  }
}

export { Sentry };
