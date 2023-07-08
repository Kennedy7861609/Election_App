const { Router } = require ("express");
const candidateRouter = Router();

const candidate = require("../controllers/candidates");

candidateRouter.post("/", candidate.createCandidates);
candidateRouter.get("/:id", candidate.getSingleCandidates);
candidateRouter.get("/:positionId", candidate.getByPositionId);
candidateRouter.delete("/:id", candidate.deleteCandidates);
candidateRouter.patch("/:id", candidate.updateCandidates);

module.exports = candidateRouter;