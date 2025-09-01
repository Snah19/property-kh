"use client";

import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { deleteImagesFromCloudinary } from "@/actions/cloudinary-actions";
import { useNotificationContext } from "@/contexts/notification-context";

const DeletePropertyButton = ({ userId, propertyId, images, setProperties }) => {
  const [showModal, setShowModal] = useState(false);
  const { setUnreadCount } = useNotificationContext();

  const handleDelete = async () => {
    setShowModal(false);
    for (const image of images) {
      deleteImagesFromCloudinary(image);
    }
    
    const { data: { isDeleted } } = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${propertyId}`);
    if (isDeleted) {
      const { data: { count } } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages/unread/${userId}`);
      setUnreadCount(count);
      setProperties(curr => curr.filter(c => c._id !== propertyId));
      toast.success("Property deleted");
    }
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="group">
        <MdDelete className="group-hover:text-red-500" />
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="w-80 bg-white rounded-md shadow-lg p-4 text-center">
            <h2 className="text-lg font-semibold mb-4">Delete Confirmation</h2>
            <p className="mb-6 text-gray-600">Are you sure you want to delete this property?</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100">Cancel</button>
              <button onClick={handleDelete} className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePropertyButton;
