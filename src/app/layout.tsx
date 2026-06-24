import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PORTFOLIO } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zainulabedin.vercel.app"),
  title: {
    default: PORTFOLIO.name,
    template: `%s | ${PORTFOLIO.name}`,
  },
  description: PORTFOLIO.description,
  openGraph: {
    title: `${PORTFOLIO.name}`,
    description: PORTFOLIO.description,
    url: "https://zainulabedin.vercel.app",
    siteName: `${PORTFOLIO.name}`,
    locale: "en_US",
    type: "website",
    images: [{ url: PORTFOLIO.avatarUrl.url }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${PORTFOLIO.name}`,
    description: PORTFOLIO.description,
    card: "summary_large_image",
    images: [PORTFOLIO.avatarUrl.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
