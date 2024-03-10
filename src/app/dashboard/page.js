import Home from "@/dashboardComponents/Home";
import { FaBuffer, FaHome } from "react-icons/fa";
import { FaBuildingFlag, FaPersonThroughWindow, FaRegFolderClosed } from "react-icons/fa6";
import { MdOutlineReport } from "react-icons/md";
import { GoPersonAdd } from "react-icons/go";


const dashboard = () => {
  return (
    <div className=" bg-gray-300">
      <div className=" max-w-[1440px] mx-auto pt-2 px-5 flex gap-36">
        <Home />
        <div className=" mt-5">
          <div className=" flex items-center gap-3">
            <FaHome /> / Dashboard
          </div>
          <div className=" grid grid-cols-4 gap-5 mt-4">
                <div className=" border-l-4 border-l-blue-800 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">8</h3>
                      <p className=" text-sm">Running Promoted</p>
                    </div>
                    <div>
                      <FaRegFolderClosed className=" text-3xl text-blue-700"/>
                    </div>
                </div>
                <div className=" border-l-4 border-l-cyan-400 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">16</h3>
                      <p className=" text-sm">Today Promoted</p>
                    </div>
                    <div>
                      <FaRegFolderClosed className=" text-3xl text-cyan-400"/>
                    </div>
                </div>
                <div className=" border-l-4 border-l-red-700 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">6</h3>
                      <p className=" text-sm">Total Post</p>
                    </div>
                    <div>
                      <FaBuildingFlag  className=" text-3xl text-red-700"/>
                    </div>
                </div>
                <div className=" border-l-4 border-l-green-800 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">30</h3>
                      <p className=" text-sm">post Approval</p>
                    </div>
                    <div>
                      <FaRegFolderClosed className=" text-3xl text-green-700"/>
                    </div>
                </div>
                {/* 2nd row */}
                <div className=" border-l-4 border-l-amber-800 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">19</h3>
                      <p className=" text-sm">Report</p>
                    </div>
                    <div>
                      <FaBuffer  className=" text-3xl text-amber-700"/>
                    </div>
                </div>
                <div className=" border-l-4 border-l-emerald-400 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">6</h3>
                      <p className=" text-sm">Today Product View</p>
                    </div>
                    <div>
                      <MdOutlineReport  className=" text-3xl text-emerald-400"/>
                    </div>
                </div>
                <div className=" border-l-4 border-l-sky-700 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">106</h3>
                      <p className=" text-sm">Total Seller</p>
                    </div>
                    <div>
                      <FaPersonThroughWindow   className=" text-3xl text-sky-700"/>
                    </div>
                </div>
                <div className=" border-l-4 border-l-violet-800 bg-white px-6 py-6 rounded-md flex items-center justify-between gap-5">
                    <div>
                      <h3 className=" text-3xl">3</h3>
                      <p className=" text-sm">Total User</p>
                    </div>
                    <div>
                      <GoPersonAdd  className=" text-3xl text-violet-700"/>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
