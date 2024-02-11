import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter TaskName"],
    },
    description: {
      type: String,
      required: [false],
    },
    status: {
      type: Number,
      required: [true, "Please Enter Status"],
    },
    due_time: {
      type: Date,
      required: [true, "Please Enter a Due Time"],
    },
    board_id: {
      type: ObjectId,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
