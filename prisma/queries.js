import prisma from '@prisma/client'
const {PrismaClient} = prisma
import bcryptjs from 'bcryptjs'


const Prisma = new PrismaClient()

// const insertUser = async() => {
//     const post = await Prisma.post.createMany({
//         data: [
//             {nombre: 'jorgechupador', pass: '1235'},
//         ]
//     })
//     console.log(post)
//     return post;
// };

// const dropUser = async() => {
//     const post = await Prisma.post.delete({
//         where:{
//             id:7
//         }
//     })
//     return post;
// };

// const updateUser = async() => {
//     const post = await Prisma.post.update({
//         where:{
//             id:13
//         },
//         data:{
//             nombre:"hola",
//         }
//     })
//     return post;
// };

// const showUser = async(userID) => {
//     const post = await Prisma.post.findUnique({
//         where:{
//             id:userID
//         }
//     })
//     return post;
// };

// const showUsers = async() =>{
//     const post = await Prisma.post.findMany()
//     return post;
// };

// export {insertUser,dropUser,updateUser,showUser,showUsers};

const getRoles = async() =>{
    try{
        const get = await Prisma.roles.findMany()
        console.log(get)
        return get;
        // res.status(200).send(get)
    }catch(error){
        // res.status(404)
        console.log("error")
    }
}

const addUser = async(datos) => {
    console.log(datos)
    const pass = datos["contrase_a"]
    console.log("contraseña: "+datos["contrase_a"])
    const passHash = await bcryptjs.hash(pass,8)
    console.log(passHash)
    datos["contrase_a"] = passHash
    try{
        const add = await Prisma.usuarios.createMany({
            data:[
                datos
            ]
        })
        return add;
    }catch(error){
        console.log("error")
    }
}

const dropUser = async(id) => {
    try{
        const drop = await Prisma.usuarios.delete({
            where:{
                id_usuario:id
            }
        })
        return drop;
    }
    catch(error){
        console.log("error")
    }
}

const getUser = async(id) => {
    try{
        const get = await Prisma.usuarios.findUnique({
            where:{
                id_usuario:id
            }
        })
        return get;
    }
    catch(error){
        console.log("error")
    }
}

export {getRoles,addUser,dropUser,getUser}