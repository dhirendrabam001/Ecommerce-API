const { registerModel } = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerRequest = async (req, res) => {
    try {
        const { username, email, password, cpassword } = req.body;

        // All filed are required or not 
        if (!username || !email || !password || !cpassword) {
            return res.status(400).json({ success: false, message: "Please field the all requirements" });
        }

        //  Match the password and cpassword
        if (password !== cpassword) {
            return res.status(400).json({ success: false, message: "Please match the password" });
        }

        const isMatch = await registerModel.findOne({ email });
        if (isMatch) {
            return res.status(400).json({ success: false, message: "Email address already exits" });
        }
        // HashPassword 
        const HashPassword = await bcrypt.hash(password, 10);

        // Save data into databse
        const user = await registerModel.create({
            username,
            email,
            password: HashPassword,
        });

        res.status(201).json({ success: true, message: "User Register Successfully", userInfo: user });

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Response Error" })
    }


};

const loginRequest = async (req, res) => {
    const { email, password } = req.body;

    // check all field are required
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please all field are required" });
    }

    // find email
    const isMatch = await registerModel.findOne({ email });
    if (!isMatch) {
        return res.status(400).json({success: false, message: "Email id does not found"});
    }

    // compare password
    const comparePassword = await bcrypt.compare(password, isMatch.password);
    if(!comparePassword) {
        return res.status(400).json({success: false, message: "Password does not matched"});
    }

    // Generated jwt token
    const token = jwt.sign(
        {userId: isMatch._id, email: isMatch.email},
        process.env.SECRET_JWT,
        {expiresIn: "45m"}
    );
    

    res.status(200).json({success: true, message: `Welcome To ${isMatch.username}`, token});

};

module.exports = {
    registerRequest,
    loginRequest
}