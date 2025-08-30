const jwt = require("jsonwebtoken");
const { registerModel } = require("../Models/user");
const authControllers = require("../controllers/authControllers");
const checkToken = async (req, res, next) => {
  try {
    const token = req.header("Authorized");
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Token is not verify" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    console.log(decoded);

    const id = decoded.userId;
    console.log("user id:", id);
    const user = await registerModel.findById(id);
    console.log("user id:", user);

    if (!user) {
      return res.status({ success: false, message: "User does not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Response issue" });
  }
};

module.exports = checkToken;
