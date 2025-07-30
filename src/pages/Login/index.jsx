import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { loginUser } from "../../Features/Auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate(from, { replace: true });
    } else {
      alert(result.payload || "Login failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Login to Shopingify
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Start your selling journey today!
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-sm text-center mt-3">
              {error}
            </p>
          )}

          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to Shopingify's Terms & Conditions.
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
