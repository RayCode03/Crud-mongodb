const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 4000;

// middeleware
app.use(express.json());
app.use("/api", userRoutes);

// router

app.get("/", (req, res) => {
  res.send("Welcome to my API REST");
});

// mongoosedb connected

mongoose
  .connect(process.env.MONGOOSE_DBA)
  .then(() => console.log("Connected to MongooseDBA Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log("Server listening on port", port);
});
