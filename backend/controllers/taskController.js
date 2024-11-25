const db = require("../config/db");

exports.getTasks = (req, res) => {
  db.all("SELECT * FROM tasks WHERE user_id = ?", [req.userId], (err, rows) => {
    if (err) return res.status(500).json({ error: "Failed to fetch tasks" });
    res.json(rows);
  });
};

exports.addTask = (req, res) => {
  const { title, due_date } = req.body;
  db.run(
    "INSERT INTO tasks (title, due_date, user_id) VALUES (?, ?, ?)",
    [title, due_date, req.userId],
    function (err) {
      if (err) return res.status(500).json({ error: "Failed to add task" });
      res.status(201).json({ id: this.lastID, title, due_date });
    }
  );
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: "Failed to delete task" });
    res.json({ message: "Task deleted successfully" });
  });
};
