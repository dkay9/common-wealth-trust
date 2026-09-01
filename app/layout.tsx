import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Commonwell Trust",
  description:
    "A charity / nonprofit website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${workSans.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
