import Photo from "../../models/photo.js";

const addPhoto = async(req,res)=>{
    try {
    const userId = req.user._id;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No photo uploaded",
      });
    }

    const imageUrl = req.file.path;

    const publicUrl = req.file.filename

  const photo = await Photo.create({imageUrl,userId,publicUrl})

    return res.status(200).json({
      success: true,
      message: "Photo uploaded",
      photo
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

export default addPhoto