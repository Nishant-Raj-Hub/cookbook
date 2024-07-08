import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";

const CreateRecipe = () => {
  const [config, setConfig] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    image: "",
    loading: false,
    options: [
      { name: "carrot", id: 1 },
      { name: "Milk", id: 2 },
      { name: "Cheese", id: 3 },
      { name: "Potato", id: 4 },
      { name: "Spinach", id: 5 },
      { name: "Mushroom", id: 6 },
      { name: "Tomato", id: 7 },
      { name: "Garlic", id: 8 },
      { name: "Onion", id: 9},
    ], // Options for the ingredients
  });

  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  });

  const handleChange = (e) => {
    setConfig({
      ...config,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (selectedList) => {
    setConfig({ ...config, ingredients: selectedList });
  };

  const handleRemove = (selectedList) => {
    setConfig({ ...config, ingredients: selectedList });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setConfig({
      ...config,
      loading: true,
    });

    try {
      const res = await axios.post("https://cookbook-2kgp.onrender.com/api/recipe/create", {
        ...config,
        _id: data._id,
      });
      toast.success("Recipe created successfully");
    } catch (e) {
      console.log(e);
    } finally {
      setConfig({
        ...config,
        loading: false,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div
          id="first"
          style={{
            width: "450px",
            margin: "auto",
            display: "flex",
            marginTop: 100,
            height: "100vh",
          }}
        >
          <div class="myform form " style={{ width: "450px" }}>
            <div class="logo mb-3">
              <div class="col-md-12 text-center">
                <h1>Create Recipe</h1>
              </div>
            </div>
            <form action="" method="post" name="recipe" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="name"
                  name="name"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter Recipe Name"
                  onChange={handleChange}
                  value={config.name}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Enter instructions</label>
                <textarea
                  type="text"
                  name="instructions"
                  class="form-control"
                  id="instructions"
                  aria-describedby="emailHelp"
                  placeholder="Enter instructions"
                  onChange={handleChange}
                  value={config.instructions}
                ></textarea>
              </div>

              <div>
                <Multiselect
                  options={config.options}
                  onSelect={handleSelect}
                  onRemove={handleRemove}
                  displayValue="name"
                  placeholder="Select Ingredients"
                />
              </div>

              <div class="form-group mt-3">
                <label for="exampleInputEmail1">Enter image URL</label>
                <input
                  type="text"
                  name="image"
                  class="form-control"
                  id="image"
                  aria-describedby="emailHelp"
                  placeholder="Enter Image URL"
                  onChange={handleChange}
                  value={config.image}
                />
              </div>
              <div class="col-md-12 text-center ">
                <button
                  type="submit"
                  class=" btn btn-block mybtn btn-primary tx-tfm"
                  disabled={config.loading}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {config.loading ? <Loader /> : "Create Recipe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
