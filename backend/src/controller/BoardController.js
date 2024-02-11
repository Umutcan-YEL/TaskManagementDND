import {
  GetAllBoards,
  AddBoard,
  DeleteBoard,
  UpdateBoard,
} from "../services/BoardService.js";

export const GetBoards = async (req, res) => {
  try {
    const boards = await GetAllBoards();

    res.status(200).send(boards);
  } catch (error) {
    console.log(error);
  }
};

export const AddBoards = async (req, res) => {
  try {
    const boards = await AddBoard(req, res);
    res.status(200).send(boards);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteBoards = async (req, res) => {
  try {
    const boards = await DeleteBoard(req, res);
    res.status(200).send(boards);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateBoards = async (req, res) => {
  try {
    const boards = await UpdateBoard(req, res);
    res.status(200).send(boards);
  } catch (error) {
    console.log(error);
  }
};
