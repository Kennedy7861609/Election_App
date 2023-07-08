const { Router } = require("express");
const votersRouter = Router();

const voters = require("../controllers/voters");

votersRouter.post("/", voters.createVoters);
votersRouter.get("/:studentId", voters.findVoters);
votersRouter.get("/", voters.getAllVoters);
votersRouter.delete("/:studentId", voters.deleteVoters);
votersRouter.patch("/:studentId", voters.updateVoters);

module.exports = votersRouter;