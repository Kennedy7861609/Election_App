const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
// prisma creates function


const createPosition = async (req, res, next) => {

    try {

        const data = req.body
        const newPosition = await prisma.position.create({
            data,
        })
        res.status(201).json({
            message: 'Position Saved',
            newPosition
        })
    } catch (error) {
        res.status(400).json(
            {
                message: error.message
            }
        )
    }
}
const updatePosition = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body
        const update = await prisma.position.update({
            where: {
                id
            },
            data,
        })
        res.status(201).json({
            message: 'Position Updated',
            update
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }
}

const deletePosition = async (req, res, next) => {
    try {
        const id = req.params.id
        const deleted = await prisma.position.delete({
            where: {
                id
            },
        })
        res.status(201).json({
            message: 'Position Deleted',
            deleted
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }
}
const findPosition = async (req, res, next) => {
    try {
        const id = req.params.id
        const find = await prisma.position.findMany({
            where: {
                id
            },
        });
        res.status(201).json({
            message: 'Position Found',
            find
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }

}

const getAllPositions = async (req, res, next) => {
    try {
        const getAllPositions = await prisma.position.findUnique({

        })
        res.status(201).json({
            message: 'AllPosition Got',
            getAllPosition
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }

}
module.exports = {
    createPosition,
    updatePosition,
    deletePosition,
    getAllPositions,
    findPosition,

};

