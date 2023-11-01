import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("mongodb is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });

    isConnected = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
