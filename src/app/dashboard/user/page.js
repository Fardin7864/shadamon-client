"use client"
import Loaduser from "@/client/Loaduser.js";
import UsersTable from "@/client/UsersTable";
import Home from "@/dashboardComponents/Home";
import Link from "next/link";
import React from "react";
import { BsCaretDownFill, BsSearch } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const page = () => {
  return (
    <div className=" bg-gray-300">
      <div className=" max-w-[1440px] mx-auto pt-2 px-5 flex gap-10">
        <Home />
        <div className="  w-full bg-white rounded-lg">
          <div className=" flex justify-between w-full border-b pb-4 p-4">
            <h6 className=" text-blue-500 font-medium">Manage Users</h6>
            <p className=" font-medium">Total Users {"(190)"} </p>
            <div className=" flex gap-4">
              <button className="bg-red-400 text-white px-4 rounded-md py-2 hover:opacity-65 active:opacity-40">
                Both
              </button>
              <button className="bg-green-400 text-white px-4 rounded-md py-2 hover:opacity-65 active:opacity-40">
                Seller
              </button>
              <button className="bg-green-400 text-white px-4 rounded-md py-2 hover:opacity-65 active:opacity-40">
                customer
              </button>
              <button className="bg-red-400 text-white px-2 rounded-md py-2 flex items-center justify-center gap-1 hover:opacity-65 active:opacity-40">
                <MdDelete className=" text-xl" />
                <BsCaretDownFill />
              </button>
              <button className="bg-green-400 text-white px-2 rounded-md py-2 hover:opacity-65 active:opacity-40">
                <BsSearch className=" text-xl font-bold" />
              </button>
              <Link href={"/dashboard/createuser"} className="bg-[#686dff] text-white px-4 rounded-md py-2 hover:opacity-65 active:opacity-40">
                + Create User
              </Link>
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Created Date</th>
                  <th>Status</th>
                  <th>Rating</th>
                  <th>Edit by</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <UsersTable/>
              </tbody>
              {/* foot */}
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
