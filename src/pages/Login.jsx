import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import Cookies from "js-cookie";

const LoginPage = () => {
  const [username, setUsername] = useState("Raja");
  const [password, setPassword] = useState("Raja@2004");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username && !password) {
      setError("InValid User");
    } else {
      if (username === "Raja" && password === "Raja@2004") {
        Cookies.set("jwt_token", "Raja_jwt_token-9344676628", { expires: 10 });
        setError("");
        navigate("/");
      } else {
        setError("Incorrect Username and Password");
      }
    }
  };

  if (Cookies.get("jwt_token") !== undefined) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:shadow-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
