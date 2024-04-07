"use client";

import MainSection from "@/client/MainSection";
import Sidebar from "@/client/Sidebar";
import Footer from "@/common/Footer";
import Image from "next/image";
import { FaArrowAltCircleUp } from "react-icons/fa";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="overflow-hidden ">
      <main style={{ maxWidth: "1010px", margin: "auto" }} className="relative">
        <div className=" flex justify-between gap:2 lg:gap-[50px] w-full relative lg:-ml-[45px]">
          <Sidebar />
          <MainSection />
          <div className="w-[160px] pt-[50px] hidden lg:flex justify-center">
            <Image
              src="/left-banner.jpg"
              alt="sidebar ad"
              width={200}
              height={500}
              className=" max-h-[500px]"
            />
          </div>
        </div>
        <button
          onClick={goToTop}
          className="text-[#fb6320] text-2xl  absolute right-52 bottom-8"
        >
          <FaArrowAltCircleUp />
        </button>
      </main>

      <Footer />
    </div>
  );
}
