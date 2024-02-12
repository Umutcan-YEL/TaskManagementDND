import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/TaskSlice";
import boardReducer from "./slices/BoardSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
