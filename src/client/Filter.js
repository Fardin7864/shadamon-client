"use client";

import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  // filter
  const toggleFilter = () => {
    setFilter(!filter);
  };
  return (
    <ul>
      <li>
        <button
          type="button"
          className="w-full text-start flex items-center gap-x-3 text-lg font-bold text-slate-700 justify-between"
          onClick={toggleFilter}
        >
          Filter {filter ? <FaAngleDown /> : <FaAngleUp />}
        </button>
      </li>
      {filter && (
        <>
          <li>
            <button
              type="button"
              className="w-full text-start flex items-center gap-x-3 text-md font-bold text-slate-700 justify-between mt-2"
            >
              Price
            </button>
          </li>

          <li className="flex gap-x-4">
            <input type="checkbox" id="highToLow" />
            <label htmlFor="Cheap" className="text-md text-slate-700 ">
              High to Low
            </label>
          </li>
          <li className="flex gap-x-4">
            <input type="checkbox" id="lowToHigh" />
            <label htmlFor="homeDelivery" className="text-md text-slate-700 ">
              Low to High
            </label>
          </li>

          {/*  */}

          <li>
            <button
              type="button"
              className="w-full text-start flex items-center gap-x-3 text-md font-bold text-slate-700 justify-between mt-2"
            >
              Featured
            </button>
          </li>

          <li className="flex gap-x-4 ">
            <input type="checkbox" id="featuredPost" />
            <label htmlFor="Cheap" className="text-md text-slate-700 mb-3">
              All featured Post
            </label>
          </li>
        </>
      )}
    </ul>
  );
};

export default Filter;
