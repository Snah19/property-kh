"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import sendMessage from "@/actions/send-message";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";

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

const PropertyContactForm = ({ property }) => {
  const [state, formAction] = useActionState(sendMessage, {});
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state?.isSubmitted) {
      toast.success(state.message || "Message sent!");
      
      const form = document.querySelector("form");
      if (form) form.reset();
    }
    else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h3 className="mb-6 text-xl font-bold">Contact Owner</h3>
      <form action={formAction}>
        <input type="hidden" name="property_id" defaultValue={property._id} />
        <input type="hidden" name="recipient_id" defaultValue={property.owner} />
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
          <span>
            {pending ? "Sending" : "Send"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default PropertyContactForm;