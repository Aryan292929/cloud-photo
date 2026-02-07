import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            required: true,
            trim: true,
        },
         publicUrl: {
            type: String,
            required: true,
            trim: true,
        },

        userId: {

            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true

        }
    },
    { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo
