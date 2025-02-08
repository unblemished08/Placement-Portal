import StuCom from "../Models/StuCom.js";
import Student from "../Models/Student.js";
import Company from "../Models/Company.js";

export const getHighCtcStudents = async (req, res) => {
    try {
        const students = await StuCom.find()
            .populate({ path: "rollNo", model: Student, select: "name rollNo studentImage batch" })
            .populate({ path: "name", model: Company, select: "companyImage job_profile role ctc" })
            .lean();

        // Filter students with CTC >= 25 LPA
        const filteredStudents = students.filter(student => 
            student.name?.ctc && parseFloat(student.name.ctc) >= 25
        );

        const response = filteredStudents.map(student => ({
            name: student.rollNo?.name,
            rollNo: student.rollNo?.rollNo,
            studentImage: student.rollNo?.studentImage,
            batch: student.rollNo?.batch,
            companyImage: student.name?.companyImage,
            job_profile: student.name?.job_profile,
            role: student.name?.role,
            ctc: student.name?.ctc,
        }));

        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
