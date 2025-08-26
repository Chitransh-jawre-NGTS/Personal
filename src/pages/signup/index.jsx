import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const result = await dispatch(signupUser({ username, email, password }));
    if (signupUser.fulfilled.match(result)) {
      navigate("/login");
    } else {
      alert(result.payload || "Signup failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-8"
        >
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Sign up to start your shopping journey!
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
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
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          {error && (
            <p className="text-red-400 text-sm text-center mt-3">
              {error}
            </p>
          )}

          <p className="text-sm text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400 hover:underline">
              Login here
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Signup;
