import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const RegisterPage = () => {
  return (
    <>
      <div className="bg-gray-100 pt-5">
        <div className=" max-w-[500px] mx-auto border h-[100vh] rounded-t-xl bg-slate-100  border-gray-400 pt-3 px-3">
          {/* arrow and cross */}
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <button className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full">
                <FaArrowLeftLong />
              </button>
            </Link>
            <Link href={"/"}>
              <button className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full">
                <RxCross2 />
              </button>
            </Link>
          </div>
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
              <p className="text-xs">
                By signing up for an account you agree to our
                <span className="font-semibold"> Term & Condition</span>
              </p>

              <div className="flex flex-col items-center gap-2">
                <p className="text-center">Already Have a Account?</p>
                <Link
                  href={"/login"}
                  className="bg-gray-300 px-7 py-2 rounded-lg font-semibold"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
