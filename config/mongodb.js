import mongoose from "mongoose";

let isConnected = false;

const connectToMongoDB = async () => {
  if (isConnected) return;

  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Connected to MongoDB!");
  }
  catch (error) {
    console.error(error.message);
  }
};

export default connectToMongoDB;