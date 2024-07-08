import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";
import axios from "axios";

const Login = () => {
  const [config, setConfig] = useState({
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

    setConfig({
      ...config,
      loading: true,
    });

    try {
      const res = await axios.post(
        "https://cookbook-2kgp.onrender.com/api/user/login",
        config
      );

      console.log("Res", res.data);

      localStorage.setItem("userDetails", JSON.stringify(res.data));

      toast.success("login successful");
      navigate("/");
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
        <div class="myform form ">
          <div class="logo mb-3">
            <div class="col-md-12 text-center">
              <h1>Login</h1>
            </div>
          </div>
          <form action="" method="post" name="login" onSubmit={handleSubmit}>
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
                value={config.user}
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
                onChange={handleChange}
                value={config.password}
              />
            </div>
            <div class="form-group">
              <p class="text-center">
                By signing up you accept our <a href="#">Terms Of Use</a>
              </p>
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
                {config?.loading ? <Loader /> : "Login"}
              </button>
            </div>

            <div class="form-group mt-2">
              <p class="text-center">
                Don't have account?{" "}
                <Link to="/signup" id="signup">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
