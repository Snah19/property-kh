"use server";

import connectToMongoDB from "@/config/mongodb";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/get-session-user";
import { revalidatePath } from "next/cache";

const markMessageAsRead = async (messageId) => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) throw new Error("User ID is required");

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) throw new Error("Message not found");

  if (message.recipient_id.toString() !== userId) throw new Error("Unauthorized");

  message.is_read = !message.is_read;

  revalidatePath("notification", "page");

  await message.save();

  return message.is_read;
};

export default markMessageAsRead;