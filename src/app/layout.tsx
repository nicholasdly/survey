import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "nicholasly/survey",
  description: "An open source platform for building and managing surveys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            geistSans.variable,
            geistMono.variable,
            "font-sans antialiased",
          )}
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
