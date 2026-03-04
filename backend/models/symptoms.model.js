const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
    symptoms:[
        {type:String}
    ],
    riskScore:{type:Number,required:true},
    level:{type:String,enum:["low","medium","high"],default:"high"},
    recommendation: { type: String, required: true },
    reason: { type: String, required: true },
});

const Symptom = mongoose.model('Symptom', symptomSchema);
module.exports = Symptom;