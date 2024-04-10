"use client";
// components/Chat.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { MdPersonOff } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


const Chat = () => {
  const [conversation, setconversation] = useState();

  useEffect(() => {
    fetch("/chat.json")
      .then((res) => res.json())
      .then((data) => setconversation(data));
  }, []);

  // console.log(conversation);

  return (
    <div style={{ maxWidth: "500px" }} className=" mx-auto ">
      <h2 className=" font-bold text-sm">Chat Or Send Message</h2>
      <hr />
      <div className=" flex items-center">
        <div className="absolute">
          <CiSearch className=" text-xl ml-2 " />
        </div>
        <input
          type="serach"
          name="search"
          placeholder="Search by Id , Name etc"
          className=" border p-2 pl-9 rounded-xl w-full mt-1 bg-gray-200"
        />
      </div>
      <div className="">
        <div className=" w-full  flex gap-3 justify-end px-5 text-3xl pt-3">
          <MdPersonOff className=" hover:opacity-60 active:opacity-25"/>
          <RiDeleteBin6Line className=" hover:opacity-60 active:opacity-25"/>
        </div>
        {conversation?.map((chat, index) => (
          <div key={chat.id} className=" mt-5 px-3 flex">
            <div>
              <input type="checkbox" className=" border"/>
            </div>
            <div className=" flex items-center gap-5 hover:bg-gray-200 w-full rounded-lg p-2">
              <div className=" w-20 h-20">
                <img src={chat.image} alt="" className=" rounded-full" />
              </div>
              <div>
                <h2 className=" font-bold">{chat.name}</h2>
                <p className=" text-sm font-medium">
                  {chat?.posts[0]?.postTitle}
                </p>
                <p className=" text-sm text-gray-400">
                  {chat.lastMessage?.content}
                </p>
                <p className=" text-sm text-gray-400">{chat.lastMessageTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
