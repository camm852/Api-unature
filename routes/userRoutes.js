import express from 'express';
import {getUsers,newUser,deleteUser,editUser,getUser} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers)
router.get('/add',newUser)
router.get('/delete',deleteUser)
router.get('/edit',editUser)
router.get("/get/:id",getUser)

// http://localhost:4000/users



export default router;
