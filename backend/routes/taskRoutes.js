const express = require("express");
const { getTasks, addTask, deleteTask } = require("../controllers/taskController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", verifyToken, getTasks);
router.post("/", verifyToken, addTask);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
