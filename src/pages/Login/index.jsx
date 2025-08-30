

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../Features/Auth/authSlice"; // ✅ import thunks
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (isLogin) {
    const result = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate(from, { replace: true });
    } else {
      alert(result.error?.message || "Login failed");
    }
  } else {
    const result = await dispatch(registerUser({ username, email, password }));
    if (registerUser.fulfilled.match(result)) {
      setIsLogin(true); // go back to login form
    } else {
      alert(result.error?.message || "Signup failed");
    }
  }
};


  return (
       <>
      {/* Navbar with Logo only */}
      <nav className="bg-white bg-gradient-to-b from-yellow-900 to-yellow-200 fixed top-0 w-full shadow-md px-4 py-3 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">WishCart</h1>
      </nav>

      <div className="min-h-screen flex items-center justify-center bg-yellow-50 px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        >
          <h2 className="text-3xl font-bold text-center text-yellow-600 mb-2">
            {isLogin ? "Login" : "Create Account"}
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            {isLogin
              ? "Get access to your Orders, Wishlist & Recommendations"
              : "Sign up to start your shopping journey!"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-yellow-50 text-gray-900 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            {/* Email only for signup */}
            {!isLogin && (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-yellow-50 text-gray-900 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            )}

            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-yellow-50 text-gray-900 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-semibold transition-all duration-300"
            >
              {loading
                ? isLogin
                  ? "Logging in..."
                  : "Signing up..."
                : isLogin
                ? "Login"
                : "Signup"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-sm text-center mt-3">{error}</p>
          )}

          {/* Toggle between Login & Signup */}
          <p className="text-sm text-gray-500 text-center mt-6">
            {isLogin ? (
              <>
                New to Shopingify?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-yellow-600 hover:underline"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-yellow-600 hover:underline"
                >
                  Login here
                </button>
              </>
            )}
          </p>

          {/* Skip login button */}
          <button
            onClick={() => navigate("/home")}
            className="w-full mt-6 border border-yellow-400 text-yellow-600 py-2 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300"
          >
            Skip Login
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
