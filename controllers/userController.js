import {insertUser,dropUser,updateUser,showUser,showUsers} from "../prisma/queries.js"

const newUser = async(req, res) => {
    const post = await insertUser()
    res.json(post)
    
};
const editUser = async(req, res) => {
    const post = await updateUser()
    res.json(post)
};
const deleteUser = async(req, res) => {
    const post = await dropUser()
    res.json(post)
};
const getUsers = async(req, res) => {
    const post = await showUsers()
    res.json(post)
};

const getUser = async(req, res) => {
    console.log(req.params)
    const userID = parseInt(req.params.id)
    const post = await showUser(userID)
    res.json(post)
};


export { newUser, editUser, deleteUser, getUser, getUsers };

