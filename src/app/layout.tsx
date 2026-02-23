import type { Metadata } from "next";
import { Montserrat, Roboto, Playfair_Display, Noto_Serif, Urbanist, Noto_Serif_Telugu} from "next/font/google";
import {  } from "next/font/google";

import "./globals.css";


const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-montserrat"
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
  variable: "--font-urbanist"
});

const noto = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: "--font-noto"
});

const noto_serif = Noto_Serif_Telugu({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: "--font-noto-serif"
});

type ProductsCardProps = {
  text: string;
  description?: string;
  preco?: string;
  src: string;
}

export const metadata: Metadata = {
  text: "itblue",
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
        className={`${montserrat.variable} ${playfair.variable} ${roboto.variable} ${urbanist.variable} 
        ${noto.variable} ${noto_serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
