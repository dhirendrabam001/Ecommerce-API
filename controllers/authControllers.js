const {registerModel} = require("../Models/user");
const bcrypt = require("bcrypt");

const registerRequest = async (req,res) => {
    try {
        const {username, email, password, cpassword} = req.body;

        // All filed are required or not 
        if(!username || !email || !password || !cpassword) {
            return res.status(400).json({success: false, message: "Please field the all requirements"});
        }

        //  Match the password and cpassword
        if(password !== cpassword) {
            return res.status(400).json({success: false, message: "Please match the password"});
        }

        const findEmail = await registerModel.find
        // HashPassword 
        const HashPassword = await bcrypt.hash(password, 10);
        

        
        


    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Response Error"})
    }
    

};

module.exports = {
    registerRequest
}