require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const componentsRoutes = require("./routes/componentsRoutes");
const cors = require('cors')
const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/components", componentsRoutes);





const PORT = process.env.PORT || 5000;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));