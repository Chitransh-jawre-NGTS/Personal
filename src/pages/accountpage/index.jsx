import React, { useState } from "react";
import {
  User,
  Package,
  CreditCard,
  Heart,
  Settings,
  LogOut,
  Gift,
  Star,
  Bell,
  Tag,
} from "lucide-react";
import SmallNavbar from "../../components/SmallNavbar";
import AmazonStyleNavbar from "../../components/Navbar";

const AccountDashboard = () => {
  const [activePage, setActivePage] = useState("wishlist");

  const menuItems = [
    { label: "My Orders", key: "orders", icon: <Package size={18} /> },
    {
      label: "Profile Information",
      key: "profile",
      icon: <User size={18} />,
    },
    { label: "Manage Addresses", key: "addresses", icon: <Settings size={18} /> },
    { label: "PAN Card Information", key: "pan", icon: <Settings size={18} /> },
    { label: "Gift Cards", key: "giftcards", icon: <Gift size={18} /> },
    { label: "Saved UPI", key: "upi", icon: <CreditCard size={18} /> },
    { label: "Saved Cards", key: "cards", icon: <CreditCard size={18} /> },
    { label: "My Coupons", key: "coupons", icon: <Tag size={18} /> },
    { label: "My Reviews & Ratings", key: "reviews", icon: <Star size={18} /> },
    { label: "All Notifications", key: "notifications", icon: <Bell size={18} /> },
    { label: "My Wishlist", key: "wishlist", icon: <Heart size={18} /> },
  ];

  // Pages content simulation
  const renderContent = () => {
    switch (activePage) {
      case "orders":
        return <h2 className="text-lg font-semibold">My Orders</h2>;
      case "profile":
        return <h2 className="text-lg font-semibold">Profile Information</h2>;
      case "addresses":
        return <h2 className="text-lg font-semibold">Manage Addresses</h2>;
      case "pan":
        return <h2 className="text-lg font-semibold">PAN Card Information</h2>;
      case "giftcards":
        return <h2 className="text-lg font-semibold">Gift Cards</h2>;
      case "upi":
        return <h2 className="text-lg font-semibold">Saved UPI</h2>;
      case "cards":
        return <h2 className="text-lg font-semibold">Saved Cards</h2>;
      case "coupons":
        return <h2 className="text-lg font-semibold">My Coupons</h2>;
      case "reviews":
        return <h2 className="text-lg font-semibold">My Reviews & Ratings</h2>;
      case "notifications":
        return <h2 className="text-lg font-semibold">All Notifications</h2>;
      case "wishlist":
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">My Wishlist</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border p-3 rounded-lg shadow-sm bg-white">
                <img
                  src="https://via.placeholder.com/80"
                  alt="product"
                  className="w-20 h-20 rounded"
                />
                <div>
                  <p className="font-medium">Samsung Galaxy F16 5G</p>
                  <p className="text-green-600 font-semibold">₹12,999</p>
                  <p className="text-sm line-through text-gray-400">₹17,499</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border p-3 rounded-lg shadow-sm bg-white">
                <img
                  src="https://via.placeholder.com/80"
                  alt="product"
                  className="w-20 h-20 rounded"
                />
                <div>
                  <p className="font-medium">OTC Combo RM-1935 Roti Maker</p>
                  <p className="text-green-600 font-semibold">₹1,498</p>
                  <p className="text-sm line-through text-gray-400">₹2,099</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <h2 className="text-lg font-semibold">Select a section</h2>;
    }
  };

  return (
    <>
    <AmazonStyleNavbar/>
      <SmallNavbar showBottomNav={false} showSearch={false}/>
    <div className="flex flex-col w-[90%] mx-auto lg:mt-30 md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r p-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
            CJ
          </div>
          <div>
            <p className="text-sm text-gray-600">Hello,</p>
            <p className="font-semibold">Mr. Chitransh Jawre</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActivePage(item.key)}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left transition ${
                activePage === item.key
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}

          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-100 mt-4">
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">{renderContent()}</div>
    </div>
    </>
  );
};

export default AccountDashboard;
