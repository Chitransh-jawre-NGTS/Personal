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
  Home,
  PackageSearch,
} from "lucide-react";

const SmallNavbar = ({
  logoText = "WC",
  brandName = "WishCart",
  showSearch = true,
  showCart = true,
  showBottomNav = true, // <-- New prop
  searchPlaceholder = "Search products or rentals...",
  menuLinks = [
    { label: "My Account", to: "/accounts", icon: <User size={18} /> },
    { label: "My Orders", to: "/orders", icon: <Package size={18} /> },
    { label: "Wishlist", to: "/wishlist", icon: <Heart size={18} /> },
    { label: "Settings", to: "/settings", icon: <Settings size={18} /> },
  ],
}) => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
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
      <div className="bg-gradient-to-b from-gray-400 to-white shadow-md lg:hidden px-4 py-2 flex flex-col gap-2 sticky top-0 z-50">
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
              <span className="text-3xl font-extrabold text-gray-800 bg-clip-text group-hover:scale-105 transition-transform duration-300">
                {logoText}
              </span>
            </Link>
          </div>

          {/* Right Side (Cart + Menu) */}
          <div className="flex items-center gap-3">
            {showCart && (
              <Link
                to="/carts"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <ShoppingCart size={20} />
              </Link>
            )}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Search Bar (Optional) */}
        {showSearch && (
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2"
          >
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              name="search"
              placeholder={searchPlaceholder}
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600"
            >
              Go
            </button>
          </form>
        )}
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-gradient-to-b from-white to-gray-100 shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-500 to-violet-600 text-white rounded-bl-2xl shadow-md">
            <h2 className="text-lg font-semibold">{brandName}</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col p-5 gap-4 text-gray-700 font-medium">
            {menuLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                {link.icon} {link.label}
              </Link>
            ))}

            {/* Logout is always present */}
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

      {/* Bottom Navbar (Optional) */}
      {showBottomNav && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-inner z-30">
          <div className="flex justify-between items-center px-6 py-2 text-sm text-gray-500">
            <Link to="/" className="flex flex-col items-center hover:text-yellow-500">
              <Home size={22} />
              <span className="text-[11px] mt-1">Home</span>
            </Link>
            <Link to="/wishlist" className="flex flex-col items-center hover:text-yellow-500">
              <Heart size={22} />
              <span className="text-[11px] mt-1">Wishlist</span>
            </Link>
            <Link to="/carts" className="relative flex flex-col items-center hover:text-yellow-500">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold rounded-full px-[5px]">
                  {cartCount}
                </span>
              )}
              <span className="text-[11px] mt-1">Cart</span>
            </Link>
            <Link to="/orders" className="flex flex-col items-center hover:text-yellow-500">
              <PackageSearch size={22} />
              <span className="text-[11px] mt-1">Orders</span>
            </Link>
            <Link to="/accounts" className="flex flex-col items-center hover:text-yellow-500">
              <User size={22} />
              <span className="text-[11px] mt-1">Account</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallNavbar;
