import mongoose from "mongoose";

const PostHolderSchema = new mongoose.Schema(
    {
        rollNo: {
            type: String,
            required: true,
            ref:"Student"
        },

        post:{
            type:String,
            required: true,
            enum:["ICC","PCC"],
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("PostHolder", PostHolderSchema);