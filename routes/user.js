const { Router } = require ("express");
const userRouter = Router();

const user = require("../controllers/user");

userRouter.post("/", user.createUser);
userRouter.get("/:id", user.getUser);
userRouter.delete("/:id", user.deleteUser);
userRouter.patch("/:id", user.updateUser);

module.exports = userRouter;