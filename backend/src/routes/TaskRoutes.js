import express from "express";
import {
  AddTasks,
  DeleteTasks,
  GetTasks,
  UpdateTasks,
} from "../controller/TaskController.js";

const router = express.Router();

router.get("/get", GetTasks);
router.post("/add", AddTasks);
router.delete("/delete/:id", DeleteTasks);
router.put("/update/:id", UpdateTasks);

export default router;
