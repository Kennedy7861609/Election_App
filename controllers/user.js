const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
// prisma creates function


const createUser= async (req, res, next) => {

    try {

        const data = req.body
        const newUser = await prisma.user.create({
            data,
        })
        res.status(201).json({
            message: 'User Saved',
            newUser
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }
}
const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body
        const update = await prisma.user.update({
            where: {
                id
            },
            data,
        })
        res.status(201).json({
            message: 'User Updated',
            update
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const deleteUser = await prisma.user.delete({
            where: {
                id
            },
        })
        res.status(201).json({
            message: 'User Deleted',
            deleteUser
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }
}
const getUser = async (req, res, next) => {
    try {
        const find = await prisma.user.findMany({
        });
          res.status(201).json({
            find,
          })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }

}
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUser,

}