import Photo from "../../models/photo.js";

const getPhotos = async(req,res)=>{

    try {

      const userId = req.user._id

    const photos = await Photo.find({userId})

    return res.status(200).json({
      success: true,
      message: "All photos fetched",
      photos
    });
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

export default getPhotos