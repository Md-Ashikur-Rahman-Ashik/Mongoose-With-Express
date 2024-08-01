import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
const app = express();
const port = 5000;

let a = await mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tx9lkv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
