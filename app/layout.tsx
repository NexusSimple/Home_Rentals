import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";
import RegisterModal from "@/app/components/modals/register-modal";
import ToasterProvider from "@/app/providers/toaster-provider";
import LoginModal from "@/app/components/modals/login-modal";

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
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
