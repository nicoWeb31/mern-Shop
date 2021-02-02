import express from 'express';

const router = express.Router();


//______________ '/login'____________________
//@desc auth user && get token
//@route POST /api/users/login
//@access Public

router.post('/login',(req, res) => {
    res.json({
        status: 'success',
        data : "hey there !!"
    })
})


export default router;