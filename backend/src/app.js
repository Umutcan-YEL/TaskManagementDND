import express from "express";

import boardRouter from "./routes/BoardRoutes.js";
import taskRouter from "./routes/TaskRoutes.js";

import cors from "cors";
import { Connect } from "./database/Database.js";
const app = express();

Connect();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/board", boardRouter);
app.use("/task", taskRouter);

app.listen(3000, () => {
  console.log("Server is Running");
});
