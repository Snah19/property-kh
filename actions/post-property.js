"use server";

import cloudinary from "@/config/cloudinary";
import connectToMongoDB from "@/config/mongodb";
import { getSessionUser } from "@/utils/get-session-user";
import Property from "@/models/property";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const postProperty = async (formData) => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) throw new Error("User ID is required");

  const { userId } = sessionUser;

  const propertyData = {
    owner: userId,
    type: formData.get("type"),
    title: formData.get("title"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode")
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    square_feet: formData.get("square_feet"),
    amenities: formData.getAll("amenities"),
    rates: {
      nightly: formData.get("rates.nightly"),
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly")
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone")
    }
  };

  const imageUrls = [];
  const images = formData.getAll("images").filter(({name}) => name !== "");
  for (const image of images) {
    const imageBuffer = await image.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);
    const imageBase64 = imageData.toString("base64");
    const result = await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`, {folder: "PropertyKH"});
    imageUrls.push(result.secure_url);
  }

  propertyData.images = imageUrls;
  const newProperty = new Property(propertyData);
  await newProperty.save();

  revalidatePath("/", "layout");
  redirect(`/properties/${newProperty._id}`);
  console.log("Property is posted successfully!");
};

export default postProperty;