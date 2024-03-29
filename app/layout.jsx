import "@/assets/css/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rising Star",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favico.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favico.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favico.ico",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <div className="max-w-screen-xl mx-auto p-4">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
