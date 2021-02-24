import express from 'express';
import { createOrUpdateUser,currentUser } from '../controllers/authController.js';
import {authCheck, authAdminCheck} from '../middlware/auth.js'

const router = express.Router();


//______________ '/api/v1/users/'____________________
//@desc create or update user
//@route POST /api/users/create-or-update-user
//@access Public
router.post('/create-or-update-user',authCheck,createOrUpdateUser)
//______________ '/api/v1/users/'____________________
//@desc post req for get current user
//@route POST /api/users/current-user
//@access Public
router.post('/current-user',authCheck,currentUser)
//@desc post req for get current user
//@route POST /api/users/current-user
//@access Public
router.post('/current-admin',authCheck,authAdminCheck,currentUser)



export default router;