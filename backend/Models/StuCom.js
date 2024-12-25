import mongoose from "mongoose";

const StuComSchema = new mongoose.Schema(
    {
        rollNo: {
            type: String,
            required: true,
            ref:"Student",
            unique: true,
        },

        name:{
            type:String,
            required: true,
            ref:"Company",
        },

        job_id:{ 
            type:String,
            required:true,
            ref:"Company",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("StuCom", StuComSchema);