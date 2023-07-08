const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
// prisma creates function


const createCandidates = async (req, res, next) => {

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
        console.log(error);
        res.status(400).json({
            message:error.message
        })
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
        console.log(error);
        res.status(400).json({
            message:error.message
        })
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
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }
}
const getByPositionId = async (req, res, next) => {
    try {
        const positionId = req.params.id
        const find = await prisma.candidates.findFirst({
            where: {
                positionId
            },
        });
          res.status(201).json({
            find
          })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }

}

const getSingleCandidates = async (req, res, next) => {
    const id = req.params.id;
    try {
      const candidate = await prisma.candidates.findFirst({
        where: {
          id,
        },
      });
      res.status(200).json({
        candidate,
      });
      console.log("candidate not found!")
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error.message,
      });
    }
  };

module.exports = {
    createCandidates,
    updateCandidates,
    deleteCandidates,
    getByPositionId,
    getSingleCandidates,

};

