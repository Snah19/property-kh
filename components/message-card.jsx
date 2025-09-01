"use client";

import { toast } from "react-toastify";
import axios from "axios";
import { useNotificationContext } from "@/contexts/notification-context";

const MessageCard = ({ userId, message, setMessages }) => {
  const { _id, property_id, body, is_read, name, email, phone_number, createdAt } = message;
  const { title } = property_id;
  const diffInDays = Math.floor((new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24));

  const { setUnreadCount } = useNotificationContext();

  const messageArr = [
    {key: "Name", value: name},
    {key: "Email", value: email, link: `mailto:${email}`},
    {key: "Phone number", value: phone_number, link: `tel:${phone_number}`},
    {key: "Received", value: new Date(createdAt).toLocaleString()},
  ];

  const handleMark = async () => {
    const { data: { isMarked } } = await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages/${_id}`);
    if (isMarked) {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages/${userId}`);
      setMessages([...data.filter(msg => !msg.is_read), ...data.filter(msg => msg.is_read)]);
      setUnreadCount(curr => curr - 1);
    }
  };

  const handleDelete = async () => {
    const { data: { isDeleted } } = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages/${_id}`);
    if (isDeleted) {
      toast.success("Message deleted");
      setMessages(curr => curr.filter(c => c._id !== _id));
      setUnreadCount(curr => {
        return !is_read ? curr - 1: curr;
      });
    }
  };

  return (
    <div className={`relative p-2 sm:p-4 rounded-md shadow-md border border-gray-200 ${is_read && "bg-gray-50"}`}>
      {(diffInDays < 2 && !is_read) && <span className="absolute top-2 right-2 px-2 py-1 text-sm rounded-md bg-yellow-500 text-white">New</span> }
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
      <div className={`flex ${is_read ? "justify-end" : "justify-between" } gap-x-2 mt-4`}>
        {!is_read && <button className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md" onClick={handleMark}>Mark as read</button>}
        <button className="py-1 px-3 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageCard;