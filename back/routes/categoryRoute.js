import express from 'express';
// import { createOrUpdateUser,currentUser } from '../controllers/authController.js';
//from controllers create-read-update-remove
import { create,read,remove,update, list  } from '../controllers/categoryController.js'

import {authCheck, authAdminCheck} from '../middlware/auth.js'

const router = express.Router();

//route
//______________ '/api/v1/category'____________________
router.route('/')
.post(authCheck,authAdminCheck,create)
//@desc create new category
//@route POST /api/v1/category
//@access Privé
.get(list);
//@desc create new category
//@route Get /api/v1/category
//@access Public

router.route('/:slug')
//@desc create new category
//@route GET /api/v1/category/:slug
//@access Public
.get(read)
//@desc create new category
//@route PUT /api/v1/category/:slug
//@access Privé
.put(authCheck,authAdminCheck,update)
//@desc create new category
//@route DELET /api/v1/category/:slug
//@access Privé
.delete(authCheck,authAdminCheck,remove)


export default router;