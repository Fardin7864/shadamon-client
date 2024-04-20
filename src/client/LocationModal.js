import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const LocationModal = () => {
  const locations = [
    {
      title: "Dhaka",
      subLocations: [
        {
          title: "Malibag",
        },
        {
          title: "Rampura",
          items: ["Hatijheel", "TV Center"],
        },
        {
          title: "Gulshan",
          items: ["Gulshan-1", "Gulshan-2"],
        },
      ],
    },
    {
      title: "Chattogram",
    },
    {
      title: "Sylhet",
      subLocations: [
        {
          title: "Sylhet-1",
        },
        {
          title: "Sylhet-2",
        },
        {
          title: "Sylhet-3",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null);
  };

  const onSubTitleClick = (index) => {
    setActiveSubIndex(index === activeSubIndex ? null : index);
  };

  const renderSubLocations = (subLocations, parentIndex) => {
    return subLocations?.map((subLocation, idx) => {
      const hasItems = subLocation.items && subLocation.items.length > 0;
      const isActive = idx === activeSubIndex && parentIndex === activeIndex;

      const itemList = hasItems
        ? subLocation?.items.map((item, i) => <li key={i}>{item}</li>)
        : null;

      return (
        <div
          key={idx}
          className={`px-10 pb-3 mx-10 bg-gray-200 ${isActive ? "active" : ""}`}
        >
          <div
            className={`border-b border-gray-300 p-[10px] cursor-pointer flex items-center justify-between ${
              isActive ? "active" : ""
            }`}
            onClick={() => onSubTitleClick(idx)}
          >
            {subLocation.title} {hasItems && <IoIosArrowForward />}
          </div>
          {itemList && (
            <div
              className="content  mx-7 px-5 py-2"
              style={{ display: isActive ? "block" : "none" }}
            >
              <ul className="list-disc">{itemList}</ul>
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div className=" w-full ">
      <h2 className="text-blue-500 border-b pb-2 mt-3 ml-2 mb-2">
        All Locations
      </h2>
      {locations.map((location, index) => {
        const isActive = index === activeIndex;
        return (
          <div key={index} className={` mb-[10px] ${isActive ? "active" : ""}`}>
            <div
              className={`p-[10px] border-b mb-2 cursor-pointer flex items-center justify-between text-blue-500 ${
                isActive ? "active" : ""
              }`}
              onClick={() => onTitleClick(index)}
            >
              {location.title}
              <IoIosArrowForward />
            </div>
            <div
              className="content"
              style={{ display: isActive ? "block" : "none" }}
            >
              {renderSubLocations(location.subLocations, index)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationModal;
