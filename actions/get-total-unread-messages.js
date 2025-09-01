"use server";

import { getSessionUser } from "@/utils/get-session-user";
import axios from "axios";

const getTotalUnreadMessages = async () => {
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) return { count: 0 };
  const { userId } = sessionUser;

  const { data: { count } } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages/unread/${userId}`);
  
  return { count };
};

export default getTotalUnreadMessages;