import React from 'react';
import {
  FaRupeeSign,
  FaCreditCard,
  FaQuestionCircle,
  FaBriefcase,
  FaGavel,
  FaTrashAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const accountOptions = [
  { label: 'My Bank & UPI Details', icon: <FaRupeeSign />, color: 'text-blue-600' },
  { label: 'My Payments', icon: <FaCreditCard />, color: 'text-indigo-600' },
  { label: 'Help', icon: <FaQuestionCircle />, color: 'text-cyan-600' },
  { label: 'Become a Supplier', icon: <FaBriefcase />, color: 'text-orange-500' },
  { label: 'Legal and Policies', icon: <FaGavel />, color: 'text-yellow-600' },
  { label: 'Delete Account', icon: <FaTrashAlt />, color: 'text-red-500' },
  { label: 'Logout', icon: <FaSignOutAlt />, color: 'text-gray-700' },
];

const AccountPage = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-2xl shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-4xl">
          🙏
        </div>
        <div>
          <h2 className="font-bold text-xl text-gray-800">Hello User</h2>
          <p className="text-gray-500 text-sm">+91 7879746796</p>
        </div>
      </div>

      {/* Account Options */}
      <div className="mt-6 space-y-4">
        {accountOptions.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer"
          >
            <div className={`text-xl ${item.color}`}>
              {item.icon}
            </div>
            <span className="text-gray-800 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AccountPage;
