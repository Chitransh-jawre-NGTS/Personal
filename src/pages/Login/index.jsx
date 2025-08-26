import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, } from "../../Features/Auth/authSlice";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // shared states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      const result = await dispatch(loginUser({ username, password }));
      if (loginUser.fulfilled.match(result)) {
        navigate(from, { replace: true });
      } else {
        alert(result.payload || "Login failed");
      }
    } else {
      // SIGNUP
      const result = await dispatch(signupUser({ username, email, password }));
      if (signupUser.fulfilled.match(result)) {
        setIsLogin(true); // after signup → go to login
      } else {
        alert(result.payload || "Signup failed");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8"
        >
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-2">
            {isLogin ? "Login" : "Create Account"}
          </h2>
          <p className="text-center text-gray-400 mb-8">
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
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            {/* Email only for signup */}
            {!isLogin && (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            )}

            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              {loading ? (isLogin ? "Logging in..." : "Signing up...") : isLogin ? "Login" : "Signup"}
            </button>
          </form>

          {error && (
            <p className="text-red-400 text-sm text-center mt-3">{error}</p>
          )}

          {/* Toggle between Login & Signup */}
          <p className="text-sm text-gray-400 text-center mt-6">
            {isLogin ? (
              <>
                New to Shopingify?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-yellow-400 hover:underline"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-yellow-400 hover:underline"
                >
                  Login here
                </button>
              </>
            )}
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
