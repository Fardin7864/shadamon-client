/* eslint-disable @next/next/no-img-element */
import { MdOutlineCategory } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaKhanda } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { FcElectricalSensor } from "react-icons/fc";
import { VscExtensions } from "react-icons/vsc";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const MainSection = () => {
  return (
    <div className="w-[500px] mx-auto mt-5 md:mt-0">
      <div className="">
        <div className="hidden md:flex justify-between bg-white px-3 py-2 mb-3 rounded-b-xl ">
          <div className="flex items-center gap-2">
            <MdOutlineCategory />
            <p className="font-semibold">Categories</p>
          </div>
          <div className="flex items-center gap-2">
            <IoLocation />
            <p className="font-semibold">Location</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Search</p>
            <FaMagnifyingGlass />
          </div>
        </div>

        {/*  */}
        <div className="bg-slate-200 rounded-md mb-6">
          <img
            className="rounded-lg w-[500px] h-[305px]"
            src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
            alt=""
          />
          <div className="p-3">
            <p className="mt-0 -mb-2 text-sm">Atif Muham..</p>
            <h3 className="font-semibold text-base mt-0 -mb-1 ">
              2 RHK Resident Apartment in Chandivali
            </h3>

            <div className="flex justify-between -mb-3">
              <h3 className="font-semibold text-lg mt-0 ">$ 2.85</h3>
              <Link href="/details">
                <button className="border px-3 py-1 border-slate-400 rounded-md">
                  Detail
                </button>
              </Link>
            </div>

            {/*  */}

            <div className="flex gap-3 justify-start">
              <div className="flex items-center gap-1 text-slate-600 text-sm">
                <IoLocation />
                <p>Dhaka</p>
              </div>
              <div className="flex items-center gap-1 text-slate-600 text-sm">
                <SlCalender />
                <p>Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <Link href="/details">
        <div className="flex gap-3 rounded-lg bg-white border-2 mb-5">
          <img
            className="h-[100px] w-[130px] rounded-lg"
            src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-md mt-1">
              Oxygen Taipei NTU Oxygen Gongguan
            </h2>
            <h2 className="font-semibold text-md -mt-2">Taipei NTU Oxygen</h2>
            <div className="flex gap-3">
              <div className="flex items-center gap-1 text-slate-600 text-xs">
                <IoLocation />
                <p>Dhaka</p>
              </div>
              <div className="flex items-center gap-1 text-slate-600 text-xs">
                <SlCalender />
                <p>Dhaka</p>
              </div>
            </div>
            <h4 className="font-semibold">$4959</h4>
          </div>
        </div>
      </Link>

      <div className="flex gap-3 rounded-lg bg-white border-2 mb-5">
        <img
          className="h-[100px] w-[130px] rounded-lg"
          src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
          alt=""
        />
        <div>
          <h2 className="font-semibold text-md mt-1">
            Oxygen Taipei NTU Oxygen Gongguan
          </h2>
          <h2 className="font-semibold text-md -mt-2">Taipei NTU Oxygen</h2>
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-slate-600 text-xs">
              <IoLocation />
              <p>Dhaka</p>
            </div>
            <div className="flex items-center gap-1 text-slate-600 text-xs">
              <SlCalender />
              <p>Dhaka</p>
            </div>
          </div>
          <h4 className="font-semibold">$4959</h4>
        </div>
      </div>

      <div className="flex gap-3 rounded-lg bg-white border-2 mb-5">
        <img
          className="h-[100px] w-[130px] rounded-lg"
          src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
          alt=""
        />
        <div>
          <h2 className="font-semibold text-md mt-1">
            Oxygen Taipei NTU Oxygen Gongguan
          </h2>
          <h2 className="font-semibold text-md -mt-2">Taipei NTU Oxygen</h2>
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-slate-600 text-xs">
              <IoLocation />
              <p>Dhaka</p>
            </div>
            <div className="flex items-center gap-1 text-slate-600 text-xs">
              <SlCalender />
              <p>Dhaka</p>
            </div>
          </div>
          <h4 className="font-semibold">$4959</h4>
        </div>
      </div>

      {/* filter */}

      <div className="bg-white px-8 py-3 rounded-lg mb-10 ">
        <div className="flex items-center gap-3">
          <FaKhanda />
          <h5>See Product From your Suitable Categorie</h5>
        </div>
        <div className="flex mt-3 gap-3">
          <button className="flex border-2 px-3 py-1 items-center rounded-xl gap-2 shadow-lg">
            <span className="text-green-600">
              <BiSolidCategory />
            </span>
            All
          </button>
          <button className="flex border-2 px-3 py-1 items-center rounded-xl gap-2 shadow-lg">
            <span className="text-red-600">
              <FaCar />
            </span>
            Motors
          </button>
          <button className="flex border-2 px-3 py-1 items-center rounded-xl gap-2 shadow-lg">
            <span className="text-green-600">
              <FcElectricalSensor />
            </span>
            Electronics
          </button>
          <button className="flex border-2 px-3 py-1 items-center rounded-xl gap-2 shadow-lg">
            <span className="text-blue-600">
              <VscExtensions />
            </span>
            Others
          </button>
        </div>
      </div>

      <button className="border-2 border-gray-100 shadow flex items-center justify-center w-[500px] rounded-t-xl bg-white py-3 mb-5 gap-2 font-bold">
        <span>
          <MdOutlineKeyboardDoubleArrowRight className="border rounded-full border-black text-black text-xl font-bold" />
        </span>
        Load More
      </button>
    </div>
  );
};

export default MainSection;
