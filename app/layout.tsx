import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";
import RegisterModal from "@/app/components/modals/register-modal";
import ToasterProvider from "@/app/providers/toaster-provider";
import LoginModal from "@/app/components/modals/login-modal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import RentModal from "@/app/components/modals/rent-modal";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Home Rentals",
  description: "An online marketplace connecting property owners and guests.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        {/* 👇 The 3 modals below will only be SHOWN to the user when the respective GLOBAL STATE isOpen is true */}
        <RentModal />
        <LoginModal />
        <RegisterModal />
        {/* 👇 So in the 1st render in the Client Side the Navbar will be shown */}
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
