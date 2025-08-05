"use client";

import bookmarkProperty from "@/actions/bookmark-property";
import checkBookmarkStatus from "@/actions/check-bookmark-status";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { toast } from "react-toastify";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
    });
  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be signed in to bookmark a listing");
      return;
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);

      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
  };

  return (
    <button className={`flex justify-center items-center gap-x-2 w-full py-2 px-4 font-bold rounded-full shadow-md ${isBookmarked ? "bg-blue-500 hover:bg-blue-600" : "bg-white hover:bg-slate-50"} text-white`} onClick={handleClick}>
      {isBookmarked ? <MdBookmarkAdded className="text-2xl text-white" /> : <MdBookmarkAdd className="text-2xl text-blue-500" />}
    </button>
  );
};

export default BookmarkButton;