import Photo from "../../models/photo.js";



const getPhoto = async (req, res) => {
  try {
    const photo = await Photo.findOne({userId:req.user._id,_id:req.params.id})

    if (!photo) {
      return res.status(400).json({
        success: false,
        message: "Photo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Photo fetched",
      photo
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export default getPhoto
