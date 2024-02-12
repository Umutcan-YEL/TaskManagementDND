import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddBoard,
  DeleteBoard,
  GetBoards,
  UpdateBoard,
} from "../../api/BoardApi";
import { BoardModel, BoardRequestModel } from "../../../models/Board";
const initialState = {
  isLoading: false,
  isError: false,
  boardData: null,
};

export const getboards = createAsyncThunk("board/get", async () => {
  return await GetBoards();
});

export const addboard = createAsyncThunk(
  "board/add",
  async (values: BoardRequestModel) => {
    return await AddBoard(values);
  }
);

export const deleteboard = createAsyncThunk(
  "board/delete",
  async (board_id: string) => {
    return await DeleteBoard(board_id);
  }
);

export const updateboard = createAsyncThunk(
  "board/update",
  async (values: BoardModel) => {
    return await UpdateBoard(values);
  }
);

const taskSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getboards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getboards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boardData = action.payload.data;
      })
      .addCase(getboards.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addboard.fulfilled, (state) => {
        state.isLoading = false;
        location.reload();
      })
      .addCase(addboard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteboard.fulfilled, (state) => {
        state.isLoading = false;
        location.reload();
      })
      .addCase(deleteboard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateboard.fulfilled, (state) => {
        state.isLoading = false;
        location.reload();
      })
      .addCase(updateboard.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default taskSlice.reducer;
