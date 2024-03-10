import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";

const DashboardNav = () => {
  return (
      
      <div className=" bg-white  rounded-lg px-2">
        <div className=" flex items-center gap-2">
          <button>
            <IoMdMenu className=" text-3xl" />
          </button>

          <Image
            src={"/shadamonlogo.png"}
            width={150}
            height={40}
            alt="Logo"
            className=""
          />
        </div>
      </div>
  );
};

export default DashboardNav;
