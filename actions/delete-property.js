"use server";
import cloudinary from "@/config/cloudinary";
import connectToMongoDB from "@/config/mongodb";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/get-session-user";
import { revalidatePath } from "next/cache";

const deleteProperty = async ({ propertyId }) => {
  await connectToMongoDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) throw new Error("User ID is required");

  const { userId } = sessionUser;
  const property = await Property.findById(propertyId);

  if (!property) throw new Error("Property not found");
  if (property.owner.toString() !== userId) throw new Error("Unauthorized");

  const publicIds = property.images.map(url => url.split("/").at(-1).split(".").at(0));

  for (let publicId of publicIds) {
    await cloudinary.uploader.destroy(`PropertyKH/${publicId}`);
  }

  await property.deleteOne();

  revalidatePath("/", "layout");

  return { success: true };
};

export default deleteProperty;