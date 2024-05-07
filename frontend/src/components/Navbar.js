import React from "react";
import "./Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/login");
  };

  return (
    <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 2 }}>
      <div className="navbar-logo">COOKBOOK</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Recipe</Link>
        </li>
        <li>
          <Link to="/favourite">Favourites</Link>
        </li>
        {userDetails ? (
          <li
            onClick={handleLogout}
            style={{
              cursor: "pointer",
            }}
          >
            Logout
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
