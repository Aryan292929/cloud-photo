
import express from "express"
import userAuth from "../middlewares/auth.js"
import upload from "../middlewares/upload.js"
import addPhoto from "../controllers/photo/add.js"
import getPhotos from '../controllers/photo/getall.js';
import deletePhoto from "../controllers/photo/delete.js";
import getPhoto from "../controllers/photo/get.js";

const photoRouter = express.Router()


// add a photo

photoRouter.post("/add",userAuth,upload.single("photo"),addPhoto)

// get all photos

photoRouter.get("/get-all",userAuth,getPhotos)

// get photo by id

photoRouter.get("/get/:id",userAuth,getPhoto)

// delete a photo

photoRouter.delete("/delete/:id",userAuth,deletePhoto)


export default photoRouter