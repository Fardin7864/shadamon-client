import Home from "@/dashboardComponents/Home";
import { FaArrowLeft, FaPlus, FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";
import AllPostTable from "./AllPostTable";
import EditPost from "./EditPost";

const page = () => {
  return (
    <div className=" bg-gray-300">
      <div className=" max-w-[1440px] mx-auto pt-2 px-5 flex gap-10">
        <Home />
        <div className="  w-full bg-white rounded-lg ">
          {/* top bar */}
          <div className=" p-4 flex justify-between mt-5 border-b-2">
            <div className="flex gap-2 items-center">
              <button className=" flex items-center gap-2 text-sm">
                <FaArrowLeft className=" text-[#fb6320]" />{" "}
                <span className=" text-[#686dff] font-semibold">
                  Manage Post
                </span>
              </button>

              <h5 className="font-semibold text-sm">| Total Post (6522) |</h5>
              <h5 className="font-semibold text-sm">unapproved Post (37)</h5>
            </div>
            <div className=" flex gap-1">
              <div className=" flex items-center">
                <input
                  type="search"
                  className=" border p-1 rounded-sm rounded-l-md"
                  placeholder=" search by type"
                />
                <button className=" border border-l-0  rounded-sm rounded-r-md px-2 py-2">
                  <FaSearch className=" " />
                </button>
              </div>
              <Link
                href={"/dashboard/createcategory"}
                className=" flex items-center gap-1 border px-2 py-1 rounded-md text-sm bg-[#686dff] text-white"
              >
                <FaPlus /> Create Post
              </Link>
              <button className="flex items-center bg-red-600 px-2 py-1 rounded-md text-white">
                <RiDeleteBin6Line />
                <FaAngleDown />
              </button>
              <button className="rounded-md text-white bg-green-600 px-2 py-1">
                <FaPlus />
              </button>
              <button className="rounded-md text-white bg-green-600 px-2 py-1">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* main section */}

          {/* post Table */}
          <div className="overflow-x-auto bg-gray-200 m-4 rounded-md p-2">
            <table className="table overflow-x-auto">
              {/* head */}
              <thead>
                <tr className="text-black">
                  <th>Product Picture</th>
                  <th>Product ID</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Post Type</th>
                  <th>Merchant</th>
                  <th>Price</th>
                  <th>Reach</th>
                  <th>User Type</th>
                  <th>Slot Sts</th>
                  <th>Verify</th>
                  <th>Product Sts</th>
                  <th>Report</th>
                  <th>Send By</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <AllPostTable />
              </tbody>
              {/* foot */}
            </table>
          </div>

          {/*  */}

          <EditPost />
        </div>
      </div>
    </div>
  );
};

export default page;
