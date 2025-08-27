const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    username: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, trim: true} 
}, {timeStamp: true});


const registerModel = mongoose.model("registerdata", registerSchema);

module.exports = {registerModel};
