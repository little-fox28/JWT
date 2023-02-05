const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("common"));

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

mongoose.connect(process.env.URI, () => {
  console.log("Database connected!!");
  app.listen(8000, () => {
    console.log("Server is running ...");
  });
});

