import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GetTasks,
  AddTask,
  updateBoardId,
  UpdateTask,
  DeleteTask,
} from "../../api/TaskApi";
import {
  TaskBodyModel,
  TaskUpdateIDModel,
  TaskUpdateModel,
} from "../../../models/Task";

const initialState = {
  isLoading: false,
  isError: false,
  taskData: [],
};

export const gettasks = createAsyncThunk("task/get", async () => {
  return await GetTasks();
});

export const addtask = createAsyncThunk(
  "task/add",
  async (values: TaskBodyModel) => {
    return await AddTask(values);
  }
);

export const deletetask = createAsyncThunk(
  "task/delete",
  async (task_id: string) => {
    return await DeleteTask(task_id);
  }
);

export const updateId = createAsyncThunk(
  "task/updateId",
  async (values: TaskUpdateIDModel) => {
    return await updateBoardId(values);
  }
);

export const updatetask = createAsyncThunk(
  "task/update",
  async (values: TaskUpdateModel) => {
    return await UpdateTask(values);
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(gettasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(gettasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.taskData = action.payload.data;
      })
      .addCase(gettasks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addtask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addtask.fulfilled, (state) => {
        state.isLoading = false;
        location.reload();
      })
      .addCase(addtask.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updatetask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatetask.fulfilled, (state) => {
        state.isLoading = false;
        location.reload();
      })
      .addCase(updatetask.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deletetask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletetask.fulfilled, (state) => {
        state.isLoading = false;
        location.reload();
      })
      .addCase(deletetask.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default taskSlice.reducer;
