import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Bakhsons Distributors Limited",
  description:
    "Bakhsons Distributors Ltd is a prominent food and beverage distribution company that was established in 2005 in Nairobi, Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 w-full flex items-center justify-center lg:justify-around p-5 bg-[#4E8098] text-white h-[50px]">
          <div>
            <h2 className=" font-semibold cursor-pointer">
              Bakhsons Distributors Limited
            </h2>
          </div>
          <div>
            <Nav />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
