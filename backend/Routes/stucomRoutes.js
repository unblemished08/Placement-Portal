import express from "express";
import { getCompaniesByRollNo } from "../Controllers/studentCompanyController.js";

const router = express.Router();

router.post("/student/companies", getCompaniesByRollNo);

export default router;
