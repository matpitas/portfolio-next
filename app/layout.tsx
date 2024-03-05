import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Bem-vindo",
  description: "Matheus Pitas Baptista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} w-[100vw] min-h-screen overflow-x-hidden antialiased`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
