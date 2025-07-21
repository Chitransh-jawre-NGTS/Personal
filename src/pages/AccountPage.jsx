import React from 'react';
import {
  FaRupeeSign,
  FaCreditCard,
  FaQuestionCircle,
  FaBriefcase,
  FaGavel,
  FaTrashAlt,
  FaSignOutAlt,
  FaUserEdit,
  FaHeart,
  FaBoxOpen,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const accountOptions = [
  {
    section: 'Account Settings',
    items: [
      { label: 'Edit Profile', icon: <FaUserEdit />, color: 'text-purple-600' },
      { label: 'My Orders', icon: <FaBoxOpen />, color: 'text-blue-600' },
      { label: 'Wishlist', icon: <FaHeart />, color: 'text-pink-500' },
      { label: 'My Addresses', icon: <FaMapMarkerAlt />, color: 'text-emerald-600' },
    ],
  },
  {
    section: 'Payments & Support',
    items: [
      { label: 'My Bank & UPI Details', icon: <FaRupeeSign />, color: 'text-blue-600' },
      { label: 'My Payments', icon: <FaCreditCard />, color: 'text-indigo-600' },
      { label: 'Help & Support', icon: <FaQuestionCircle />, color: 'text-cyan-600' },
    ],
  },
  {
    section: 'Other',
    items: [
      { label: 'Become a Supplier', icon: <FaBriefcase />, color: 'text-orange-500' },
      { label: 'Legal & Policies', icon: <FaGavel />, color: 'text-yellow-600' },
      { label: 'Delete Account', icon: <FaTrashAlt />, color: 'text-red-500' },
      { label: 'Logout', icon: <FaSignOutAlt />, color: 'text-gray-700' },
    ],
  },
];

const AccountPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 py-6 bg-white min-h-screen">
        {/* Header */}
        <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
          <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
            🙏
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-800">Hello, Chitransh</h2>
            <p className="text-gray-500 text-sm">+91 7879746796</p>
          </div>
        </div>

        {/* Sections */}
        {accountOptions.map((section, idx) => (
          <div key={idx} className="mt-6">
            <h3 className="text-gray-500 font-semibold text-sm mb-2">{section.section}</h3>
            <div className="space-y-3">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200 cursor-pointer"
                >
                  <div className={`text-xl ${item.color}`}>{item.icon}</div>
                  <span className="text-gray-800 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AccountPage;
