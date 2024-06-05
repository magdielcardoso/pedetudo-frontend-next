import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PedeTudo.online",
  description: "Delivery fácil e prático!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
