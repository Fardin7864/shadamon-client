"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const page = (params) => {
  const [conversation, setconversation] = useState();
  const [user, setUser] = useState();
  const [router, setRouter] = useState(null);

  useEffect(() => {
    import('next/router').then((nextRouter) => {
      setRouter(nextRouter);
    });
  }, []);

  const goBack = () => {
    if (router) {
      router.default.back();
    }
  };

  useEffect(() => {
    fetch("/chat.json")
      .then((res) => res.json())
      .then((data) => setconversation(data));
  }, []);
  useEffect(() => {
    const message = conversation?.filter(
      (message) => message.id == params.params.id
    );
    setUser(message ? message[0] : null);
  }, [conversation, params.params.id]);
  console.log(params.params.id);
  console.log(user);

  return (
    <div style={{ maxWidth: "500px" }} className=" mx-auto  ">
      <div className=" w-[500px] ml-[0px] rounded-xl bg-white pt-3 px-3 pb-10">
        {/* arow and cross */}
        <form method="dialog">
          <div className="flex justify-between items-center">
            <button onClick={goBack} className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full ">
              <FaArrowLeftLong />
            </button>
            <button onClick={goBack} className="hover:bg-black duration-300 hover:text-white bg-gray-300 p-2 lg:p-3 rounded-full ">
              <RxCross2 />
            </button>
          </div>
        </form>
        <div>
          <p className=" text-xs text-center">
            Chat with{" "}
            <span className=" text-sm font-bold">
              {user?.posts[0]?.postTitle}
            </span>
          </p>
        </div>
        <div className=" flex items-center gap-5 w-full rounded-lg p-2 border border-l-0 border-r-0">
          <div className=" w-20 h-20">
            <img src={user?.image} alt="" className="" />
          </div>
          <div>
            <h2 className=" font-bold">{user?.name}</h2>
            <p className=" text-sm font-medium">{user?.posts[0]?.postTitle}</p>
            <p className=" text-sm text-gray-400">
              {user?.lastMessage?.content}
            </p>
            <p className=" text-sm text-gray-400">$ 2100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
