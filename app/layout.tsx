import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Angelsoft Solutions - Web & Mobile Development",
  description: "Turn your ideas into reality with our software solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` `}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
