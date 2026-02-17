import type { Metadata } from "next";
import {
  Libre_Caslon_Display,
  Sora,
  Reddit_Sans,
  Anton,
} from "next/font/google";
import "./globals.css";



const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});


const libreCaslonDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-libre-caslon-display",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sora",
  display: "swap",
});

const redditSansFont = Reddit_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-reddit-sans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Alejo Albornoz",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreCaslonDisplay.variable} ${anton.variable} ${redditSansFont.variable} ${sora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
