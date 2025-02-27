import {getAllCompany} from '../Controllers/getAllCompany.js';
import express from "express";
const router = express.Router();

router.post('/getAllCompany', getAllCompany);