import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const qomraFont = localFont({
  src: [
    {
      path: "./fonts/itfQomraArabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/itfQomraArabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/itfQomraArabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/itfQomraArabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/itfQomraArabic-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-qomra", // optional, for CSS variable / Tailwind use
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contract Request",
  description: "Form Of Contract Request",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${qomraFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
