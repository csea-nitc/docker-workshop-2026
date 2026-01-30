const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const connectDb = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    if (!MONGO_URL) {
      throw new Error("MONGO_URL is not defined in the .env");
    }

    await mongoose.connect(MONGO_URL);

    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Hello World by CSEA :)");
});

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Listening on port ${PORT}`);
});
