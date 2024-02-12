import { BoardModel } from "./Board";
import { TaskModel } from "./Task";

export type TaskState = {
  task: {
    isLoading: boolean;
    isError: boolean;
    taskData: Array<TaskModel>;
  };
};

export type BoardState = {
  board: {
    isLoading: boolean;
    boardData: Array<BoardModel>;
  };
};
