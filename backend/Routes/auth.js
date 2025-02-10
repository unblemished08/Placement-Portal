import express from 'express';
const router = express.Router();

// Import controllers
import {
    login,
    signUp
} from '../Controllers/studentAuthController.js';

import {
    login1,
    signUp1
} from '../Controllers/companyAuthController.js'

import{
    login2
} from '../Controllers/coordinatorAuthController.js'
 

/* Routes */
router.post('/student/signUp', signUp);
router.post('/student/login', login);

router.post('/company/signUp', signUp1);
router.post('/company/login', login1);

router.post('/coordinator/login', login2);

export default router;