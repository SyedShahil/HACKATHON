const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

require('dotenv').config();

const User = require("../models/user.model");
const secretcode = process.env.SECRET_CODE;


router.post('/login', async (req, res) => {
    let data = req.body;
    try {
        const user = await User.findOne({ email: data.email });
        console.log(user);
        if (user) {
            let PassComp = await bcrypt.compare(data.password, user.password);
            console.log(PassComp);
            if (PassComp) {
                const token = jwt.sign({
                    email: user.email
                }, secretcode);
                console.log(token);
                res.json({ status: 'ok', token,message:"Login Succesfully" });
            }
        } else {
            res.json({ status: 'error', message: 'Email Doesnt Exist' })
        }
    }
    catch {
        res.json({ status: 'error', message: 'Network Issues' })
    }
})

router.post('/register', async (req, res) => {
    let data = req.body;
    try {
        const temp = await User.findOne({ email: data.email });

        if (temp) {
            return res.json({ status: 'error', message: 'Email In Use' });
        }

        const newPassword = await bcrypt.hash(data.password, 10);

        const user = await User.create({
            name: data.name,
            email: data.email,
            password: newPassword,
            DOB: data.DOB,
        });

        res.send({ status: 'ok' ,message:"Registered Succesfully"});

    } catch (err) {
        console.log(err);  
        res.json({ status: 'error', message: 'Server Error' });
    }
});


module.exports=router;