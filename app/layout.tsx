import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { HomePageModel } from "./models";
import { Footer } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamshid Ibroximov",
  description: "app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <div className="absolute w-full top-0 left-0  min-h-[100%]">
          <HomePageModel />
        </div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
