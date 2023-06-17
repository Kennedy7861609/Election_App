import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// prisma creates function


const CreateCandidate = async (req, res, next) => {

    try {

        const data = req.body
        const newCandidate = await prisma.candidates.create({
            data,
        })
        res.status(201).json({
            message: 'Candidate Saved',
            newCandidate
        })
    } catch (error) {

    }
}
const updateCandidates = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body
        const update = await prisma.candidates.update({
            where: {
                id
            },
            data,
        })
        res.status(201).json({
            message: 'Candidate Updated',
            update
        })
    } catch (error) {

    }
}

const deleteCandidates = async (req, res, next) => {
    try {
        const id = req.params.id
        const deleted = await prisma.candidates.delete({
            where: {
                id
            },
        })
        res.status(201).json({
            message: 'Candidate Deleted',
            deleted
        })
    } catch (error) {

    }
}
const findCandidates = async (req, res, next) => {
    try {
        const id = req.params.id
        const find = await prisma.candidates.findMany({
            where: {
                id
            },
        });
          res.status(201).json({
            message: 'Candidate Found',
            findMany
          })
    } catch (error) {

    }

}

const getSingleCandidate = async (req, res, next) => {
try {
    const id = req.params.id
    const getSinglecandidates = await prisma.candidates.findUnique({
        where: {
            id
        },
    })
      res.status(201).json({
        message: 'SingleCandidate Got',
        getSingleCandidate
      })
} catch (error) {

}

}
const createVoter = async (req, res, next) => {
    try {
        const voter = await prisma.voters.create({
            data
            })
        
        } catch (error) {
        res.status(201).json({
          message: 'voter saved',
          voter
        })
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