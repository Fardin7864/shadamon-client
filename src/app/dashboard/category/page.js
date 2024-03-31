"use client";
import Home from "@/dashboardComponents/Home";
import React from "react";
import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
import Categorytable from "./Categorytable";
import Link from "next/link";
import CreateCategory from "../createcategory/page";

const page = () => {
  return (
    <div className=" bg-gray-300">
      <div className=" max-w-[1440px] mx-auto pt-2 px-5 flex gap-10">
        <Home />
        <div className="  w-full bg-white rounded-lg ">
          {/* top bar */}
          <div className=" p-4 flex justify-between mt-5 border-b-2">
            <div>
              <button className=" flex items-center gap-3">
                <FaArrowLeft className=" text-[#fb6320]" />{" "}
                <span className=" text-[#686dff]">Manage Categories</span>
              </button>
            </div>
            <h5>Total Categorues (8)</h5>
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
                onClick={() => document.getElementById("my_modal_category").showModal()}
                className=" flex items-center gap-1 border p-2 rounded-md text-sm bg-[#686dff] text-white"
              >
                <FaPlus /> Create Category
              </button>
            </div>
          </div>
          {/* Category Table */}
          <div className="overflow-x-auto bg-gray-200 m-4 rounded-md p-2">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Sub Category</th>
                  <th>Category</th>
                  <th>Order</th>
                  <th>Status</th>
                  <th>Entry Date</th>
                  <th>Created by</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <Categorytable />
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_category").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_category" className="modal">
        <div style={{ maxWidth: "70vw" }} className="modal-box w-full">
          <form method="dialog" className=" w-full">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <CreateCategory/>
        </div>
      </dialog>
    </div>
  );
};

export default page;
