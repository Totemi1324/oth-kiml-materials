import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import { Providers } from "./providers";
import { primary_font } from "@/ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Materialien - AW KI und Maschinelles Lernen",
  description: "Sammlung der in der Vorlesung verwendeten Mitmachaufgaben und sonstigen refernzierten Materialien für den Kurs \"Künstliche Intelligenz und Maschinelles Lernen\" von René Grünbauer und Tamás Nemes, die dynamisch freigeschaltet werden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${primary_font.className} antialiased`}>
        <Providers attribute="class" defaultTheme="system">
          {children}
        </Providers>
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}