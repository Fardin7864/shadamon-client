"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdPersonOff } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { ConversationList } from "@chatscope/chat-ui-kit-react";
import Link from "next/link";

const Chat = () => {
  const [conversation, setConversation] = useState([]);
  const [filteredConversation, setFilteredConversation] = useState([]);
  const [conersationList, setConversationList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/chats");
        setConversation(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterConversation = () => {
      if (conversation.length === 0) return;
      const postIdMap = new Map();
      const filtered = conversation
        .reverse()
        .filter((obj) => {
          if (!postIdMap.has(obj.postId)) {
            postIdMap.set(obj.postId, true);
            return true;
          }
          return false;
        })
        .reverse();
      setFilteredConversation(filtered);
    };

    filterConversation();
  }, [conversation]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await Promise.all(
        filteredConversation.map(async (conversation) => {
          try {
            const response = await axios.get(
              `https://shadamon.up.railway.app/api/v1/posts?id=${conversation.postId}`
            );
            return response.data;
          } catch (error) {
            console.error("Error fetching post data:", error);
            return null;
          }
        })
      );
      setConversationList(postsData);
    };

    fetchPosts();
  }, [filteredConversation]);

  console.log(conersationList)

  return (
    <div style={{ maxWidth: "500px" }} className="mx-auto">
      <h2 className="font-bold text-sm">Chat Or Send Message</h2>
      <hr />
      <div className="flex items-center">
        <div className="absolute">
          <CiSearch className="text-xl ml-2" />
        </div>
        <input
          type="search"
          name="search"
          placeholder="Search by Id, Name etc"
          className="border p-2 pl-9 rounded-xl w-full mt-1 bg-gray-200"
        />
      </div>
      <div>
        <div className="w-full flex gap-3 justify-end px-5 text-3xl pt-3">
          <MdPersonOff className="hover:opacity-60 active:opacity-25" />
          <RiDeleteBin6Line className="hover:opacity-60 active:opacity-25" />
        </div>
        {conersationList?.map((chat, index) => (
          <div key={index} className="mt-5 px-3 flex">
            <div>
              <input type="checkbox" className="border" />
            </div>
            <Link href={`/chat/${chat.data[0]._id}`} className="flex items-center gap-5 bg-gray-100 hover:bg-gray-200 w-full rounded-lg p-2">
              <div className="w-20 h-20">
                <div
                  style={{
                    backgroundImage: `url(${chat.data[0].img[0]})`,
                    backgroundSize: 'cover', // Optional: Adjust the background size
                    backgroundPosition: 'center', // Optional: Adjust the background position
                    width: '70px', // Set width of the div as needed
                    height: '70px' // Set height of the div as needed
                  }}
                  className="rounded-full"
                ></div>
              </div>
              <div>
                <h2 className="font-bold">{chat?.data[0].title}</h2>
                <p className="text-sm font-medium">
                 Price: {chat?.data[0].price} ৳
                </p>
                <p className="text-sm text-gray-400">
                  {chat.lastMessage?.content}
                </p>
                <p className="text-sm text-gray-400">{chat.lastMessageTime}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
