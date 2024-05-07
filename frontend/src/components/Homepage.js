import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import items from "./items";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("pizza");
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  let API = "https://forkify-api.herokuapp.com/api/search";

  const fetchRecipes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data?.recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // Fetching recipes from given API
    fetchRecipes(`${API}?q=${searchQuery}`);
  }, [searchQuery]); // get new data whenever searchQuery will be changed

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          Loading ....
        </div>
      ) : (
        <div>
          <div class="p-3">
            <select
              lass="form-select form-select-lg mb-3"
              aria-label="Default select example"
              onChange={(e) => {
                setLoading(true);
                setSearchQuery(e.target.value);
              }}
            >
              <option selected>Open this select menu</option>
              {items.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="homepage p-3">
            <div className="row gap-3">
              {recipes?.map((recipe) => (
                <RecipeCard key={recipe.recipe_id} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
