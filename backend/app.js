import express from "express";

import boardRouter from "./src/routes/BoardRoutes.js";
import taskRouter from "./src/routes/TaskRoutes.js";
import { config } from "dotenv";
config({ path: process.ENV });

import cors from "cors";
import { Connect } from "./src/database/Database.js";
const app = express();

Connect();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/board", boardRouter);
app.use("/task", taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is Running");
});
