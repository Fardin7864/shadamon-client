"use client";
import Home from "@/dashboardComponents/Home";
import NewSubCategory from "./NewSubCategory";
import DisplayCategory from "./DisplayCategory";
import DisplayFeature from "./DisplayFeature";
import { FaPlusCircle } from "react-icons/fa";

const CreateCategory = () => {


  return (
    <div className=" bg-gray-300">
      <div className=" max-w-[1440px] mx-auto pt-2 px-5 flex gap-10">
        <Home />
        <div className="  w-full bg-white rounded-lg ">
          <h5 className=" flex items-center border-b-2 p-2 gap-3">
            <FaPlusCircle /> New category
          </h5>
          <div className=" flex flex-col justify-between w-full">
            <div className=" flex gap-3 p-3">
              {/* new category section form */}
              <NewSubCategory/>
              {/* display category */}
              <DisplayCategory/>
            </div>
            {/* display feature */}
            <DisplayFeature/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
