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
  // console.log(location);
  return (
    <div className=" pb-16 ">
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
            href={"/dashboard/category"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/category"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <FaRegFolderClosed className=" text-lg" /> Category
          </Link>
          <div
            className={` ${
              location === "/dashboard/category"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Sub Category */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/sub-category"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/sub-category"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <FaRegFolderClosed className=" text-lg" /> Sub Category
          </Link>
          <div
            className={` ${
              location === "/dashboard/sub-category"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* city */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/city"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/city"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <FaCity className=" text-lg" /> City
          </Link>
          <div
            className={` ${
              location === "/dashboard/city"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Post */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/post"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/post"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <BsFillFilePostFill className=" text-lg" /> Post
          </Link>
          <div
            className={` ${
              location === "/dashboard/post"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Post approval */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/post-aproval"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/post-aproval"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <BsFillFilePostFill className=" text-lg" /> Post Aproval
          </Link>
          <div
            className={` ${
              location === "/dashboard/post-aproval"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Home Sections */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"./"}
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
            href={"/dashboard/notification"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/notification"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <RiNotification4Line className=" text-lg" /> Notification
          </Link>
          <div
            className={` ${
              location === "/dashboard/notification"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* reports */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/report"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/report"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <TbMessageReport className=" text-lg" /> report
          </Link>
          <div
            className={` ${
              location === "/dashboard/report"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Promote */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/promote"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/promote"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <AiOutlineDollar className=" text-lg" /> Promote
          </Link>
          <div
            className={` ${
              location === "/dashboard/promote"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Users */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/user"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/user"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <CiUser className=" text-lg" /> User
          </Link>
          <div
            className={` ${
              location === "/dashboard/user"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* Admin */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/admin"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/admin"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <RiAdminLine className=" text-lg" /> Admin
          </Link>
          <div
            className={` ${
              location === "/dashboard/admin"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* story plicy */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/story-policy"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/story-policy"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <PiPlugsConnectedLight className=" text-lg" /> Story Policy
          </Link>
          <div
            className={` ${
              location === "/dashboard/story-policy"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* setings */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/setings"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/setings"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <IoSettingsOutline className=" text-lg" /> Setings
          </Link>
          <div
            className={` ${
              location === "/dashboard/setings"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* verification */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/verification"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/verification"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <MdOutlineVerifiedUser className=" text-lg" /> Verification
          </Link>
          <div
            className={` ${
              location === "/dashboard/verification"
                ? " border-2 w-[1px] border-blue-800 rounded-l-xl"
                : ""
            } `}
          ></div>
        </div>
        {/* URLs */}
        <div className=" flex justify-between ml-4">
          <Link
            href={"/dashboard/url"}
            className={` flex items-center gap-3  px-4 py-2 w-11/12 ${
              location === "/dashboard/url"
                ? "bg-blue-100 text-blue-800 font-medium rounded-lg "
                : ""
            } `}
          >
            <LuLink className=" text-lg" /> URLs
          </Link>
          <div
            className={` ${
              location === "/dashboard/url"
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
