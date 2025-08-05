"use server";

import connectToMongoDB from "@/config/mongodb";
import { getSessionUser } from "@/utils/get-session-user";
import Message from "@/models/message";

const sendMessage = async (_prevState, formData) => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) throw new Error("User ID is required");

  const { userId } = sessionUser;

  if (userId === formData.get("recipient_id")) return { error: "You cannot send a message to yourself" };

  const message = new Message({
    sender_id: userId,
    recipient_id: formData.get("recipient_id"),
    property_id: formData.get("property_id"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    body: formData.get("body")
  });

  await message.save();

  return { isSubmitted: true, message: "Message sent successfully" };
};

export default sendMessage;