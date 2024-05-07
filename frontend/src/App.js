import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import CreateRecipe from "./components/CreateRecipe";
import Favourite from "./components/Favourite";
import Login from "./components/Login";
import Singup from "./components/Singup";
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRecipe />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
    </Routes>
  );
};

export default App;
