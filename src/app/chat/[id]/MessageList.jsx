"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const MessageList = () => {
  const [messages, setMessages] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sendMessage = {
        messages: message,
        postId: messages[0].postId,
        receiverId: messages[0].receiverId,
        senderId: messages[0].senderId,
    }
    try {
      const response = await fetch("http://localhost:5000/api/v1/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendMessage),
      });

      if (response.ok) {
        // Data successfully sent
        console.log("Message sent successfully");
        // Optionally, you can reset the input field
        setMessage("");
      } else {
        console.error("Failed to send message");
      }

    console.log(message)

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const loader = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/chats");
      setMessages(res.data.data);
    };
    loader();
  }, [handleSubmit]);

  console.log(messages);
  return (
    <div>
      {messages?.map((message, index) => (
        <p
          key={index}
          className={` bg-blue-600 text-white mt-2 p-2 rounded-full py-3 px-5  ${
            message.senderId == "65f85fd813f484b49fb4b254"
              ? "text-left rounded-bl-none w-3/6"
              : "text-right rounded-br-none ml-[50%]"
          }`}
        >
          {message.messages}
        </p>
      ))}
      <form onSubmit={handleSubmit} className=" w-full flex items-center mt-2">
        <input
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
          className=" border-2 rounded-md py-2 px-4 w-full"
        />
        <button type="submit" className=" ">
          <AiOutlineSend className=" text-4xl" />
        </button>
      </form>
    </div>
  );
};

export default MessageList;
