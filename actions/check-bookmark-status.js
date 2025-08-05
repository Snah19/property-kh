"use server";

import connectToMongoDB from "@/config/mongodb";
import User from "@/models/user";
import { getSessionUser } from "@/utils/get-session-user";

const checkBookmarkStatus = async (propertyId) => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) throw new Error("User ID is required");

  const { userId } = sessionUser;
  const user = await User.findById(userId);

  let isBookmarked = user.bookmarks.includes(propertyId);

  return { isBookmarked };
};

export default checkBookmarkStatus;