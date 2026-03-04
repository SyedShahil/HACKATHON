const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("./models/user.model");
const Symptom = require("./models/symptoms.model");
const port = 3000;
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute=require("./routes/authRoute");
const userRoute=require("./routes/userRoute");

mongoose.connect("mongodb://localhost:27017/healthcare").then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute)

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});