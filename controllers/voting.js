const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
// prisma creates function


const createVotes = async (req, res, next) => {

    try {

        const data = req.body
        const newVotes = await prisma.voting.create({
            data,
        })
        res.status(201).json({
            message: 'Votes Saved',
            newVotes
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }
}
const getVotes = async (req, res, next) => {
    try {
        const votes = await prisma.voting.findMany({
        });
          res.status(201).json({
            votes,
          })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message:error.message
        })
    }

}
module.exports = {
    createVotes,
    getVotes,

};
