import Image from "next/image";
import React from "react";
import { FaEnvelope } from "react-icons/fa6";

const RegisterPage = () => {
  return (
    <div>
      <div className=" max-w-[500px] mx-auto rounded-xl bg-white pt-3 px-3 pb-10 border border-gray-200">
        {/* Register page logo section */}
        <div className=" flex flex-col justify-center items-center">
          <Image
            src="/loginlogo.png"
            width={80}
            height={80}
            priority
            alt="Login Logo"
          />
          <h6 className=" text-base font-medium leading-3 mt-1">Register</h6>
          <p className=" text-xs mt-1 text-gray-500 font-medium leading-3">
            <i>If you are a New User</i>
          </p>
        </div>

        {/* OTP section */}
        <div className="">
          <form className=" flex flex-col gap-2 mx-auto my-4 px-10 w-full">
            <div className=" flex border-2 rounded-md py-2 bg-white">
              <select
                type="text"
                defaultValue="+880"
                className=" rounded-l-md pl-2 w-24 mr-3 outline-none font-medium "
              >
                <option>+880</option>
              </select>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className=" rounded-md rounded-l-none py-1 w-full outline-none px-2 font-medium border-l-2 "
              />
            </div>

            <div className=" flex border-2 rounded-md py-2 bg-white">
              <div className=" rounded-l-md pl-2 w-24 mr-3 outline-none  flex justify-center items-center">
                <FaEnvelope className="text-2xl" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className=" rounded-md rounded-l-none py-1 w-full outline-none px-2 font-medium border-l-2 "
              />
            </div>
            {/*  */}
            <div className=" flex border-2 rounded-md py-2 bg-white">
              <div className=" rounded-l-md pl-2 w-24 mr-3 outline-none  flex justify-center items-center">
                <FaEnvelope className="text-2xl" />
              </div>
              <input
                type="text"
                placeholder="Email Id"
                className=" rounded-md rounded-l-none py-1 w-full outline-none px-2 font-medium border-l-2 "
              />
            </div>
            {/*  */}
            <div className=" flex border-2 rounded-md py-2 bg-white">
              <div className=" rounded-l-md pl-2 w-24 mr-3 outline-none  flex justify-center items-center">
                <FaEnvelope className="text-2xl" />
              </div>
              <input
                type="password"
                placeholder="Password"
                className=" rounded-md rounded-l-none py-1 w-full outline-none px-2 font-medium border-l-2 "
              />
            </div>

            {/*  */}
            <button className="bg-[#f67719] text-white text-xl font-light hover:bg-[#ff5800] hover:opacity-60 active:opacity-30 py-[6px] rounded-md">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
