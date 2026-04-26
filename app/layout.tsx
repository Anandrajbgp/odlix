import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { AIChatbot } from "@/components/shared/ai-chatbot";
import { WhatsAppWidget } from "@/components/shared/whatsapp-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odlix - Digital Ecosystem",
  description: "Odlix is a multi-platform digital ecosystem for learning, agency services, testing, apps, marketplace, and brokerage.",
  keywords: ["Odlix", "e-learning", "digital agency", "trading", "apps", "mart", "competition tests"],
  authors: [{ name: "Odlix" }],
  openGraph: {
    title: "Odlix - Digital Ecosystem",
    description: "One account. Six platforms. Infinite possibilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <ScrollToTop />
          <AIChatbot />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
