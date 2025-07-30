import React, { useState } from "react";
import {
  User,
  ShoppingBag,
  MapPin,
  LogOut,
  Settings,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "profile", icon: <User size={20} />, label: "Profile" },
  { id: "orders", icon: <ShoppingBag size={20} />, label: "Orders" },
  { id: "address", icon: <MapPin size={20} />, label: "Addresses" },
  { id: "settings", icon: <Settings size={20} />, label: "Settings" },
];

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Welcome, Chitransh 👋</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-gray-600">Full Name</label>
                <input
                  type="text"
                  defaultValue="Chitransh Jawre"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-400"
                />
              </div>
              <div>
                <label className="text-gray-600">Email</label>
                <input
                  type="email"
                  defaultValue="chitransh@email.com"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-400"
                />
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <input
                  type="tel"
                  defaultValue="+91 1234567890"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-400"
                />
              </div>
              <div>
                <label className="text-gray-600">Bio</label>
                <textarea
                  defaultValue="React Developer with a passion for UI."
                  className="w-full mt-1 p-2 border rounded-md focus:outline-blue-400"
                />
              </div>
            </div>
          </div>
        );

      case "orders":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Recent Orders</h2>
            <div className="space-y-4">
              {[1, 2].map((orderId) => (
                <motion.div
                  key={orderId}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm transition"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Order #{1000 + orderId}</h3>
                    <span className="text-sm text-green-600">Delivered</span>
                  </div>
                  <p className="text-sm text-gray-500">Placed on July 10, 2025</p>
                  <div className="mt-2 text-sm">
                    <p>🛒 2x Nike Shoes</p>
                    <p>💰 ₹3,999</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "address":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Saved Addresses</h2>
            <div className="space-y-4">
              {["Home", "Office"].map((label, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 border rounded-lg bg-blue-50 transition"
                >
                  <h4 className="font-semibold">{label}</h4>
                  <p className="text-sm text-gray-600">
                    {label === "Home"
                      ? "123, Malviya Nagar, Indore, MP"
                      : "42, Tech Park, Indore"}
                  </p>
                  <div className="mt-2 flex gap-3">
                    <button className="text-sm text-blue-500 hover:underline">Edit</button>
                    <button className="text-sm text-red-500 hover:underline">Delete</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "settings":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>
            <div className="space-y-4">
              {["Email Notifications", "Two-Factor Authentication", "Dark Mode"].map((label, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span>{label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={i === 0} />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-checked:bg-blue-500 rounded-full relative transition-all duration-300">
                      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white border rounded-full transition-transform peer-checked:translate-x-5" />
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br mt-[100px] p-10">
      <div className="mx-auto rounded-xl shadow-lg flex flex-col md:flex-row bg-white overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gradient-to-b from-white to-blue-50 border-r border-blue-200 p-6 space-y-6">
          <div className="text-center">
          <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
  <img 
    src="https://i.pravatar.cc/300" 
    alt="User Avatar" 
    className="w-full h-full object-cover"
  />
</div>

            <h3 className="mt-3 text-xl font-semibold">Chitransh Jawre</h3>
          </div>
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300
                  ${activeTab === tab.id
                    ? "bg-blue-100 text-blue-700 font-semibold shadow"
                    : "hover:bg-blue-50 text-gray-700"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-100 transition">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="min-h-[300px]"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
