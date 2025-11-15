import type { Metadata } from "next";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
