
import express from "express"
import userRegister from "../controllers/user/register.js"
import userLogin from "../controllers/user/login.js"
import userProfile from "../controllers/user/profile.js"
import userAuth from "../middlewares/auth.js"

const userRouter = express.Router()

// register a user

userRouter.post("/register",userRegister)

// login user

userRouter.post("/login",userLogin)

// user profile

userRouter.get("/profile",userAuth,userProfile)


export default userRouter