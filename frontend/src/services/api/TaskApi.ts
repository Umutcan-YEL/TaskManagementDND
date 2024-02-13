import axios from "axios";
import {
  TaskBodyModel,
  TaskUpdateIDModel,
  TaskUpdateModel,
} from "../../models/Task";

const baseUrl = "https://enthusiastic-outerwear-fly.cyclic.app/task";

export const GetTasks = async () => {
  const response = await axios.get(baseUrl + "/get");

  return response;
};

export const AddTask = async (value: TaskBodyModel) => {
  console.log(value);
  const body: TaskBodyModel = {
    name: value.name,
    description: value.description,
    status: value.status,
    due_time: value.due_time,
    board_id: value.board_id,
  };

  try {
    const response = await axios.post(`${baseUrl}/add `, body);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateTask = async (values: TaskUpdateModel) => {
  const body: TaskBodyModel = {
    name: values.task.name,
    description: values.task.description,
    status: values.task.status,
    due_time: values.task.due_time,
    board_id: values.task.board_id,
  };

  const response = await axios.put(
    `${baseUrl}/update/${values.task._id} `,
    body
  );

  return response;
};

export const updateBoardId = async (values: TaskUpdateIDModel) => {
  const body = {
    board_id: values.ids.board_id,
  };

  const response = await axios.put(
    `${baseUrl}/update/${values.ids.task_id} `,
    body
  );

  return response;
};
export const DeleteTask = async (task_id: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete/${task_id}`);
    return response;
  } catch (err) {
    console.error(err);
  }
};
