
import Photo from '../../models/photo.js';
import cloudinary from '../../utils/cloud.js';

const deletePhoto = async(req,res)=>{

    try {

    const { id } = req.params;

    const userId = req.user._id

    const photo = await Photo.findOne({userId,_id:id});

    if (!photo) {
      return res.status(400).json({
        success: false,
        message: "Photo not found",
      });
    }

    // 🔥 cloudinary se delete
    if (photo.publicUrl) {
      await cloudinary.uploader.destroy(photo.publicUrl);
    }

    // db se delete
   const deletedPhoto = await Photo.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Photo deleted successfully",
      deletedPhoto
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }

}

export default deletePhoto