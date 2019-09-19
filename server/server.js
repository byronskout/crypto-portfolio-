const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

//Routes
const userRoutes = require("./Routes/User");

const app = express();

mongoose.connect(
  process.env.mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDb Connected");
  }
);
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
