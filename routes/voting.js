const { Router } = require ("express");
const votingRouter = Router();

const voting = require("../controllers/voting.js");

votingRouter.post("/", voting.createVotes);
votingRouter.get("/", voting.getVotes);

module.exports = votingRouter;