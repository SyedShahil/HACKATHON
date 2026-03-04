const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("./models/user.model");
const Symptom = require("./models/symptoms.model");
const secretcode = process.env.SECRET_CODE;
const port = 3000;
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/healthcare").then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/login', async (req, res) => {
    let data = req.body;
    console.log(data);
    try {
        const user = await User.findOne({ email: data.email });
        console.log(user);
        if (user) {
            let PassComp = await bcrypt.compare(data.password, user.password);
            console.log(PassComp);
            if (PassComp) {
                const token = jwt.sign({
                    name: user.name,
                    email: user.email
                }, secretcode);
                console.log(token);
                res.json({ status: 'ok', token });
            }
        } else {
            res.json({ status: 'error', error: 'Email Doesnt Exist' })
        }
    }
    catch {
        res.json({ status: 'error', error: 'Network Issues' })
    }
})

app.post('/register', async (req, res) => {
    let data = req.body;
    try {
        const temp = await User.findOne({ email: data.email });

        if (temp) {
            return res.json({ status: 'error', error: 'Email In Use' });
        }

        const newPassword = await bcrypt.hash(data.password, 10);

        const user = await User.create({
            name: data.name,
            email: data.email,
            password: newPassword,
            DOB: data.DOB,
        });

        res.send({ status: 'ok' });

    } catch (err) {
        console.log(err);  
        res.json({ status: 'error', error: 'Server Error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});