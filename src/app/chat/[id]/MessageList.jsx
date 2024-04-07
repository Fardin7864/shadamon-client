"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MessageList = () => {
    const [messages, setMessages] = useState();

    useEffect(() => { 
        const loader = async () => { 
            const res = await axios.get("http://localhost:5000/api/v1/chats")
            setMessages(res.data.data)
         }
         loader();
     },[])

     console.log(messages)
    return (
        <div>
            {
                messages?.map((message, index) =>
            <p key={index} className={` bg-blue-600 text-white mt-2 p-2 rounded-full py-3 px-5  ${message.senderId == "65f85fd813f484b49fb4b254" ? "text-left rounded-bl-none w-3/6": "text-right rounded-br-none ml-[50%]"}`}>{message.messages}</p> )
            }
        </div>
    );
};

export default MessageList;