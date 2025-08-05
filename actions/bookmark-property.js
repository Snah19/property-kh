"use server";

import connectToMongoDB from "@/config/mongodb";
import User from "@/models/user";
import { getSessionUser } from "@/utils/get-session-user";
import { revalidatePath } from "next/cache";

const bookmarkProperty = async (propertyId) => {
  await connectToMongoDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) throw new Error("User Id is required");

  const { userId } = sessionUser;
  const user = await User.findById(userId);
  let isBookmarked = user.bookmarks.includes(propertyId);

  let message;

  if (isBookmarked) {
    // If already bookmarked, then remove
    user.bookmarks.pull(propertyId);
    message = "Bookmark removed";
    isBookmarked = false;
  }
  else {
    // If not already bookmarked, then add
    user.bookmarks.push(propertyId);
    message = "Bookmark added";
    isBookmarked = true;
  }

  await user.save();
  revalidatePath("/properties/saved", "page");

  return { message, isBookmarked };
};

export default bookmarkProperty;