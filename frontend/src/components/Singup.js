import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "./Loader";

const Singup = () => {
  const [config, setConfig] = useState({
    name: "",
    email: "",
    password: "",
    loading: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("userDetails");
    if (data) {
      navigate("/");
    }
  });

  const handleChange = (e) => {
    setConfig({
      ...config,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setConfig(() => {
      return {
        ...config,
        loading: true,
      };
    });

    try {
      const response = await axios.post(
        "https://cookbook-2kgp.onrender.com/api/user/create",
        config
      );

      console.log(response);
      toast.success("Sign up done");
      navigate("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setConfig(() => {
        return {
          ...config,
          loading: false,
        };
      });
    }
  };

  return (
    <div>
      <div
        id="first"
        style={{
          width: "300px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div class="myform form " style={{ width: "300px" }}>
          <div class="logo mb-3">
            <div class="col-md-12 text-center">
              <h1>Singup</h1>
            </div>
          </div>
          <form action="" method="post" name="Singup" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={handleChange}
                value={config.email}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                value={config.name}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Password"
                value={config.password}
                onChange={handleChange}
              />
            </div>
            <div class="col-md-12 text-center ">
              <button
                type="submit"
                class=" btn btn-block mybtn btn-primary tx-tfm "
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                disabled={config.loading}
              >
                {config?.loading ? <Loader /> : "Signup"}
              </button>
            </div>

            <div class="form-group mt-2">
              <p class="text-center">
                Already have account?{" "}
                <Link to="/login" id="signup">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
