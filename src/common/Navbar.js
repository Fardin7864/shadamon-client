import Posts from "@/client/Posts";
import { IoMail } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import LoginModal from "@/client/Modal";

const Navbar = () => {
  return (
    <div
      style={{ maxWidth: "1010px", gap: "50px" }}
      className=" mx-auto flex items-center"
    >
      <div style={{ width: "250px" }} className=" h-16">
        <img src="/shadamonlogo.png" alt="logo" className="w-40 h-full " />
      </div>
      <div
        style={{ width: "500px" }}
        className=" w-[500px] h-16 flex justify-between items-center"
      >
        <Posts />
        <div className=" flex items-center gap-2">
          <button className=" bg-gray-200 p-2 rounded-full text-sm">EN</button>
          <button className=" bg-gray-200 p-2 rounded-full">
            <IoMail className=" text-xl" />
          </button>
          <sup className=" bg-red-600 -left-4 px-[5px] py-[9.5px] -top-3 rounded-full text-[8px] text-white">
            29
          </sup>
        </div>
      </div>
      <div className=" w-[170px]">
        <div className=" flex justify-between items-center gap-2">
          <LoginModal/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
