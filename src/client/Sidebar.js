// "use client";
import { FaCar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RiCellphoneFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { MdCarpenter } from "react-icons/md";
import { IoHeartCircle } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-[250px] ">
      <div className=" transition-all duration-300 transform top-0 start-0 bottom-0 z-[60]  pt-7 pb-10 overflow-y-auto hidden lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <nav
          className=" p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1">
            <li>
              <button
                type="button"
                className="w-full text-start flex items-center gap-x-3 py-1 text-lg font-extrabold text-[#fb6320] "
              >
                <IoHeartCircle />
                For you
              </button>
            </li>

            <li>
              <button
                type="button"
                className="w-full text-start flex items-center gap-x-3 text-lg font-bold text-slate-700 justify-between"
              >
                Sorting <FaAngleDown />
              </button>
            </li>
            <li className="flex gap-x-4">
              <input type="checkbox" id="Urgent" />
              <label for="Urgent" className="text-md text-slate-700 ">
                Urgent
              </label>
            </li>
            <li className="flex gap-x-4">
              <input type="checkbox" id="Cheap" />
              <label for="Cheap" className="text-md text-slate-700 ">
                Cheap Rate
              </label>
            </li>
            <li className="flex gap-x-4">
              <input type="checkbox" id="homeDelivery" />
              <label for="homeDelivery" className="text-md text-slate-700 ">
                {" "}
                Home Delivery
              </label>
            </li>
            <button
              type="button"
              className="w-full text-start ml-7 text-sm font-semibold text-[#fb6320] pb-3"
            >
              See More
            </button>

            <hr />

            <li>
              <button
                type="button"
                className="w-full text-start flex items-center gap-x-3 text-lg font-bold text-slate-700 justify-between mt-3"
              >
                All Categories <FaAngleDown />
              </button>
            </li>
            <li>
              <button
                type="button"
                className="w-full text-start flex items-center gap-x-3 text-lg font-semibold text-slate-700 justify-between pl-8"
              >
                Sell <FaAngleDown />
              </button>
            </li>

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

            <hr />

            <li>
              <button
                type="button"
                className="w-full text-start flex items-center gap-x-3 text-lg font-bold text-slate-700 justify-between mt-3"
              >
                Location <FaAngleDown />
              </button>
            </li>

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
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
