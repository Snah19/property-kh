"use server";

import connectToMongoDB from "@/config/mongodb";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/get-session-user";

const getTotalUnreadMessages = async () => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) throw new Error("User ID is required");
  const { userId } = sessionUser;

  const count = await Message.countDocuments({recipient_id: userId, is_read: false});

  console.log(count);

  return { count };
};

export default getTotalUnreadMessages;