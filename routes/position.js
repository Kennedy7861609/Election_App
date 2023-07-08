const { Router } = require ("express");
const positionRouter = Router();

const position = require("../controllers/position");

positionRouter.post("/", position.createPosition);
positionRouter.get("/:id", position.findPosition);
positionRouter.get("/id", position.getAllPositions);
positionRouter.delete("/:id", position.deletePosition);
positionRouter.patch("/:id", position.updatePosition);

module.exports = positionRouter;