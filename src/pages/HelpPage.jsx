import React from 'react';
import ChatBot from '../components/ChatBot'; // Replace with your actual path
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HelpPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
          <h1 className="text-2xl font-bold">How can we help you?</h1>
          <p className="text-sm mt-1">Get quick support through our chatbot assistant</p>
        </div>

        {/* ChatBot Section */}
        <div className="p-6">
          <ChatBot />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HelpPage;
