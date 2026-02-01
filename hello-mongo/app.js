const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Counter = require("./counter.model");

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

app.get("/", async (req, res) => {
  try {
    let counter = await Counter.findOne();
    if (!counter) {
      counter = await Counter.create({ value: 0 });
    }

    counter.value += 1;
    await counter.save();

    res.send(`Hello mongo by CSEA ${counter.value} times`);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Listening on port ${PORT}`);
});
