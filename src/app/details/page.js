"use client";
/* eslint-disable @next/next/no-img-element */
import { IoEye } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { BiMessageDetail } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { SlClose } from "react-icons/sl";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import { IoLocation } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaShareAltSquare } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { MdOutlineNotInterested } from "react-icons/md";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Details = () => {
  return (
    <div
      // style={{ maxWidth: "500px" }}
      className="w-full md:w-[500px] mx-auto bg-white"
    >
      <div>
        <div>
          <img
            className="rounded-lg w-full"
            src="https://shadamon.vercel.app/assets/premium-cover-pic.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between px-4 mb-3">
          <p className="text-sm">Malibag, Dhaka</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-sm">
              <IoEye className="text-[#fb6320]" />
              <p>975 Views</p>
            </div>
          </div>
        </div>

        <h2 className="px-4 font-bold -mt-1">
          2 BHK Residential Apartment in Chandivali
        </h2>
        <h2 className="px-4 font-bold -mt-2">Apartment in Chandivali</h2>
        <h3 className="px-4 font-bold  -mt-1">$ 27,000</h3>

        <div className="mx-4 shadow-xl mb-3 mt-2 rounded-xl border-2 border-slate-100">
          <div className="px-4 py-3">
            <h2 className="font-bold text-sm mb-1">
              Send seller a message or Call
            </h2>
            <div className="flex justify-between gap-3 items-center mb-3">
              <div className="flex items-center gap-3 bg-slate-200 w-full py-2 px-2 rounded-full">
                <div className="bg-black p-1 rounded-full flex items-center justify-center">
                  <BiMessageDetail className="text-white text-base" />
                </div>

                <p className="text-sm">Hi, Is this still available?</p>
              </div>
              <button className="py-2 px-3 bg-[#fb6320] rounded-md text-white">
                Send
              </button>
            </div>
            <div className="flex justify-between gap-3">
              <div className="flex items-center gap-3 bg-slate-200 w-full py-1 px-2 rounded-full">
                <div className="bg-black p-1 rounded-full ">
                  <MdCall className="text-white text-base" />
                </div>
                <div>
                  <p className="text-sm">017324XXXX</p>
                  <p className="text-sm -mt-2">Click to See the Number</p>
                </div>
              </div>
              <button className="py-2 px-4 bg-[#fb6320] rounded-md text-white">
                Call
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="px-4 mt-5">
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-3 items-center">
              <button className="border border-black rounded px-2 font-bold">
                Details
              </button>
              <h1 className="font-bold">Shipping, Return & Safety</h1>
            </div>

            <button
              type="button"
              className=" text-start text-lg font-bold text-slate-700 "
            >
              <FaAngleDown />
            </button>
          </div>
          <div className="mb-2">
            <h2 className="text-slate-600 text-sm">
              Condition: Used, <span>Brand: Hero, </span>
              <span>Delivery: Home Delivery, </span>{" "}
              <span>Register: 2014, </span>
              <span> CC: 1000cc ... </span>
              <span className="font-bold">See More</span>
            </h2>
          </div>
          <hr />

          {/* description */}

          <div className="mt-3 mb-2">
            <h2 className="font-bold">Description</h2>
            <h2 className="text-slate-600 text-sm">
              - Intel H110 Express Chipset - Intel G4560 (7tel G4560(7th Gen),
              Clock Speed 3.50GHz (3MB Cache ... <span>See More</span> ))
            </h2>
          </div>
          <hr />
          {/* shipping & Returns */}
          <div className="mt-2">
            <button
              type="button"
              className="flex justify-between items-center text-start text-lg font-bold text-slate-700 "
            >
              <span>
                Shipping & Safety
                <span className="font-normal">/ Safety Tips </span>
              </span>
              <FaAngleUp />
            </button>
            <div className="mt-3">
              <h2 className="flex gap-2 items-center text-slate-700 text-sm">
                <FaTruck /> This Merchant can ship to BD
              </h2>
              <h2 className="flex gap-2 items-center text-slate-700 text-sm">
                <RiArrowGoBackFill />
                You can return new and unused items used items within 30 days
              </h2>
              <h2 className="flex gap-2 items-center text-slate-700 text-sm">
                <SlClose /> You can cancel within 30 minutes of of purchase
              </h2>

              <button className="flex gap-2 items-center text-slate-700 text-sm">
                <FaRegArrowAltCircleUp />
                Promote This Post
              </button>
            </div>
          </div>

          {/* promote this post */}

          <button className="border-2 bg-[#ffded0] text-[#fb6320] border-[#fb6320] w-full justify-center items-center gap-2 my-3 py-2 rounded-md font-bold flex ">
            <span className="text-xl">
              <LiaArrowCircleUpSolid />
            </span>{" "}
            Promote This Post
          </button>
          <hr />
          {/* ad */}
          <div className="flex justify-between items-center my-3">
            <div className="flex items-center gap-3">
              <img
                className="w-[40px] rounded-full h-[40px]"
                src="/cover.jpeg"
                alt=""
              />
              <div>
                <h2 className="font-bold">শখ ফ্যাশন হাউজ</h2>
                <div className="flex gap-[2px] items-center">
                  <FaStar className="text-[#fb6320] text-xs" />
                  <FaStar className="text-[#fb6320] text-xs" />
                  <FaStar className="text-[#fb6320] text-xs" />
                  <FaStar className="text-[#fb6320] text-xs" />
                  <FaStarHalfAlt className="text-[#fb6320] text-xs" />

                  <div>(9)</div>
                </div>
              </div>
            </div>
            <button>Visit Shop</button>
          </div>

          <hr />

          {/* close detail btn */}

          <div className="my-4 flex justify-center items-center gap-2">
            <button
              onClick={() =>
                document.getElementById("my_modal_report").showModal()
              }
            >
              <FaExclamationCircle className="text-2xl" />
            </button>
            <FaHeartCirclePlus className="text-3xl" />
            <Link href="/">
              <button className="bg-slate-900 text-white py-2 px-3 rounded-l-2xl rounded-r-2xl">
                Close Detail
              </button>{" "}
            </Link>
            <MdOutlineNotInterested className="text-3xl rounded-full" />
            <FaShareAltSquare className="text-3xl rounded-full" />
          </div>

          <hr />
        </div>
      </div>

      {/* similar product - 5  */}
      <div className="mx-3 mt-3 mb-20 md:mb-0">
        <h3 className="font-bold mb-2">Similar Product</h3>
        <Link href="/details">
          <div>
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
                <h2 className="font-semibold text-md -mt-2">
                  Taipei NTU Oxygen
                </h2>
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
        </Link>
        {/*  */}
        <Link href="/details">
          <div>
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
                <h2 className="font-semibold text-md -mt-2">
                  Taipei NTU Oxygen
                </h2>
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
        </Link>

        <Link href="/details">
          <div>
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
                <h2 className="font-semibold text-md -mt-2">
                  Taipei NTU Oxygen
                </h2>
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
        </Link>

        <Link href="/details">
          <div>
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
                <h2 className="font-semibold text-md -mt-2">
                  Taipei NTU Oxygen
                </h2>
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
        </Link>

        <Link href="/details">
          <div>
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
                <h2 className="font-semibold text-md -mt-2">
                  Taipei NTU Oxygen
                </h2>
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
        </Link>
      </div>

      {/* report modal */}

      <dialog
        id="my_modal_report"
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

          <div className="">
            <h2 className="font-semibold">
              Is there something wrong with this ad?
            </h2>
            <form>
              <div className="my-3">
                <label htmlFor="reason" className="text-sm font-bold">
                  Reason
                </label>

                <select
                  type="text"
                  name="reason"
                  id="reason"
                  className="w-full border focus:outline-none py-2 rounded-md"
                >
                  <option value="reason1">Reason 1</option>
                  <option value="reason2">Reason 2</option>
                  <option value="reason3">Reason 3</option>
                  <option value="reason4">Reason 4</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-bold">
                  Message
                </label>
                <textarea
                  className="w-full border focus:outline-none rounded-md"
                  cols={7}
                  rows={4}
                  type="text"
                  name="message"
                  id="message"
                />
              </div>
              <button className="w-full mt-3 bg-[#fb6320] py-2 text-white rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
