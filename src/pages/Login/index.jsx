import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Features/Auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate("/home");
    } else {
      alert(result.error?.message || "Login failed");
    }
  };

  return (
    <>
      {/* Navbar */}
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
          <h2 className="text-3xl font-bold text-center text-yellow-600 mb-2">Login</h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            Get access to your Orders, Wishlist & Recommendations
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-yellow-50 text-gray-900 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-sm text-center mt-3">
              {typeof error === "string" ? error : error.error || "Something went wrong"}
            </p>
          )}


          <p className="text-sm text-gray-500 text-center mt-6">
            New to WishCart?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-yellow-600 hover:underline"
            >
              Create an account
            </button>
          </p>

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


// import React, { useState } from "react";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../../utils/firebase";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// export default function PhoneLogin() {
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // 🔹 Setup reCAPTCHA
//   const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//         size: "invisible",
//         callback: (response) => {
//           console.log("reCAPTCHA solved:", response);
//         },
//       });
//     }
//   };

//   // 🔹 Request OTP
//   const requestOTP = async () => {
//     if (!phone) return alert("Enter phone number in +91xxxxxxxxxx format");

//     setupRecaptcha();
//     setLoading(true);

//     try {
//       const appVerifier = window.recaptchaVerifier;
//       const result = await signInWithPhoneNumber(auth, phone, appVerifier);
//       setConfirmationResult(result);
//       alert("OTP Sent!");
//     } catch (err) {
//       console.error("Error sending OTP:", err);
//       alert("Failed to send OTP. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Verify OTP
//  const verifyOTP = async () => {
//   if (!confirmationResult || !otp) {
//     alert("Please enter the OTP first.");
//     return;
//   }

//   setLoading(true);
//   try {
//     // ✅ Verify OTP with Firebase
//     const result = await confirmationResult.confirm(otp);
//     const user = result.user;

//     // ✅ Get Firebase ID token
//     const idToken = await user.getIdToken();

//     // ✅ Send token to backend for verification
//     const res = await axios.post("http://localhost:8080/api/verifyToken", { idToken });

//     console.log("Backend response:", res.data);

//     if (res.data.success) {
//       alert("Login successful!");
//       Navigate("/home"); // ✅ make sure it's 'navigate', not 'nevigate'
//     } else {
//       alert("Something went wrong with backend verification.");
//     }
//   } catch (err) {
//     console.error("Error verifying OTP:", err);
//     alert("Invalid OTP. Try again.");
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
//       <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Login with Phone
//         </h2>

//         {/* Phone Input */}
//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2 font-medium">Phone Number</label>
//           <input
//             type="text"
//             placeholder="+91 9876543210"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//         </div>
//         <button
//           onClick={requestOTP}
//           disabled={loading}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
//         >
//           {loading ? "Sending OTP..." : "Send OTP"}
//         </button>

//         <div id="recaptcha-container"></div>

//         {/* OTP Input */}
//         {confirmationResult && (
//           <div className="mt-6">
//             <label className="block text-gray-600 mb-2 font-medium">Enter OTP</label>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <button
//               onClick={verifyOTP}
//               disabled={loading}
//               className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
