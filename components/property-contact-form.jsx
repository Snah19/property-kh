"use client";

import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const formElements = [
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Name",
    required: true
  },
  {
    id: "email",
    name: "email",
    type: "text",
    placeholder: "Email",
    required: true
  },
  {
    id: "phone_number",
    name: "phone_number",
    type: "text",
    placeholder: "Phone number",
    required: false
  },
  {
    id: "body",
    name: "body",
    placeholder: "Your message",
    isBody: true
  },
];

const PropertyContactForm = ({ propertyId, senderId, recipientId }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!senderId) {
      toast.error("You need an account for this action");
      return;
    }

    const form = e.target;
    const formData = Object.fromEntries(new FormData(form).entries());
    const { name, email, phone_number, body } = formData;
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages/`, { sender_id: senderId, recipient_id: recipientId, property_id: propertyId, name, email, phone_number, body });
    if (data?.isSent) {
      toast.success("Message is sent successfully");
      form.reset();
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h3 className="mb-6 text-xl font-bold">Contact Owner</h3>
      <form onSubmit={handleSubmit}>
        <ul className="flex flex-col gap-y-4 mb-4">
          {formElements.map(({id, name, type, placeholder, required, isBody}) => {
            if (isBody) {
              return (
                <li key={id}>
                  <textarea className="w-full h-44 py-2 px-3 shadow appearance-none border focus:outline-none text-gray-700" name={name} placeholder={placeholder} />
                </li>
              );
            } 
            return (
              <li key={id}>
                <input className="w-full py-2 px-3 shadow appearance-none border leading-tight focus:outline-none" name={name} type={type} placeholder={placeholder} required={required} />
              </li>
            );
          })}
        </ul>
        <button className="flex justify-center items-center gap-x-2 w-full py-2 px-4 font-bold rounded-full bg-blue-500 hover:bg-blue-600 text-white focus:outline-none" type="submit">
          <FaPaperPlane />
          <span>Send</span>
        </button>
      </form>
    </div>
  );
};

export default PropertyContactForm;