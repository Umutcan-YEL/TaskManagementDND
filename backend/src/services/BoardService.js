import Board from "../models/Board.js";
import Task from "../models/Task.js";

export const GetAllBoards = async () => {
  try {
    const board = Board.find({});

    return board;
  } catch (error) {
    console.log(error);
  }
};

export const AddBoard = async (req, res) => {
  try {
    const board = await Board.create(req.body);
    return board;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.deleteMany({ board_id: id });
    const board = await Board.findByIdAndDelete(id);

    return board;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findByIdAndUpdate(id, req.body);
    // we cannot find any product in database
    if (!board) {
      res.status(404);
      return `cannot find any board with ID ${id}`;
    }
    const updatedboard = await Board.findById(id);

    return updatedboard;
  } catch (error) {
    console.error(error);
  }
};
