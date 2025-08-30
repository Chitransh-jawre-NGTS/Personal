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
  Menu,
  X,
} from "lucide-react";
import SmallNavbar from "../../components/SmallNavbar";
import AmazonStyleNavbar from "../../components/Navbar";
import MyOrders from "../Orders";

const AccountDashboard = () => {
  const [activePage, setActivePage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    // { label: "My Orders", key: "orders", icon: <Package size={18} /> },
    { label: "Profile Information", key: "profile", icon: <User size={18} /> },
    { label: "Manage Addresses", key: "addresses", icon: <Settings size={18} /> },
    { label: "PAN Card Information", key: "pan", icon: <Settings size={18} /> },
    { label: "Gift Cards", key: "giftcards", icon: <Gift size={18} /> },
    { label: "Saved UPI", key: "upi", icon: <CreditCard size={18} /> },
    { label: "Saved Cards", key: "cards", icon: <CreditCard size={18} /> },
    { label: "My Coupons", key: "coupons", icon: <Tag size={18} /> },
    // { label: "My Reviews & Ratings", key: "reviews", icon: <Star size={18} /> },
    // { label: "All Notifications", key: "notifications", icon: <Bell size={18} /> },
    { label: "My Wishlist", key: "wishlist", icon: <Heart size={18} /> },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <h2 className="text-xl font-semibold">Profile Information</h2>;
      case "addresses":
        return <h2 className="text-xl font-semibold">Manage Addresses</h2>;
      case "pan":
        return <h2 className="text-xl font-semibold">PAN Card Information</h2>;
      case "giftcards":
        return <h2 className="text-xl font-semibold">Gift Cards</h2>;
      case "upi":
        return <h2 className="text-xl font-semibold">Saved UPI</h2>;
      case "cards":
        return <h2 className="text-xl font-semibold">Saved Cards</h2>;
      case "coupons":
        return <h2 className="text-xl font-semibold">My Coupons</h2>;
     
      case "wishlist":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Wishlist</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Samsung Galaxy F16 5G",
                  price: "₹12,999",
                  oldPrice: "₹17,499",
                  img: "https://via.placeholder.com/120",
                },
                {
                  name: "OTC Combo RM-1935 Roti Maker",
                  price: "₹1,498",
                  oldPrice: "₹2,099",
                  img: "https://via.placeholder.com/120",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border p-3 rounded-xl shadow hover:shadow-lg transition bg-white"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm sm:text-base">{item.name}</p>
                    <p className="text-green-600 font-semibold">{item.price}</p>
                    <p className="text-gray-400 text-xs line-through">{item.oldPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <h2 className="text-xl font-semibold">Select a section</h2>;
    }
  };

  return (
    <>
      {/* <AmazonStyleNavbar /> */}
      <SmallNavbar showBottomNav={true} logoText="Account's"   showSearch={false} />

      {/* Mobile sidebar toggle */}
      <div className="md:hidden flex justify-end px-4 mt-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-gray-200 rounded-full"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-[95%] mx-auto mt-4 md:mt-26 border border-gray-100 h-screen lg:bg-gray-100">
        {/* Sidebar */}
        <div
          className={`fixed md:relative top-0 left-0 h-auto w-full lg:w-84 max-wfull bg-white border-r p-5 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 md:translate-x-0`}
        >
          <div className="flex items-center mt-10 lg:mt-0 bg-amber-50 p-2 rounded-2xl gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
              CJ
            </div>
            <div>
              <p className="text-sm text-gray-600">Hello,</p>
              <p className="font-semibold text-sm sm:text-base">Mr. Chitransh Jawre</p>
            </div>
          </div>

          {/* Make sidebar scrollable */}
          <nav className="space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActivePage(item.key);
                  setSidebarOpen(false); // Close sidebar on mobile
                }}
                className={`flex items-center gap-3 w-full px-3 bg-blue-50 py-2 rounded-lg text-left transition ${activePage === item.key
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {item.icon} {item.label}
              </button>
            ))}

            <button
              onClick={() => setSidebarOpen(false)} // Close sidebar on logout click too
              className="flex items-center gap-3 w-full px-3 py-2 rounded-lg bg-red-50 text-left text-red-600 hover:bg-red-100 mt-4"
            >
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </div>


        {/* Content Area */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto mt-4 md:mt-0">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default AccountDashboard;
