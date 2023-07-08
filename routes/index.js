const { Router } = require("express");
const appRouter = Router();
// const express = require("express");
// const Router = express.Router();
// const appRouter = Router();
const candidates = require("./candidate");
const positions = require("./position");
const voters = require("./voters");
const voting = require("./voting")
appRouter.use("/candidate", candidates);
appRouter.use("/position", positions);
appRouter.use("/voters", voters);
appRouter.use("/votes",voting)
module.exports = appRouter;