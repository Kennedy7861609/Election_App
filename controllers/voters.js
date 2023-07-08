const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
// prisma creates function


const createVoters = async (req, res, next) => {

    try {

        const data = req.body
        const newVoters = await prisma.voters.create({
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
    try {
        const studentId = req.params.studentId
        const data = req.body
        const update = await prisma.voters.update({
            where: {
                studentId
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
        const studentId = req.params.studentId
        const deleted = await prisma.voters.delete({
            where: {
                studentId
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
        const studentId = req.params.studentId
        const find = await prisma.voters.findFirst({
            where: {
                studentId
            },
        });
          res.status(201).json({
            message: 'Voters Found',
            find
          })
    } catch (error) {

    }

}

const getAllVoters = async (req, res, next) => {
try {
    const getAllVoters = await prisma.voters.findMany({
    
    })
      res.status(201).json({
        message: 'Voters Got',
        getAllVoters
      })
} catch (error) {

}

}

module.exports={
      createVoters,
      updateVoters,
      deleteVoters,
      findVoters,
      getAllVoters,

}