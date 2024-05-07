const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const UserRouter = require("./router/UserRouter");
const RecipeRouter = require("./router/RecipeRouter");
require("./database/db");

app.use(bodyParser.json());
app.options("*", cors());

app.use(cors());
app.use("/api/user", UserRouter);
app.use("/api/recipe", RecipeRouter);

app.get("/", (req, res) => {
  console.log("calling");
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
