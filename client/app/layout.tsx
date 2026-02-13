import type { Metadata } from "next";
import {
  Libre_Caslon_Display,
  Sora,
  Reddit_Sans,
  Anton,
} from "next/font/google";
import "./globals.css";

const libreCaslonDisplay = Libre_Caslon_Display({
  variable: "--font-libre-caslon-display",
  weight: ["400"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
});

const sora = Sora({
  variable: "--font-sora",
  weight: ["400"],
});

const redditSansFont = Reddit_Sans({
  variable: "--font-Reddit_Sans",
  weight: ["400"],
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
