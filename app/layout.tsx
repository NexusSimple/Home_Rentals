import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Home Rentals",
  description: "An online marketplace connecting property owners and guests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
