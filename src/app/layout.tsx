import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import LenisProvider from "@/components/LenisProvider";
import { ToastProvider } from "@/components/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sourabh-kumar | Web Developer & Software Engineer",
  description: "Portfolio of a web developer, software engineer, and computer science student passionate about building innovative solutions.",
  robots: "index, follow",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Sourabh-kumar | Web Developer & Software Engineer",
    description: "Portfolio of a web developer, software engineer, and computer science student passionate about building innovative solutions.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ToastProvider>
      <LenisProvider>
        <html lang="en" className="dark">
          <head>
            <link
              rel="preconnect"
              href="https://fonts.googleapis.com"
            />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=BBH+Sans+Bartle&display=swap&family=Inter:wght@400;500;600&display=swap"
              rel="stylesheet"
            />
          </head>
          <body className={`${inter.variable} antialiased`}>
            <ErrorReporter />
            <Header />
            <Script
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
              strategy="afterInteractive"
              data-target-origin="*"
              data-message-type="ROUTE_CHANGE"
              data-include-search-params="true"
              data-only-in-iframe="true"
              data-debug="true"
              data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
            />
            {children}
            <Toaster />
            <VisualEditsMessenger />
          </body>
        </html>
      </LenisProvider>
    </ToastProvider>
  );
}
