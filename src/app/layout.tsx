import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['300','400','500', '600']
})


export const metadata: Metadata = {
  title: "Lerry Augusto",
  description: "Lerry Augusto is a software engineer and this is my portifolio .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins}`}>
        {children}
      </body>
    </html>
  );
}
