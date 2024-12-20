import express from 'express';
const router = express.Router();

// Import controllers
import {
    login,
    signUp
} from '../Controllers/studentAuthContoller.js';

 

/* Routes */
router.post('/student/signUp', signUp);
router.post('/student/login', login);



export default router;