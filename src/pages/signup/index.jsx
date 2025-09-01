import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [username, setUsername] = useState(""); // ✅ NEW state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ send all required fields
    const result = await dispatch(registerUser({ name, username, email, password }));

    if (registerUser.fulfilled.match(result)) {
      navigate("/"); // after signup go to login
    } else {
      alert(result.error?.message || "Signup failed");
    }
  };

  return (
    <>
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
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Sign up to start your shopping journey!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-yellow-50 text-gray-900 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            {/* Username */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="w-full px-4 py-2 bg-yellow-50 text-gray-900 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-yellow-50 text-gray-900 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

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
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          {/* Error Handling */}
          {error && (
            <p className="text-red-500 text-sm text-center mt-3">
              {typeof error === "string" ? error : error.error || "Something went wrong"}
            </p>
          )}

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-yellow-600 hover:underline"
            >
              Login here
            </button>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;
