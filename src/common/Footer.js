/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="mx-auto ">
      <div className="bg-white h-[180px] overflow-hidden flex flex-col md:flex-row items-center md:items-end gap-10 py-3 justify-center pl:0 lg:pl-[300px]">
        <div>
          <img
            className="rounded-2xl -rotate-12 -mb-6"
            src="/footer.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">TRY THE APP</h2>
          <p className="text-sm">
            Buy, sell and just about anything using <br /> the app on your
            mobile.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">GET YOUR APP TODAY</h4>
          <div className="flex items-center justify-center gap-2 bg-black rounded-lg py-2">
            <FaTwitter className="text-blue-700 text-xl" />
            <div className="text-[10px] text-white ">
              <p>GET IT ON</p>
              <h6 className="font-semibold text-[13px]">GOOGLE PLAY</h6>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="flex flex-col items-center lg:items-start md:flex-row gap-5 py-5 justify-between mx-auto pl-5 lg:pl-[300px]"
        style={{ maxWidth: "1010px" }}
      >
        <div>
          <h4 className="font-bold text-base mb-5 text-slate-700">
            POPULAR LOCATIONS
          </h4>
          <ul>
            <li className="text-sm text-slate-700">Kolkata</li>
            <li className="text-sm text-slate-700">Mumbai</li>
            <li className="text-sm text-slate-700">Chennai</li>
            <li className="text-sm text-slate-700">Pune</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-5 text-slate-700">
            TRENDING LOCATIONS
          </h4>
          <ul>
            <li className="text-sm text-slate-700">Bhubaneshwar</li>
            <li className="text-sm text-slate-700">Hydrabad</li>
            <li className="text-sm text-slate-700">Chandigah</li>
            <li className="text-sm text-slate-700">Nashik</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-base mb-5 text-slate-700 -ml-14 lg:ml-0">
            SHADAMON
          </h4>
          <ul>
            <li className="text-sm text-slate-700 -ml-14 lg:ml-0">Blog</li>
            <li className="text-sm text-slate-700 -ml-14 lg:ml-0">Help</li>
            <li className="text-sm text-slate-700 -ml-14 lg:ml-0">
              Contact Us
            </li>
            <li className="text-sm text-slate-700 -ml-14 lg:ml-0">
              Legal & Privacy <br /> information
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between ">
          <h4 className="font-bold text-base   text-slate-700 mb-5">
            FOLLOW US
          </h4>
          <div className="flex gap-2 items-center">
            <FaFacebookF className="text-slate-700 text-xl" />
            <FaInstagram className="border rounded-full border-slate-700 text-xl font-bold p-1 text-slate-700" />
            <FaTwitter className="text-slate-700 text-xl" />
            <GoTriangleRight className="border rounded-full border-slate-700  text-xl font-bold text-slate-700" />
          </div>
          <div className="flex items-center justify-center gap-2 bg-black rounded-md px-2 py-1 mt-3">
            <FaTwitter className="text-blue-700 text-lg" />
            <div className="text-[8px] text-white ">
              <p>GET IT ON</p>
              <h6 className="font-semibold text-[11px]">GOOGLE PLAY</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
