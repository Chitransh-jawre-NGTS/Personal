import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingCart,
  MoreVertical,
  Search,
  X,
  User,
  Package,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

const SmallNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.search.value.trim();
    if (term !== "") {
      navigate(`/search?q=${encodeURIComponent(term)}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-gradient-to-b  from-red-200  to-white shadow-md lg:hidden px-4 py-2 flex flex-col gap-2 sticky top-0 z-50">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                WC
              </span>
            </Link>
          </div>

          {/* Right Side (Cart + Menu) */}
          <div className="flex items-center gap-3">
            <Link
              to="/carts"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ShoppingCart size={20} />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2"
        >
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            name="search"
            placeholder="Search products or rentals..."
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600"
          >
            Go
          </button>
        </form>
      </div>

      {/* Side Menu */}
      {/* Wrapper ensures transition works even when closed */}
      <div
        className={`fixed top-26 right-0 h-full w-72 z-50 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer */}
        <div className="h-full bg-gradient-to-b from-white to-gray-100 shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-bl-2xl shadow-md">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col p-5 gap-4 text-gray-700 font-medium">
            <Link
              to="/accounts"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <User size={18} /> My Account
            </Link>
            <Link
              to="/orders"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <Package size={18} /> My Orders
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <Heart size={18} /> Wishlist
            </Link>
            <Link
              to="/settings"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <Settings size={18} /> Settings
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/logout");
              }}
              className="flex items-center gap-3 text-left hover:text-red-500 transition"
            >
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Blurry Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-white/30 z-40 transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default SmallNavbar;
