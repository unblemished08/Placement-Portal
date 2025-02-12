import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
    {
        rollNo: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"Student",
        },

        name:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"Company",
        },

        job_id:{ 
            type: mongoose.Schema.Types.ObjectId,
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

ResultSchema.index({ rollNo: 1, name: 1, job_id: 1 }, { unique: true });

export default mongoose.model("Result", ResultSchema);