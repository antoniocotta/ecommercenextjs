import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customiza Aí",
  description: "Transforme seu pensamento em realidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        <Navbar />
        <main className="max-w-7x1 m-auto min-w-[300px] p-4">{children}</main>
        <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
