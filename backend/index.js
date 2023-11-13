require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const app = express();
const cors = require('cors');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

app.use(cors());

const routes = require("./routes/routes");

app.use("/", routes);


app.listen(5005, () => {
  console.log(`Server Started at ${5005}`);
});
