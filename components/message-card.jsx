"use client";

import deleteMessage from "@/actions/delete-message";
import markMessageAsRead from "@/actions/mark-message-as-read";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNotificationContext } from "@/contexts/notification-context";

const MessageCard = ({ _id, is_read, title, body, email, phone_number, createdAt }) => {
  const [isRead, setIsRead] = useState(is_read);
  const { setUnreadCount } = useNotificationContext();

  const messageArr = [
    {key: "Email", value: email, link: `mailto:${email}`},
    {key: "Phone number", value: phone_number, link: `tel:${phone_number}`},
    {key: "Received", value: new Date(createdAt).toLocaleString()},
  ];

  const handleMark = async () => {
    const read = await markMessageAsRead(_id);
    setIsRead(read);
    setUnreadCount(curr => read ? curr - 1 : curr + 1);
    toast.success(`Marked as ${read ? "read" : "new"}`);
  };

  const handleDelete = async () => {
    await deleteMessage(_id);
    setUnreadCount(curr => isRead ? curr : curr - 1);
    toast.success("Message deleted");
  };

  return (
    <div className="relative p-2 sm:p-4 rounded-md shadow-md border border-gray-200">
      {!isRead && <span className="absolute top-2 right-2 px-2 py-1 text-sm rounded-md bg-yellow-500 text-white">New</span> }
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{body}</p>
      <ul className="mt-4 text-sm sm:text-base">
        {messageArr.map(({key, value, link}) => (
          <li className="flex gap-x-2" key={key}>
            <strong>{key}:</strong>
            {link ? (
              <a className="text-blue-500" href={`mailto:${value}`}>{value}</a>
            ): (
              <span>{value}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-between gap-x-2 mt-4">
        <button className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md" onClick={handleMark}>
          {isRead ? "Mark as new" : "Mark as read"}
        </button>
        <button className="py-1 px-3 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageCard;