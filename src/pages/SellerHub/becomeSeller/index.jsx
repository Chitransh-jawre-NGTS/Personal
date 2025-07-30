import React from 'react';
import Navbar from '../../../components/Navbar';
import FooterSeller from '../../../components/FooterSeller';
import { motion } from 'framer-motion';

const BecomeSeller = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white min-h-screen flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-16 gap-12">
        {/* Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="max-w-xl text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Start Selling Online with Confidence
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Deliver your products across India with <span className="text-blue-600 font-semibold">low shipping rates</span>, fast delivery, and trusted support. Join a growing network of successful sellers.
          </p>
          <p className="text-sm text-gray-600 mb-8">
            <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full mr-2">New</span>
            No GST? No problem. Our simplified onboarding lets you get started without complications.
          </p>

          <div className="flex justify-center lg:justify-start">
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <span className="bg-gray-100 px-3 flex items-center text-sm text-gray-600">+91</span>
              <input 
                type="text" 
                placeholder="Enter your number" 
                className="px-4 py-2 text-sm outline-none w-48" 
              />
            </div>
            <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Start Selling
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <img src="/seller-hero.png" alt="Seller" className="max-w-md w-full" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f8f9fa] px-6 lg:px-20">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }} 
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Why Sell With Us?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Zero Commission', desc: 'Keep full profits with 0% commission on all products. Focus on selling while we handle the rest.' },
            { title: 'Pan-India Delivery', desc: 'Reach customers in every corner of India with our wide delivery network and fast shipping services.' },
            { title: 'Easy Returns', desc: 'Simple return processes with full tracking, real-time updates, and dedicated seller support.' },
            { title: 'Dedicated Seller Support', desc: 'Access 24/7 seller support via chat, call, or email. We’re here to help you succeed every step of the way.' },
            { title: 'Hassle-free Payments', desc: 'Receive timely payments directly to your bank account with transparent reports and payout schedules.' },
            { title: 'Marketing Tools', desc: 'Use our inbuilt tools to create discounts, run campaigns, and get featured on banners and deals pages.' },
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="p-6 rounded-xl bg-white shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Section */}
      <section className="py-20 bg-white px-6 lg:px-20 text-center">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }} 
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Manage Your Business From Anywhere
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Our intuitive seller app gives you full control of your store at your fingertips. Track sales, monitor orders, chat with buyers, and manage returns with ease—anytime, anywhere.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <img src="/google-play-badge.png" alt="Google Play" className="h-12" />
          <img src="/app-store-badge.png" alt="App Store" className="h-12" />
        </motion.div>
      </section>

      {/* How it works Section */}
      <section className="bg-[#f8f9fa] py-20 px-6 lg:px-20 text-center">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }} 
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[ 
            { title: '1. Register', desc: 'Sign up using your mobile number and PAN/GST details.' },
            { title: '2. List Products', desc: 'Upload product details and images with our easy listing tool.' },
            { title: '3. Start Receiving Orders', desc: 'Get notified when an order is placed and prepare your package.' },
            { title: '4. Get Paid', desc: 'Get payments in your account after successful delivery.' },
          ].map((step, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.03 }} 
              className="p-6 bg-white rounded-xl shadow"
            >
              <h4 className="text-lg font-bold text-blue-600 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </>
  );
};

export default BecomeSeller;
