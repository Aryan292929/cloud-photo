
import express from "express"
import dotenv from "dotenv"
import dbConnection from "./database/dbconnect.js"
import userRouter from "./routes/user.js"
import photoRouter from "./routes/photo.js"
import cors from "cors"


dotenv.config({ path:'.env' })

// server created

const app = express()

// db connection..

dbConnection()

// middlewares

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended:true}))

// routes 

// api routes

// user api routes

app.use("/api/user",userRouter)

// photo api routes

app.use("/api/photo",photoRouter)

 

// server start

const port = process.env.PORT

app.listen(port,()=>console.log("server is running mast",port))




