"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaRegFolderClosed, FaCity  } from "react-icons/fa6";
import { BsFillFilePostFill } from "react-icons/bs";
import { TfiLayoutListPost } from "react-icons/tfi";
import { RiNotification4Line } from "react-icons/ri";
import { TbMessageReport } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import { PiPlugsConnectedLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuLink } from "react-icons/lu";





const Home = () => {
  const location = usePathname();
  console.log(location);
  return (
    <div className=" pb-16">
      {/* Navbar */}
      <div className=" bg-white mb-2 rounded-lg px-2">
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
      {/* side bar */}
      <div className=" w-60 rounded-xl bg-white pt-5 flex flex-col gap-3 pb-10">
        {/* Dashboard */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <FaHome className=" text-lg" /> Dashboard
          </Link>
          <div
            className={` ${
              location === "/dashboard"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Category */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/category"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/category"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <FaRegFolderClosed className=" text-lg" /> Category
          </Link>
          <div
            className={` ${
              location === "/category"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Sub Category */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/sub-category"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/sub-category"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <FaRegFolderClosed className=" text-lg" /> Sub Category
          </Link>
          <div
            className={` ${
              location === "/sub-category"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* city */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/city"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/city"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <FaCity className=" text-lg" /> City
          </Link>
          <div
            className={` ${
              location === "/city"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Post */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/post"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/post"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <BsFillFilePostFill className=" text-lg" /> Post
          </Link>
          <div
            className={` ${
              location === "/post"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Post approval */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/post-aproval"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/post-aproval"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <BsFillFilePostFill className=" text-lg" /> Post Aproval
          </Link>
          <div
            className={` ${
              location === "/post-aproval"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Home Sections */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <TfiLayoutListPost className=" text-lg" /> Home Section
          </Link>
          <div
            className={` ${
              location === "/"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Notification */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/notification"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/notification"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <RiNotification4Line className=" text-lg" /> Notification
          </Link>
          <div
            className={` ${
              location === "/notification"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* reports */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/report"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/report"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <TbMessageReport className=" text-lg" /> report
          </Link>
          <div
            className={` ${
              location === "/report"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Promote */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/promote"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/promote"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <AiOutlineDollar className=" text-lg" /> Promote
          </Link>
          <div
            className={` ${
              location === "/promote"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Users */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/user"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/user"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <CiUser className=" text-lg" /> User
          </Link>
          <div
            className={` ${
              location === "/user"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Admin */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/admin"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/admin"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <RiAdminLine className=" text-lg" /> Admin
          </Link>
          <div
            className={` ${
              location === "/admin"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* story plicy */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/story-policy"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/story-policy"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <PiPlugsConnectedLight className=" text-lg" /> Story Policy
          </Link>
          <div
            className={` ${
              location === "/story-policy"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* setings */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/setings"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/setings"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <IoSettingsOutline className=" text-lg" /> Setings
          </Link>
          <div
            className={` ${
              location === "/setings"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* verification */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/verification"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/verification"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <MdOutlineVerifiedUser className=" text-lg" /> Verification
          </Link>
          <div
            className={` ${
              location === "/verification"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* URLs */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/url"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/url"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <LuLink className=" text-lg" /> URLs
          </Link>
          <div
            className={` ${
              location === "/url"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
