import type { Metadata } from "next";
import { Outfit, Open_Sans, Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Navbar";
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
        <Header />
        <main className="max-w-6xl px-8 mx-auto min-h-[75dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
