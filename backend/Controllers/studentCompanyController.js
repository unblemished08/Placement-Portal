import StuCom from "../Models/StuCom.js"; // Import the StuCom model

// Controller to get all companies for a given rollNo
export const getCompaniesByRollNo = async (req, res) => {
    try {
        // Extract rollNo from the request body
        const { rollNo } = req.body;

        // Validate that rollNo is provided
        if (!rollNo) {
            return res.status(400).json({ message: "rollNo is required." });
        }

        // Find all entries in StuCom where rollNo matches
        const companies = await StuCom.find({ rollNo })
            .populate("name", "name") // Populate the company name
            .populate("job_id", "job_id") // Populate the job_id field
            .exec();

        // Check if any entries are found
        if (!companies || companies.length === 0) {
            return res.status(404).json({ message: "No entries found for this roll number." });
        }

        // Return the list of company entries
        return res.status(200).json(companies);
    } catch (error) {
        console.error("Error fetching companies by rollNo:", error);
        return res.status(500).json({ message: "Server error. Please try again later." });
    }
};
