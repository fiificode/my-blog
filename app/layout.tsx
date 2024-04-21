import type { Metadata } from "next";
import { Outfit, Open_Sans, Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const text = Ubuntu({
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
      <body className={`${text.variable} ${headers.variable}`}>
        <Navbar />
        <main className="max-w-6xl px-8 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
