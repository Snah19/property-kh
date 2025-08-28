import connectToMongoDB from "@/config/mongodb";
import { getSessionUser } from "@/utils/get-session-user";
import Message from "@/models/message";
import MessageCard from "@/components/message-card";

const MessageList = async () => {
  await connectToMongoDB();
  const { userId } = await getSessionUser();
  const readMessages = await Message.find({ recipient_id: userId, is_read: true }).sort({ createdAt: -1 }).populate("sender_id", "username").populate("property_id", "title").lean();
  const unreadMessages = await Message.find({ recipient_id: userId, is_read: false }).sort({ createdAt: -1 }).populate("sender_id", "username").populate("property_id", "title").lean();
  const messages = [...unreadMessages, ...readMessages];

  if (messages.length === 0) return <p className="text-center">No notifications</p>;
  return (
    <ul className="space-y-4">
      {messages.map(({ _id, is_read, property_id: {title}, body, email, phone_number, createdAt }) => (
        <li key={_id.toString()}>
          <MessageCard _id={_id.toString()} is_read={is_read} title={title} body={body} email={email} phone_number={phone_number} createdAt={createdAt} />
        </li>
      ))}
    </ul>
  );
};

export default MessageList;

/*

import { Wobble } from 'ldrs/react'
import 'ldrs/react/Wobble.css'

// Default values shown


*/