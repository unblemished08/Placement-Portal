import FinalResult from "../Models/FinalResult.js";
import Result from "../Models/Result.js";

export const saveResult = async (req, res) => {
  try {
    const { name, rollNo, job_id, status } = req.body;

    if (status === "Final") {
      // Final result save
      const { ctc, job_profile } = req.body;

      const finalResult = new FinalResult({
        rollNo,
        name,
        job_id,
        ctc,
        job_profile,
      });

      await finalResult.save();
      return res
        .status(201)
        .json({ message: "Final result saved successfully" });
    } else {
      // Result save
      const result = new Result({
        rollNo,
        name,
        job_id,
        status,
      });

      await result.save();
      return res.status(201).json({ message: "Result saved successfully" });
    }
  } catch (error) {
    console.error("Error saving result:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
};

export const getResult = async (req, res) => {
  try {
    const { name, job_id } = req.query;
    
    const finalResults = (await FinalResult.find({ name, job_id })) || null;
    const results = (await Result.find({ name, job_id })) || null;

    if (finalResults.length === 0 && results.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }
    
    res.status(200).json({ finalResults, results });
  } catch (error) {
    console.error("Error fetching result:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};
