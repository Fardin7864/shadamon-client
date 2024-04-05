"use client";
import Home from "@/dashboardComponents/Home";
import React from "react";
import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
import DisplayLocation from "./DisplayLocation";
import LocationTable from "./LocationTable";


const page = () => {
  return (
    <div className=" bg-gray-300">
      <div className="max-w-[1440px] mx-auto pt-2 px-5 flex gap-10">
        <Home />
        <div className="  w-full bg-white rounded-lg ">
          {/* top bar */}
          <div className=" p-4 flex justify-between mt-5 border-b-2">
            <div>
              <button className=" flex items-center gap-3">
                <FaArrowLeft className=" text-[#fb6320]" />{" "}
                <span className=" text-[#686dff]">Manage Location</span>
              </button>
            </div>
            <h5>Total Location (8)</h5>
            <div className=" flex gap-5">
              <div className=" flex items-center">
                <input
                  type="search"
                  className=" border p-1 rounded-sm rounded-r-none"
                  placeholder=" search ..."
                />
                <button className=" border border-l-0  rounded-sm rounded-l-none p-2">
                  <FaSearch className=" " />
                </button>
              </div>
              <button
                // href={"/dashboard/createcategory"}
                onClick={() =>
                  document.getElementById("my_modal_location").showModal()
                }
                className=" flex items-center gap-1 border p-2 rounded-md text-sm bg-[#686dff] text-white"
              >
                <FaPlus /> Create Location
              </button>
            </div>
          </div>
          {/* Category Table */}
          <div className="overflow-x-auto bg-gray-200 m-4 rounded-md p-2">
            <table className="table">
              {/* head */}
       
              <tbody>
                {/* row 1 */}
                <LocationTable/>
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
      <dialog id="my_modal_location" className="modal">
        <div style={{ maxWidth: "70vw" }} className="modal-box w-full">
          <form method="dialog" className=" w-full">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <DisplayLocation/>
        </div>
      </dialog>
    </div>
  );
};

export default page;
