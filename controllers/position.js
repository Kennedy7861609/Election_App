import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// prisma creates function


const CreatePosition = async (req, res, next) => {

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
            findMany
          })
    } catch (error) {

    }

}

const getSinglePositions = async (req, res, next) => {
try {
    const id = req.params.id
    const getSinglePositions = await prisma.positions.findUnique({
        where: {
            id
        },
    })
      res.status(201).json({
        message: 'SinglePosition Got',
        getSinglePosition
      })
} catch (error) {

}

}
const createVoter = async (req, res, next) => {
    try {
        const voter = await prisma.voters.create({
            data
            })
    
          res.status(201).json({
            message: 'voter saved',
            voter
          })
    } catch (error) {
    console.log(error);
    }
 }

 const getVoterById = async (req, res, next) => {
    const studentId = req.params.studentId
    try {
        const voter = await prisma.position.findUnique({
            where: {
                studentId
            }
        })
        res.status(200).json({ voter })
    } catch (error) {
        
    }
}