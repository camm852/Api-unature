import express from 'express';
// import {getUsers,newUser,deleteUser,editUser,getUser} from '../controllers/userController.js';
import {sendRoles,setUser,deleteUser,findUser} from '../controllers/userController.js';

const router = express.Router();

// router.get('/', getUsers)
// router.get('/add',newUser)
// router.get('/delete',deleteUser)
// router.get('/edit',editUser)
// router.get("/get",getUser)

router.get("/get",sendRoles)
router.post("/setUser",setUser)
router.get("/deleteUser/:id",deleteUser)
router.get("/getUser/:id",findUser)


// http://localhost:4000/users



export default router;
