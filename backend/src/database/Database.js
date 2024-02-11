import mongoose from "mongoose";

export const Connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://umutcanyel132:123@taskmanager.mdkvler.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
