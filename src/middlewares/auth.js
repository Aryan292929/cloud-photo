import jwt from "jsonwebtoken";
import User from "../models/user.js";

 const userAuth = async (req, res, next) => {
  try {
    const token = req.header("auth")
    

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid token or expired token",
    });
  }
};

export default userAuth
