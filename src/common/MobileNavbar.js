"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { IoCallOutline, IoChatbubblesOutline ,IoMailOpenOutline, IoPersonOutline   } from "react-icons/io5";


const MobileNavbar = () => {
  const location = usePathname();
  console.log(location);
  return (
    <div>
      <div className=" flex justify-between w-[100vw] px-1 h-16 mb-5">
        {/* First half */}
        <div className=" flex px-2 border-t-2 rounded-t-xl mb-1 bg-white">
          <Link
            href={"/"}
            className={`flex flex-col justify-center items-center ${
              location === "/" ? "bg-gray-200" : "bg-transparent"
            }  px-3 rounded-b-2xl pt-2 pb-1 text-sm font-medium`}
          >
            <FaHome className=" text-2xl" /> HOME
          </Link>
          <Link
            href={"/search"}
            className={`flex flex-col justify-center items-center ${
              location === "/search" ? "bg-gray-200" : "bg-transparent"
            }  px-3 rounded-b-2xl pt-2 pb-1 text-sm font-medium`}
          >
            <IoSearch className=" text-2xl" /> SEARCH
          </Link>
        </div>
        {/* plus logo */} 
        <div className=" border-b-2 relative -top-4 rounded-full">
        <FaCirclePlus className=" text-6xl text-[#fd6c16]"/>
        </div>
        {/* 2nd Half */}
        <div className=" flex px-2 border-t-2 rounded-t-xl mb-1 bg-white">
          <Link
            href={"/inbox"}
            className={`flex flex-col justify-center items-center ${
              location === "/inbox" ? "bg-gray-200" : "bg-transparent"
            }  px-3 rounded-b-2xl pt-2 pb-1 text-sm font-medium`}
          >
            <IoMailOpenOutline  className=" text-2xl" /> INBOX
          </Link>
          <Link
            href={"/profile"}
            className={`flex flex-col justify-center items-center ${
              location === "/profile" ? "bg-gray-200" : "bg-transparent"
            }  px-3 rounded-b-2xl pt-2 pb-1 text-sm font-medium`}
          >
            <IoPersonOutline  className=" text-2xl" /> PRODILE
          </Link>
        </div>
      </div>
      {/* Mobile foote */}
      <div className="flex items-center justify-center gap-[2.5px]">
        <button className=" w-1/2 py-4 flex items-center gap-1 bg-[#fd6c16] text-white justify-center rounded-bl-xl"><IoCallOutline/>Call</button>
        <button  className=" w-1/2 py-4 flex items-center gap-1 bg-[#fd6c16] text-white justify-center rounded-br-xl"><IoChatbubblesOutline/>Chat</button>
      </div>
    </div>
  );
};

export default MobileNavbar;
