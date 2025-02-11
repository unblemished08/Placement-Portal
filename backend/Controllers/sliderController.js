import StuCom from "../Models/StuCom.js";
import Student from "../Models/Student.js";
import Company from "../Models/Company.js";

export const getHighCtcStudents = async (req, res) => {
    try {
        const students = await StuCom.find()
            .populate({ path: "rollNo", model: Student, select: "name rollNo studentImage batch" })
            .populate({ path: "job_id", model: Company, select: "name companyImage job_profile role ctc" })
            .lean();

        // Filter students with CTC >= 25 LPA
        const filteredStudents = students.filter(student => 
            student.job_id?.ctc && !isNaN(student.job_id.ctc) && parseFloat(student.job_id.ctc) >= 25
        );

        const response = filteredStudents.map(student => ({
            name: student.rollNo?.name,
            rollNo: student.rollNo?.rollNo,
            studentImage: student.rollNo?.studentImage,
            batch: student.rollNo?.batch,
            companyName: student.job_id?.name,
            companyImage: student.job_id?.companyImage,
            job_profile: student.job_id?.job_profile,
            role: student.job_id?.role,
            ctc: student.job_id?.ctc,
        }));

        res.json(response);
    } catch (error) {
        console.error("Error fetching high CTC students:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
