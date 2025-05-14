// import React from 'react'
// import Navbar from '../components/Navbar'
// import CategoryNavbar from '../components/CatagoryNavbar'
// import { motion } from 'framer-motion'
// import Footer from '../components/Footer'

// const Login = () => {
//   return (
//     <>
//      <Navbar/> 
//      <CategoryNavbar/>
//      <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           Login to Shopingify
//         </h2>
//         <p className="text-center text-gray-500 mb-8">
//           Start your selling journey today!
//         </p>

//         {/* Mobile Input */}
//         <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm mb-6">
//           <span className="bg-gray-100 px-3 py-2 text-gray-600">+91</span>
//           <input
//             type="tel"
//             placeholder="Enter your mobile number"
//             className="w-full px-4 py-2 outline-none"
//           />
//         </div>

//         {/* Button */}
//         <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition-all duration-300">
//           Continue
//         </button>

//         {/* Note */}
//         <p className="text-xs text-gray-400 text-center mt-6">
//           By continuing, you agree to Shopingify's Terms & Conditions.
//         </p>
//       </motion.div>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default Login








import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CategoryNavbar from '../components/CatagoryNavbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useAuth } from '../auth/AuthContext'; // adjust path as needed

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();                     // ✅ for redirect
  const location = useLocation();                     // ✅ for tracking intended route
  const from = location.state?.from?.pathname || '/';

  const [phone, setPhone] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');

  const handleContinue = () => {
    if (phone.length === 10) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp);
      setShowOtpInput(true);
      alert(`Your OTP is: ${otp}`);
      
    } else {
      alert('Enter a valid 10-digit phone number');
    }
  };

  const handleVerify = () => {
    if (enteredOtp === generatedOtp) {
      login(`mock-token-${phone}`);
      alert('Login successful!');
      navigate(from, { replace: true }); // ✅ Redirect to previous/intended route
    } else {
      alert('Incorrect OTP');
    }
  };
  

  return (
    <>
      <Navbar />
      <CategoryNavbar />
      <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
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

          {/* Phone Input */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm mb-4">
            <span className="bg-gray-100 px-3 py-2 text-gray-600">+91</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 outline-none"
            />
          </div>

          {/* Continue Button */}
          {!showOtpInput && (
            <button
              onClick={handleContinue}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Continue
            </button>
          )}

          {/* OTP Input + Verify Button */}
          {showOtpInput && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-4"
              />
              <button
                onClick={handleVerify}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Verify OTP
              </button>
            </>
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
