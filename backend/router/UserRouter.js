const userRouter = require("express").Router();
const { createUser, getUser } = require("../controller/UserController");

userRouter.post("/create", createUser);
userRouter.post("/login", getUser);

module.exports = userRouter;
