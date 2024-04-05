"use client";
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
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { MdCarpenter } from "react-icons/md";
import { RiCellphoneFill } from "react-icons/ri";

const MainSection = () => {
  // modal close
  useEffect(() => {
    const closeModalOnClickOutside = (event) => {
      const modal = document.getElementById("my_modal_6");
      if (event.target === modal) {
        modal.close();
      }
    };
    document.addEventListener("click", closeModalOnClickOutside);

    return () => {
      document.removeEventListener("click", closeModalOnClickOutside);
    };
  }, []);

  //

  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  //
  const [categories, setCategories] = useState(true);
  // const toggleCategories = () => {
  //   setCategories(!categories);
  // };

  const [sell, setSell] = useState(true);
  const toggleSell = () => {
    setSell(!sell);
  };

  return (
    <div className="w-full md:w-[500px] mx-auto mt-0">
      <div className="">
        <div className="hidden md:flex justify-between bg-white px-3 py-2 mb-3 rounded-b-xl ">
          <button
            onClick={() => document.getElementById("my_modal_6").showModal()}
            className="flex items-center gap-2"
          >
            <MdOutlineCategory />
            <span className="font-semibold">Categories</span>
          </button>
          <button
            onClick={() =>
              document.getElementById("my_modal_location").showModal()
            }
            className="flex items-center gap-2"
          >
            <IoLocation />
            <p className="font-semibold">Location</p>
          </button>
          <button className="flex items-center gap-2">
            <p className="font-semibold">Search</p>
            <FaMagnifyingGlass />
          </button>
        </div>

        {/* for mobile device */}

        <div className="flex md:hidden justify-between bg-white px-2 py-3 mb-3 rounded-b-xl w-full">
          {searchVisible ? (
            <>
              <div className="flex items-center justify-center">
                <label className="input input-bordered  gap-2  flex items-center rounded-l-lg rounded-r-none h-8">
                  <input type="text" className="w-[70%]" placeholder="Search" />
                </label>
                <button className="bg-[#fd6c16] text-white py-1 px-2 rounded-r-lg rounded-l-none">
                  Submit
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  document.getElementById("my_modal_6").showModal()
                }
                className="flex items-center gap-2"
              >
                <MdOutlineCategory />
                <span className="font-semibold">Categories</span>
              </button>
              <button
                onClick={() =>
                  document.getElementById("my_modal_location").showModal()
                }
                className="flex items-center gap-2"
              >
                <IoLocation />
                <p className="font-semibold">Location</p>
              </button>
            </>
          )}

          {/*  */}
          <button className="flex items-center gap-2" onClick={toggleSearch}>
            <p className="font-semibold">Search</p>
            <FaMagnifyingGlass />
          </button>
        </div>

        {/*  */}
        <div className="bg-slate-200 rounded-md mb-6">
          <img
            className="rounded-lg md:w-[500px] w-[100%] h-[305px]"
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
            className="h-[110px] md:h-[100px] w-[130px] rounded-lg"
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
          className="h-[110px] md:h-[100px] w-[130px] rounded-lg"
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
          <div className="flex justify-between">
            <h4 className="font-semibold">$4959</h4>
            <p className="text-xs mt-3">1 hour ago</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 rounded-lg bg-white border-2 mb-5">
        <img
          className="h-[110px] md:h-[100px] w-[130px] rounded-lg"
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
          <div className="flex justify-between">
            <h4 className="font-semibold">$4959</h4>
            <p className="text-xs mt-3">Just Now</p>
          </div>
        </div>
      </div>

      {/* filter */}

      <div className="bg-white px-2 md:px-8 py-3 rounded-lg mb-10 ">
        <div className="flex items-center gap-3">
          <FaKhanda />
          <h5>See Product From your Suitable Categorie</h5>
        </div>
        <div className="flex mt-3 gap-1 md:gap-3">
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

      {/* load more btn */}
      <button className="border-2 border-gray-100 shadow flex items-center justify-center w-full md:w-[500px] rounded-t-xl bg-white py-3 mb-5 gap-2 font-bold">
        <span>
          <MdOutlineKeyboardDoubleArrowRight className="border rounded-full border-black text-black text-xl font-bold" />
        </span>
        Load More
      </button>

      {/* category */}
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="w-full  md:w-[500px] rounded-xl bg-gray-100 p-2 md:p-10 ">
          <div className="flex justify-end">
            <form method="dialog">
              <button className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full ">
                <RxCross2 />
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Select Category</span>
              </div>
            </label>
            <ul>
              <li>
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-lg font-semibold text-slate-700 justify-between pl-8"
                  onClick={toggleSell}
                >
                  Sell{sell ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </li>

              {sell && (
                <>
                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 text-md"
                    >
                      <FaCar />

                      <span>
                        <span className="text-blue-600">Electronics</span>
                        <span className="text-slate-500 ml-1">(82,173)</span>
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 text-md"
                    >
                      <RiCellphoneFill />

                      <span>
                        <span className="text-blue-600">Mobiles</span>
                        <span className="text-slate-500 ml-1">(77,728)</span>
                      </span>
                    </button>
                  </li>
                </>
              )}

              <li>
                <button
                  type="button"
                  className=" w-full text-start flex items-center gap-x-3 text-md text-gray-700 font-extrabold"
                >
                  <FaHome /> Home & Living
                </button>

                <ul>
                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 pl-7"
                    >
                      <span className="text-[9px] text-gray-500">
                        <FaCircle />
                      </span>

                      <span className="text-md">
                        <span className="text-blue-600">Vehicles</span>
                        <span className="text-slate-500 ml-1">(26,937)</span>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 pl-7"
                    >
                      <span className="text-[9px] text-gray-500">
                        <FaCircle />
                      </span>

                      <span className="text-md">
                        <span className="text-blue-600">Property</span>
                        <span className="text-slate-500 ml-1">(20,377)</span>
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 pl-7"
                    >
                      <span className="text-[9px] text-gray-500">
                        <FaCircle />
                      </span>

                      <span className="text-md">
                        <span className="text-blue-600">Pets & Animals</span>
                        <span className="text-slate-500 ml-1">(16,935)</span>
                      </span>
                    </button>
                  </li>
                </ul>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-md"
                >
                  <RiCellphoneFill />

                  <span>
                    <span className="text-blue-600">Education</span>
                    <span className="text-slate-500 ml-1">(3,219)</span>
                  </span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-md"
                >
                  <MdCarpenter />

                  <span>
                    <span className="text-blue-600">Essentials</span>
                    <span className="text-slate-500 ml-1">(3,074)</span>
                  </span>
                </button>
              </li>

              <li className="text-md text-slate-700 ml-7">Rent</li>
              <li className="text-md text-slate-700 ml-7">Jobs</li>
              <li className="text-md text-slate-700 ml-7">Offer</li>
              <li className="text-md text-slate-700 ml-7">Bid</li>
            </ul>
          </div>
        </div>
      </dialog>

      {/* location */}
      <dialog
        id="my_modal_location"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className=" w-full  md:w-[500px] rounded-xl bg-gray-100 p-5 ">
          <div className="flex justify-end">
            <form method="dialog">
              <button className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full ">
                <RxCross2 />
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Select Location</span>
              </div>
            </label>
            <ul>
              <li>
                <button
                  type="button"
                  className=" w-full text-start flex items-center gap-x-3 text-md text-gray-700 font-extrabold"
                >
                  <FaHome />
                  All of Bangladesh
                </button>
              </li>

              <li className="hs-accordion" id="users-accordion">
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-md"
                >
                  <span>
                    <span className="text-blue-600">Dhaka</span>
                    <span className="text-slate-500 ml-1">(176,038)</span>
                  </span>
                </button>
                <ul>
                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 pl-7"
                    >
                      <span className="text-[9px] text-gray-500">
                        <FaCircle />
                      </span>

                      <span className="text-sm text-blue-600">
                        <span className="">Malibag</span>
                        <span className=" ml-1 ">(5467)</span>
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 pl-7"
                    >
                      <span className="text-[9px] text-gray-500">
                        <FaCircle />
                      </span>

                      <span className="text-sm text-blue-600">
                        <span className="">Rampura</span>
                        <span className=" ml-1 ">(54215)</span>
                      </span>
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="w-full text-start flex items-center gap-x-3 pl-7"
                    >
                      <span className="text-[9px] text-gray-500">
                        <FaCircle />
                      </span>

                      <span className="text-sm text-blue-600">
                        <span className="">Gulshan</span>
                        <span className=" ml-1 ">(3625)</span>
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-md"
                >
                  <span>
                    <span className="text-blue-600">Chattogram</span>
                    <span className="text-slate-500 ml-1">(30,519)</span>
                  </span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-md"
                >
                  <span>
                    <span className="text-blue-600">Dhaka Division</span>
                    <span className="text-slate-500 ml-1">(16,650)</span>
                  </span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-md"
                >
                  <span>
                    <span className="text-blue-600">Sylhet</span>
                    <span className="text-slate-500 ml-1">(12,554)</span>
                  </span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full text-start flex items-center gap-x-3 text-md"
                >
                  <span>
                    <span className="text-blue-600">Khulna</span>
                    <span className="text-slate-500 ml-1">(9,862)</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MainSection;
