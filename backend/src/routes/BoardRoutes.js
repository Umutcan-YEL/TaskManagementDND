import express from "express";
import {
  GetBoards,
  AddBoards,
  DeleteBoards,
  UpdateBoards,
} from "../controller/BoardController.js";

const router = express.Router();

router.get("/get", GetBoards);
router.post("/add", AddBoards);
router.delete("/delete/:id", DeleteBoards);
router.put("/update/:id", UpdateBoards);

export default router;
