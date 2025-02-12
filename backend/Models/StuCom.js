import mongoose from "mongoose";

const StuComSchema = new mongoose.Schema(
    {
      rollNo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Student",
      },
      name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
      },
      job_id: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
      },
    },
    {
      timestamps: true,
    }
  );
  
  // Enforce unique combination of rollNo, name, and job_id
  StuComSchema.index({ rollNo: 1, name: 1, job_id: 1 }, { unique: true });
  
  export default mongoose.model("StuCom", StuComSchema);
  