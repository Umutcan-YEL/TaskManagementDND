export type TaskModel = {
  _id: string;
  name: string;
  description: string;
  status: number;
  due_time: string;
  board_id: string;
};

export type TaskBodyModel = {
  name: string;
  description: string;
  status: number;
  due_time: string;
  board_id: string;
};

export type TaskUpdateModel = {
  task: {
    _id: string;
    name: string;
    description: string;
    status: number;
    due_time: string;
    board_id: string;
  };
};

export type TaskRequestModel = {
  task: TaskBodyModel;
};

export type TaskUpdateIDModel = {
  ids: {
    board_id: string;
    task_id: string;
  };
};
