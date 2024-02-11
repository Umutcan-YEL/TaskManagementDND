import mongoose from "mongoose";
const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "This board alredy exist"],
      required: [true, "Please Enter Board Name"],
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Board = mongoose.model("Board", boardSchema);

export default Board;
