import DashboardNav from "@/dashboardComponents/DashboardNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
      <div className={`${inter.className} ${'bg-gray-300'}`}>
        {/* <div className=" bg-gray-300"> */}
        <div className=" max-w-[1440px] mx-auto pt-2 px-5"><DashboardNav/></div>
        {/* </div> */}
           {children} 
      </div>
  );
}
