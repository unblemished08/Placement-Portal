import express from "express";
import { getCompaniesByRollNo } from "../Controllers/studentCompanyController.js";
import userAuth from "../Middlewares/authMiddleware.js"
import {getCompanyByNameAndJobId} from "../Controllers/companyDetailController.js"

const router = express.Router();

router.post("/student/companies",userAuth, getCompaniesByRollNo);
router.post("/companydetails",userAuth, getCompanyByNameAndJobId);

export default router;
