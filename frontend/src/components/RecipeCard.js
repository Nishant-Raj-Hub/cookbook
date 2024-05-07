import React from "react";
import "./RecipeCard.css";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="col-md-4  mt-3">
      <div className="recipe-card">
        <div className="recipe-image">
          <img
            src={recipe.image_url}
            className="card-image"
            alt={recipe.title}
          />
        </div>
        <div className="recipe-details">
          <h2>{recipe.title}</h2>
          <p className="publisher">By: {recipe.publisher}</p>
          <a
            href={recipe.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-recipe"
          >
            View Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
