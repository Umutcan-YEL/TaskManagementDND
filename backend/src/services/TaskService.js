import Task from "../models/Task.js";

export const GetAllTasks = async () => {
  try {
    const task = Task.find({});

    return task;
  } catch (error) {
    console.log(error);
  }
};

export const AddTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return task;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404);
      return `cannot find any Task with ID ${id}`;
    }
    return task;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    // we cannot find any product in database
    if (!task) {
      res.status(404);
      return `cannot find any Task with ID ${id}`;
    }
    const updatedTask = await Task.findById(id);

    return updatedTask;
  } catch (error) {
    console.error(error);
  }
};
