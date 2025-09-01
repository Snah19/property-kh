"use client";
import axios from "axios";
import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { toast } from "react-toastify";

const BookmarkButton = ({ userId, propertyId, bookmarked }) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need an account for this action");
      return;
    }

    const { data } = await axios.patch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/bookmarks/userId/${userId}`, { propertyId, isBookmarked });
    if (data.isBookmarked) {
      toast.success("Added to bookmarks");
      setIsBookmarked(true);
    }
    else {
      toast.success("Removed from bookmarks");
      setIsBookmarked(false);
    }
  };

  return (
    <button className={`flex justify-center items-center gap-x-2 w-full py-2 px-4 font-bold rounded-full shadow-md cursor-pointer ${isBookmarked ? "bg-blue-500 hover:bg-blue-600" : "bg-white hover:bg-slate-50"} text-white`} onClick={handleClick}>
      {isBookmarked ? <MdBookmarkAdded className="text-2xl text-white" /> : <MdBookmarkAdd className="text-2xl text-blue-500" />}
    </button>
  );
};

export default BookmarkButton;