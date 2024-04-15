import type { Metadata } from "next";
import { Outfit, Open_Sans } from "next/font/google";
import "./globals.css";

const text = Open_Sans({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["300"],
  display: "swap",
});
const headers = Outfit({
  subsets: ["latin"],
  variable: "--font-headers",
  weight: ["900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fiifi's Blog",
  description: "Personal blog of Fiifi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${text.variable} ${headers.variable}`}>{children}</body>
    </html>
  );
}
