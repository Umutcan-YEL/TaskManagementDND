import mongoose from "mongoose";
import "dotenv/config.js";
mongoose.set("strictQuery", false);

export const Connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
