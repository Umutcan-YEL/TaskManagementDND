import {
  GetAllTasks,
  AddTask,
  DeleteTask,
  UpdateTask,
} from "../services/TaskService.js";

export const GetTasks = async (req, res) => {
  try {
    const tasks = await GetAllTasks();
    res.status(200).send(tasks);
  } catch (error) {
    console.log(error);
  }
};

export const AddTasks = async (req, res) => {
  try {
    const tasks = await AddTask(req, res);
    res.status(200).send(tasks);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteTasks = async (req, res) => {
  try {
    const tasks = await DeleteTask(req, res);
    res.status(200).send(tasks);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateTasks = async (req, res) => {
  try {
    const tasks = await UpdateTask(req, res);
    res.status(200).send(tasks);
  } catch (error) {
    console.log(error);
  }
};
