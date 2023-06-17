import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// prisma creates function


const CreatePosition = async (req, res, next) => {

    try {

        const data = req.body
        const newPosition = await prisma.voters.create({
            data,
        })
        res.status(201).json({
            message: 'Voters Saved',
            newVoters
        })
    } catch (error) {

    }
}
const updateVoters = async (req, res, next) => {
    try 
        const id = req.params.id
        const data = req.body
        const update = await prisma.voters.update({
            where: {
                id
            },
            data,
        })
        res.status(201).json({
            message: 'Voters Updated',
            update
        })
    } catch (error) {

    }
}

const deleteVoters = async (req, res, next) => {
    try {
        const id = req.params.id
        const deleted = await prisma.voters.delete({
            where: {
                id
            },
        })
        res.status(201).json({
            message: 'Voters Deleted',
            deleted
        })
    } catch (error) {

    }
}
const findVoters = async (req, res, next) => {
    try {
        const id = req.params.id
        const find = await prisma.voters.findMany({
            where: {
                id
            },
        });
          res.status(201).json({
            message: 'Voters Found',
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
        const voter = await prisma.voters.findUnique({
            where: {
                studentId
            }
        })
        res.status(200).json({ voter })
    } catch (error) {
        
    }
}