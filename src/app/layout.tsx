import type { Metadata } from "next";
import "./globals.css";

import { Jersey_10, Jost } from "next/font/google";

const heading = Jersey_10({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
});

const body = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}