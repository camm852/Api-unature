import prisma from '@prisma/client'
const {PrismaClient} = prisma

const Prisma = new PrismaClient()

const insertUser = async() => {
    const post = await Prisma.post.createMany({
        data: [
            {nombre: 'jorgechupador', pass: '1235'},
        ]
    })
    console.log(post)
    return post;
};

const dropUser = async() => {
    const post = await Prisma.post.delete({
        where:{
            id:7
        }
    })
    return post;
};

const updateUser = async() => {
    const post = await Prisma.post.update({
        where:{
            id:13
        },
        data:{
            nombre:"hola",
        }
    })
    return post;
};

const showUser = async(userID) => {
    const post = await Prisma.post.findUnique({
        where:{
            id:userID
        }
    })
    return post;
};

const showUsers = async() =>{
    const post = await Prisma.post.findMany()
    return post;
};

export {insertUser,dropUser,updateUser,showUser,showUsers};