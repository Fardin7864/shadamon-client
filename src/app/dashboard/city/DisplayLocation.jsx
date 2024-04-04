"use client";
import { FaPlusCircle } from "react-icons/fa";
import CreateSubLocation from "./CreateSubLocation";
import CreateLocation from "./CreateLocations";

const DisplayLocation = () => {


  return (
    <div className="">
      <div className=" mx-auto pt-2 px-5 flex gap-10">
        <div className="  w-full bg-white rounded-lg ">
          <h5 className=" flex items-center border-b-2 p-2 gap-3">
            <FaPlusCircle /> New Location
          </h5>
          <div className=" flex flex-col justify-between w-full">
            <div className=" flex gap-3 p-3">
              {/* new category section form */}
              <CreateSubLocation/>
              {/* display category */}
              <CreateLocation/>
            </div>
            {/* display feature */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayLocation;
