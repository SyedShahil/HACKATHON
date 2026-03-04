const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{type:String,required:true},
    specialist:{type:String,required:true},
    address: { type: String, required: true },
    phone: { type: String, required: true },
    rating: {
        type: Number,
        min: 0,
        max: 5
      }
    });

const doctor = mongoose.model('Doctor', doctorSchema);
module.exports = doctor;