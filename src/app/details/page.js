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

const Details = () => {
  return (
    <div style={{ maxWidth: "500px" }} className=" mx-auto bg-white">
      <div>
        <div>
          <img
            className="rounded-lg"
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
            <div className="flex items-center gap-2 text-sm">
              <HiSpeakerWave className="text-[#fb6320]" />
              Get More View
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
            <h2 className="text-slate-600">
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
            <h2 className="text-slate-600">
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
              <h2 className="flex gap-2 items-center">
                <FaTruck /> This Merchant can ship to BD
              </h2>
              <h2>
                <RiArrowGoBackFill />
                You can return new and unused items used items within 30 days
              </h2>
              <h2>
                {" "}
                <SlClose /> You can cancel within 30 minutes of of purchase
              </h2>

              <button>
                <FaRegArrowAltCircleUp />
                Promote This Post
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Details;
