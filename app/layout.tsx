import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commonwell Trust",
  description: "A charity / nonprofit website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}