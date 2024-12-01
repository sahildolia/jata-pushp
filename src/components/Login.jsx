import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setIsAuthenticated } = useAuth(); // Get the context function  const navigate = useNavigate();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    axios
      .post("https://jata-pushp-backend-3.onrender.com/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Success!") {
          handleClick();
          setIsAuthenticated(true); // Update the context state
          setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleClick = () => {
    toast.success("Logged In!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
    });
  };
  return (
    <>
      <Helmet>
        <title>Login - Jata Pushp</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="name@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2.5 rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Login
            </button>
            <Link
              to="/reset-password"
              class="text-sm text-green-500 hover:underline"
            >
              Lost Password?
            </Link>
            <p className="text-center text-sm text-gray-600">
              Create account?{" "}
              <Link
                to="/create-account"
                className="text-green-500 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
