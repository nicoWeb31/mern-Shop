import express from 'express';
import { createOrUpdateUser } from '../controllers/authController.js'

const router = express.Router();


//______________ '/api/v1/users/'____________________
//@desc create or update user
//@route POST /api/users/login
//@access Public

router.post('/create-or-update-user',createOrUpdateUser)


export default router;