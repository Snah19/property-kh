"use server";

import cloudinary from "@/config/cloudinary";
import axios from "axios";

export const uploadImagesToCloudinary = async (imagesBase64) => {
  const imageURLs = [];

  for (const base64 of imagesBase64) {
    const { secure_url } = await cloudinary.uploader.upload(base64, { folder: "PropertyKH" });
    imageURLs.push(secure_url);
  }

  return imageURLs;
};

export const deleteImagesFromCloudinary = async (image) => {
  // example: https://res.cloudinary.com/dtgse2fwz/image/upload/v1754119011/PropertyKH/uvg6phsa0lvimh1tw6ul.jpg
  try {
    const parts = image.split("/");
    const folder = parts[parts.length - 2]; // PropertyKH
    const filename = parts[parts.length - 1].split(".")[0]; // uvg6phsa0lvimh1tw6ul
    const publicId = `${folder}/${filename}`;

    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  }
  catch (error) {
    console.error(error.message);
  }
};