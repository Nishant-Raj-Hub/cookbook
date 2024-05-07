const RecipeRouter = require("express").Router();
const { createRecipe, getRecipe } = require("../controller/RecipeController");

RecipeRouter.get("/get", getRecipe);
RecipeRouter.post("/create", createRecipe);

module.exports = RecipeRouter;
