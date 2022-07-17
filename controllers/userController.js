import {getRoles,addUser,dropUser,getUser} from "../prisma/queries.js"

// const newUser = async(req, res) => {
//     const post = await insertUser()
//     res.json(post)
    
// };
// const editUser = async(req, res) => {
//     const post = await updateUser()
//     res.json(post)
// };
// const deleteUser = async(req, res) => {
//     const post = await dropUser()
//     res.json(post)
// };
// const getUsers = async(req, res) => {
//     const post = await showUsers()
//     res.json(post)
// };

// const getUser = async(req, res) => {
//     // console.log(req.params)
//     // const userID = parseInt(req.params.id)
//     // const post = await showUser(userID)
//     // res.json(post)
//     res.json({message:"hola"})
// };

const sendRoles = async(req,res) => {
    const rol = await getRoles()
    res.json(rol)
};

const setUser = async(req,res) => {
    const data = req.body
    const set = await addUser(data)
    if(set != undefined){
        res.status(200).send("Usuario exitosamente creado")
    }
    else{
        res.status(404).send("Hubo un error a la hora de añadir el usuario")
    }
}

const deleteUser = async(req,res) => {
    const id = req.params.id
    const drop = await dropUser(id)
    if(drop != undefined){
        res.status(200).send(drop)
    }
    else{
        res.status(404).send("Error")
    }
}

const findUser = async(req,res) => {
    const id = req.params.id
    const find = await getUser(id)
    if(find != undefined){
        res.status(200).send(find)
    }
    else{
        res.status(404).send("Error")
    }
}



export { sendRoles,setUser,deleteUser,findUser };

