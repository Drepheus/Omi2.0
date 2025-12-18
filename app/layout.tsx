import type { Metadata } from "next";
import Script from "next/script";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

import GlowingDotsNav from "@/src/GlowingDotsNav";

export const metadata: Metadata = {
  title: "Omi AI",
  description: "Multimodal AI workbench powered by Supabase + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020205] text-white antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-METV2JRB51"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-METV2JRB51');
          `}
        </Script>

        <AppProviders>
          {children}
          <GlowingDotsNav />
        </AppProviders>
      </body>
    </html>
  );
}
