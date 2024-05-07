const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
