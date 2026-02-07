import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from '../utils/cloud.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "photos",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

export default upload;
