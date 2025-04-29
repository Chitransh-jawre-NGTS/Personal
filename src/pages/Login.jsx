import React from 'react'
import Navbar from '../components/Navbar'
import CategoryNavbar from '../components/CatagoryNavbar'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
     <Navbar/> 
     <CategoryNavbar/>
     <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Login to Shopingify
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Start your selling journey today!
        </p>

        {/* Mobile Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm mb-6">
          <span className="bg-gray-100 px-3 py-2 text-gray-600">+91</span>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 outline-none"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition-all duration-300">
          Continue
        </button>

        {/* Note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          By continuing, you agree to Shopingify's Terms & Conditions.
        </p>
      </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Login
