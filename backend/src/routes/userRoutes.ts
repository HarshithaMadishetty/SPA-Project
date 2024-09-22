import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/userContoller';
import User from '../models/userModel'

const router = express.Router();

router.get('/',async(req,res)=>{
    res.send("Hello Harshitha");
    const users =await User.find();
    res.json(users);
})

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
