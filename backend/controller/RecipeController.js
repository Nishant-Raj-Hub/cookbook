const Recipe = require("../schema/Recipe");
const User = require("../schema/User");

const createRecipe = async (req, res) => {
  const { _id, name, instructions, image, ingredients } = req.body;

  try {
    const recipe = await Recipe.create({
      name,
      ingredients,
      instructions,
      image,
      postedBy: _id,
    });

    res.status(200).json({
      success: true,
      message: "Recipe created successfully",
      recipe,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Recipe creation failed",
      error: err.message,
    });
  }
};

const getRecipe = async (req, res) => {
  const { _id } = req.body;
  try {
    const recipe = await Recipe.findById({
      postedBy: _id,
    });
    res.status(200).send(recipe);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Recipe fetching failed",
      error: err.message,
    });
  }
};

module.exports = {
  createRecipe,
  getRecipe,
};
