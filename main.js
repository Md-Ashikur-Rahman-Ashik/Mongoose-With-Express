import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";
const app = express();
const port = 5000;

let con = await mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tx9lkv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

app.get("/", (req, res) => {
  const todo = new Todo({
    desc: "Description of this Todo",
    isDone: true,
    days: 3,
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
  let todo = await Todo.findOne({});
  res.json({ title: todo.title, desc: todo.desc });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
