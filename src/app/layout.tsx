import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "itblue",
  description: "Uma marca de skincare desenvolvida para a pele contemporânea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${playfair.variable} antialiased`}>
          <Header/>
        {children}
          <Footer/>
      </body>
    </html>
  );
}
