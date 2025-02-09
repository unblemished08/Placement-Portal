import express from 'express';
const router = express.Router();

import {saveCoordinator, deleteCoordinator} from "../Controllers/coordinatorController.js"

router.post('/register', saveCoordinator);
router.post('/delete',deleteCoordinator);

export default router;