/* eslint-disable @next/next/no-img-element */
import { MdOutlineCategory } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const MainSection = () => {
  return (
    <div className="w-[500px] ">
      <div className="">
        <div className="flex justify-between bg-white px-3 py-2 mb-3 rounded-b-xl ">
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
            <p>Atif Muham..</p>
            <h3 className="font-semibold text-lg">
              2 RHK Resident Apartment in Chandivali
            </h3>

            <div className="flex justify-between ">
              <h3 className="font-semibold text-lg">$ 2.85</h3>
              <button className="border px-3 py-1 border-slate-400 rounded-sm">
                Detail
              </button>
            </div>

            {/*  */}

            <div className="flex gap-3">
              <div className="flex items-center gap-1 text-slate-600">
                <IoLocation />
                <p>Dhaka</p>
              </div>
              <div className="flex items-center gap-1 text-slate-600">
                <SlCalender />
                <p>Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
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
          <h2 className="font-semibold text-md">Taipei NTU Oxygen</h2>
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
          <h2 className="font-semibold text-md">Taipei NTU Oxygen</h2>
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
          <h2 className="font-semibold text-md">Taipei NTU Oxygen</h2>
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
          <h2 className="font-semibold text-md">Taipei NTU Oxygen</h2>
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
          <h2 className="font-semibold text-md">Taipei NTU Oxygen</h2>
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
    </div>
  );
};

export default MainSection;
