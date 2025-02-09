import mongoose from "mongoose";

const PostHolderSchema = new mongoose.Schema(
    {
        rollNo: {
            type: String,
            required: true,
            ref:"Student",
            unique: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
        },
        post:{
            type:String,
            required: true,
            enum:["ICC","PCC"],
        },

        password: {
            type: String,
            required: true,
            select: false,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("PostHolder", PostHolderSchema);