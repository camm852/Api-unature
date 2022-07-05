import prisma from '@prisma/client'
    const {PrismaClient} = prisma

    const Prisma = new PrismaClient()

const newUser = async(req, res) => {
    const post = await Prisma.post.createMany({
                data: [
                    // {nombre: 'daniel', pass: '1236'},
                    // {nombre: 'jorge', pass: '1235'},
                    {nombre: 'jorgechupador', pass: '1235'},
                ]
            })
        console.log(post)
        res.json(post)
};
const editUser = async(req, res) => {
    const post = await Prisma.post.update({
        where:{
            id:6
        },
        data:{
            nombre:"camilo"
        }
    })
    res.json(post)
};
const deleteUser = async(req, res) => {
    const post = await Prisma.post.delete({
        where:{
            id:7
        }
    })
    res.json(post)
};
const getUsers = async(req, res) => {
    const get = await Prisma.post.findMany()
    res.json({get})
};


const getUser = (req, res) => {
    
};


export { newUser, editUser, deleteUser, getUser, getUsers };

