import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
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

        status:{
            type:String,
            enum:["OA","Interview","Final"],
        }
   
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Result", ResultSchema);