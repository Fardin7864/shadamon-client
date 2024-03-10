import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/Navbar";
import MobileNavbar from "@/common/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" border-2 hidden md:block">
           <Navbar />
        </div>
     
        <div className=" bg-gray-100">
           {children} 
        </div>
        <div className=" md:hidden fixed bottom-0">
          <MobileNavbar/>
        </div>
      </body>
    </html>
  );
}
