import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import LenisProvider from "@/components/LenisProvider";
// import { ToastProvider } from "@/hooks/use-toast"; // Removed because it's not exported

export const metadata: Metadata = {
  title: "Sourabh-kumar | Web Developer & Software Engineer",
  description: "Portfolio of a web developer, software engineer, and computer science student passionate about building innovative solutions.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisProvider>
      <html lang="en" className="dark">
        <body className="antialiased">
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
  );
}