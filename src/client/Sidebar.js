"use client";
import { FaCar } from "react-icons/fa";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiCellphoneFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { MdCarpenter } from "react-icons/md";
import { IoHeartCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";

const Sidebar = () => {
  const [categories, setCategories] = useState(true);
  const [sell, setSell] = useState(true);
  const [location, setLocation] = useState(true);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://shadamon-m-server.vercel.app/api/v1/categorys"
        );
        setCategoryList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // categories
  const toggleCategories = () => {
    setCategories(!categories);
  };

  // sell
  const toggleSell = () => {
    setSell(!sell);
  };

  // location
  const toggleLocation = () => {
    setLocation(!location);
  };

  return (
    <div className="w-[250px] hidden lg:block sticky top-0">
      <div className=" transition-all duration-300 transform top-0 start-0 bottom-0 z-[60] pt-[50px] pb-10 hidden lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 ">
        <nav
          className="w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1">
            <li>
              <button
                type="button"
                className="w-full text-start flex items-center gap-x-3 text-lg font-bold text-slate-700 justify-between mt-3"
                onClick={toggleCategories}
              >
                All Categories {categories ? <FaAngleDown /> : <FaAngleUp />}
              </button>
            </li>
            {categories && (
              <>
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
              </>
            )}
            <hr />

            <li>
              <button
                type="button"
                className="w-full text-start flex items-center gap-x-3 text-lg font-bold text-slate-700 justify-between mt-3"
                onClick={toggleLocation}
              >
                Location
                {location ? <FaAngleDown /> : <FaAngleUp />}
              </button>
            </li>
            {location && (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
