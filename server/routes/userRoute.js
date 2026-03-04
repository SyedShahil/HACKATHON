const express = require('express');
const router = express.Router();

const User = require("../models/user.model");
const Symptom = require("../models/symptoms.model");

const authMiddleware=require("../middleware/authMiddleware")

router.use(authMiddleware)



router.post("/addToHistory",async (req,res)=>{
    let data = req.body;
    let email=req.user.email;
    try{
        const user=await User.findOne({email:email});
        if(!user) return res.send({status:"error",message:"User Does'nt Exist"});
        const newSymptom=await Symptom.create({
            symptoms:data.symptoms,
            riskScore:data.riskscore,
            level:data.risklevel,
            recommendation:data.recommendation,
            reason:data.reason
        });
        console.log(newSymptom)
        if(!newSymptom) return res.send({status:'error',message:'Unable to add Symptom'})
        user.symptomsHistory.push(newSymptom._id);
        await user.save();
        res.send({status:'ok',message:'Data Added Succesfully'});
    }catch(e){
        console.log(e);
        return res.send({status:'error',message:'Server Issues'});
    }
})



router.post("/getHistory",async(req,res)=>{
    let email=req.user.email;
    try{
        const user=await User.findOne({email:email});
        if(!user) return res.send({status:"error",message:"User Does'nt Exist"});
        const SymptomsData = await Symptom.find({ _id: { $in: user.symptomsHistory } });
        return res.send({status:'ok',data:SymptomsData});
    }catch(e){
        return res.send({status:'error',error:'Server Issue'});
    } 
})


module.exports=router;