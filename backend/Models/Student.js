import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        rollNo:{
            type:String,
            required:true,
            unique: true,
        },
        personal_email:{
            type:String,
            required: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            lowercase: true,
        },
        college_email:{
            type:String,
            required: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            lowercase: true,
        },
        phoneNumber:{
            type: String,
            required: true,
            match: /^\d{10}$/,
        },
        gender: {
            type: String,
            required:true,
            enum: ["Male", "Female"], 
        },
        batch: {
            type: String,
            required:true,
        },
        cgpa:{
            type:Number,
            required: true,
            min: 0.0,
            max: 10.0,
        },
        backlogs: {
            type: String,
            enum: ["Nil", "1", "2","3",">=4"],
            required: true,
        },
        branch: {
            type: String,
            enum: ["CS", "IT", "ECE","EE","MECH","CIVIL","PIE"],
            required: true,
        },
        familyIncome: {
            type: String,
            enum: ["<1Lac", ">=1Lac", ">=5Lac"],
            required: true,
        },
        category: {
            type: String,
            enum: ["Gen", "OBC", "SC/ST","PWD"],
            required: true,
        },
        studentImage: {
            type: String,
            // required:true,
            //match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        isDisabled: {
            type: String,
            enum: ["Yes", "No"],
            required:true,
        },
        password:{
            type:String,
            required:true,
            select: false,
        },
        approved:{
            type:String,
            enum:["Yes","No"],
            default:"No",
        }
    },
    {
        timestamps: true,
    }
);

// middelwares
StudentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

  
//compare password
StudentSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
};
  
  //JSON WEBTOKEN
  StudentSchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
  };
  
const Student = mongoose.model("Student", StudentSchema);
  
export default Student

