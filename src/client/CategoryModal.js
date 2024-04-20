import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const CategoryModal = () => {
  const categories = [
    {
      title: "Mobiles",
      subcategories: [
        {
          title: "Smartphones",
          items: ["iPhone", "Samsung", "Google Pixel"],
        },
        {
          title: "Feature Phones",
          items: ["Nokia", "Motorola", "BlackBerry"],
        },
        {
          title: "Accessories",
          items: ["Cases", "Chargers", "Headphones"],
        },
      ],
    },
    {
      title: "Electronics",
      subcategories: [
        {
          title: "Laptops",
          items: ["Apple", "Dell", "HP"],
        },
        {
          title: "Cameras",
        },
        {
          title: "Televisions",
          items: ["Samsung", "LG", "Sony"],
        },
      ],
    },
    {
      title: "Women's Fashion & Beauty",
      subcategories: [
        {
          title: "Clothing",
          items: ["Dresses", "Jeans", "Tops"],
        },
        {
          title: "Shoes",
          items: ["Heels", "Boots", "Sneakers"],
        },
        {
          title: "Beauty Products",
        },
      ],
    },
    // Add more categories and subcategories as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null); // Reset active subcategory when main category is clicked
  };

  const onSubTitleClick = (index) => {
    setActiveSubIndex(index === activeSubIndex ? null : index);
  };

  const renderSubcategories = (subcategories, parentIndex) => {
    return subcategories.map((subcategory, idx) => {
      const hasItems = subcategory.items && subcategory.items.length > 0;
      const isActive = idx === activeSubIndex && parentIndex === activeIndex;

      const itemList = hasItems
        ? subcategory.items.map((item, i) => <li key={i}>{item}</li>)
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
            {subcategory.title} {hasItems && <IoIosArrowForward />}
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
        All Categories
      </h2>
      {categories.map((category, index) => {
        const isActive = index === activeIndex;
        return (
          <div key={index} className={` mb-[10px] ${isActive ? "active" : ""}`}>
            <div
              className={`p-[10px] border-b mb-2 cursor-pointer flex items-center justify-between text-blue-500 ${
                isActive ? "active" : ""
              }`}
              onClick={() => onTitleClick(index)}
            >
              {category.title}
              <IoIosArrowForward />
            </div>
            <div
              className="content"
              style={{ display: isActive ? "block" : "none" }}
            >
              {renderSubcategories(category.subcategories, index)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryModal;
