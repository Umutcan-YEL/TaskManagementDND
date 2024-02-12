import axios from "axios";
import { BoardModel, BoardRequestModel } from "../../models/Board";

const baseUrl = "http://localhost:3000/board";

export const GetBoards = () => {
  try {
    const response = axios.get(baseUrl + "/get");
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const AddBoard = async (value: BoardRequestModel) => {
  try {
    const response = await axios.post(`${baseUrl}/add `, { name: value.name });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteBoard = async (board_id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete/${board_id}`);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const UpdateBoard = async (values: BoardModel) => {
  const response = await axios.put(`${baseUrl}/update/${values._id} `, {
    name: values.name,
  });

  return response;
};
