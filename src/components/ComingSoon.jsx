import React from 'react'
import Navbar from '../components/Navbar'
import CategoryNavbar from '../components/CatagoryNavbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const ComingSoon = () => {
  return (
    <>


      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-white to-pink-100 px-4">
        {/* Animation */}
        {/* <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://assets10.lottiefiles.com/packages/lf20_puciaact.json" // replace with animated gif or lottie animation converted to gif
          alt="Coming Soon Animation"
          className="w-48 h-48 object-contain mb-8"
        /> */}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl font-extrabold text-pink-600 mb-4 text-center"
        >
          Coming Soon!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-500 text-center max-w-md text-lg"
        >
          We are working hard to bring you an amazing experience at <span className="text-pink-500 font-semibold">Shopingify</span>. Stay tuned!
        </motion.p>

        {/* Optional: Notify Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
        >
          Notify Me
        </motion.button>
      </div>

      <Footer />
    </>
  )
}

export default ComingSoon
