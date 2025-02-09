import express from 'express';
const router = express.Router();

import {saveResult} from "../Controllers/saveResult.js"

router.post('/save', saveResult);

export default router;