"use client";

import MessageCard from "@/components/message-card";
import axios from "axios";
import { useEffect, useState } from "react";

const MessageList = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages/${userId}`);
      setMessages([...data.filter(msg => !msg.is_read), ...data.filter(msg => msg.is_read)]);
    };

    fetchMessages();
  }, []);

  return (
    <ul className="space-y-4">
      {messages?.map(message => (
        <li key={message._id}>
          <MessageCard userId={userId} message={message} setMessages={setMessages} />
        </li>
      ))}
    </ul>
  );
};

export default MessageList;