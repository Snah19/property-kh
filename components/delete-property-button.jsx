"use client";

import { MdDelete } from "react-icons/md";
import deleteProperty from "@/actions/delete-property";
import { useTransition, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeletePropertyButton = ({ propertyId }) => {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleDelete = () => {
    setShowModal(false);
    startTransition(async () => {
      try {
        await deleteProperty({ propertyId });
        toast.success("Property deleted successfully");
        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete property");
      }
    });
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="group" disabled={isPending}>
        <MdDelete className="group-hover:text-red-500" />
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="w-80 bg-white rounded-md shadow-lg p-4 text-center">
            <h2 className="text-lg font-semibold mb-4">Delete Confirmation</h2>
            <p className="mb-6 text-gray-600">Are you sure you want to delete this property?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePropertyButton;
