import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Settings,
  ChevronDown,
  LogOut,
  PackageSearch,
  Home,
  Grid,
  VideoIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const AmazonStyleNavbar = ({ showMobileTop = true, showMobileBottom = true }) => {
  const [cartCount, setCartCount] = useState(0);
  const [showBottomNavbar, setShowBottomNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowBottomNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const count = parseInt(localStorage.getItem("cartCount")) || 0;
    setCartCount(count);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setSearchTerm(q);
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (term !== "") {
      navigate(`/search?q=${encodeURIComponent(term)}`);
    } else {
      navigate(`/`);
    }
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category);
    navigate(`/search?q=${encodeURIComponent(category)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hidden md:flex fixed top-0 w-full z-20 text-white px-4 py-3 shadow-lg">
        <div className="w-full items-center flex justify-between gap-6 flex-wrap">
          {/* Logo */}
          <Link to="/home" className="flex items-center group">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              WishCart
            </span>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex flex-1 max-w-3xl mx-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-full bg-white text-black focus:ring-2 focus:ring-yellow-400 outline-none shadow-inner"
              placeholder="Search for products..."
            />
            <button
              type="submit"
              className="bg-yellow-400 px-5 rounded-r-full hover:bg-yellow-500 transition"
            >
              <FiSearch className="text-black" />
            </button>
          </form>

          <button className="border hidden lg:flex border-yellow-400 rounded-full px-6 py-2 font-semibold hover:bg-yellow-500 hover:text-black transition shadow-md">
            Download App
          </button>

          {/* Icons */}
          <div className="flex items-center gap-6 text-sm relative">
            {/* Cart */}
            <Link to="/carts" className="relative hover:text-yellow-400 transition">
              <div className="flex items-center gap-1">
                <ShoppingCart size={26} />
                <h1 className="text-lg">Cart</h1>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 text-xs bg-yellow-400 text-black rounded-full px-1 font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 hover:text-yellow-400 transition cursor-pointer">
                <User size={26} />
                <h1 className="text-lg">Mr Chitranch</h1>
                <ChevronDown
                  size={20}
                  className="ml-1 transition-transform group-hover:rotate-180"
                />
              </div>

              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform translate-y-2 transition-all duration-200 z-30">
                <Link to="/accounts" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <User size={18} /> My Account
                </Link>
                <Link to="/orders" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <PackageSearch size={18} /> My Orders
                </Link>
                <Link to="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <Settings size={18} /> Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navbar (toggle with showMobileTop) */}
      {showMobileTop && (
        <div className="md:hidden w-full fixed top-0 z-20 bg-gradient-to-b from-yellow-900 to-gray-500">
          <div className="flex items-center p-4 justify-between">
            <Link to="/home" className="flex items-center">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
                WishCart
              </span>
            </Link>
            <div className="flex gap-2">
              <Link to="/home">
                <button
                  className={`text-sm font-semibold px-3 py-1 rounded-full shadow ${
                    location.pathname === "/"
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-800 text-white border border-white"
                  }`}
                >
                  Products
                </button>
              </Link>
              <Link to="/rental">
                <button
                  className={`text-sm font-semibold px-3 py-1 rounded-full shadow ${
                    location.pathname === "/rental"
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-800 text-white border border-white"
                  }`}
                >
                  Rental Bay
                </button>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="w-full flex bg-gradient-to-b from-blue-00 to-yellow-50 p-2 lg:hidden z-50">
              <div className="relative w-full">
                <form action="" onSubmit={handleSearch}>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products, brands, etc..."
                    className="w-full border border-gray-300 bg-white rounded-2xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-yellow-600" />
                </form>
              </div>
              <Link to={"/carts"}>
                <ShoppingCartIcon size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navbar (toggle with showMobileBottom) */}
      {showMobileBottom && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-inner z-30">
          <div className="flex justify-between items-center px-6 py-2 text-sm text-gray-500">
            <Link to="/" className="flex flex-col items-center hover:text-yellow-500">
              <Home size={22} />
              <span className="text-[11px] mt-1">Home</span>
            </Link>
            <Link to="/fashion" className="flex flex-col items-center hover:text-yellow-500">
              <Grid size={22} />
              <span className="text-[11px] mt-1">Category</span>
            </Link>
            <Link to="/reels" className="relative flex flex-col items-center hover:text-yellow-500">
              <VideoIcon size={22} />
              <span className="text-[11px] mt-1">Videos</span>
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

      {/* Desktop Bottom Category Navbar */}
      <div
        className={`hidden md:flex bg-gray-800 text-white text-[15px] px-8 py-2 fixed top-[65px] z-10 w-full items-center gap-6 shadow transition-transform duration-300 ${
          showBottomNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <span
          className="font-semibold cursor-pointer hover:text-yellow-400 transition"
          onClick={() => handleCategoryClick("All")}
        >
          ☰ All
        </span>
        <button onClick={() => handleCategoryClick("Home & Kitchen")} className="hover:text-yellow-400 transition">
          Home & Kitchen
        </button>
        <button onClick={() => handleCategoryClick("Men's")} className="hover:text-yellow-400 transition">
          Men's
        </button>
        <button onClick={() => handleCategoryClick("Women's")} className="hover:text-yellow-400 transition">
          Women's
        </button>
        <button onClick={() => handleCategoryClick("Cosmetics")} className="hover:text-yellow-400 transition">
          Cosmetics
        </button>
        <button onClick={() => handleCategoryClick("Lehnga's")} className="hover:text-yellow-400 transition">
          Lehnga's
        </button>
        <button onClick={() => handleCategoryClick("Shoes")} className="hover:text-yellow-400 transition">
          Shoes
        </button>

        <div className="ml-auto flex gap-3">
          <Link to="/">
            <button
              className={`font-semibold px-5 py-1.5 rounded-full shadow-md transition ${
                location.pathname === "/"
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white border border-white hover:bg-yellow-400 hover:text-black"
              }`}
            >
              Products
            </button>
          </Link>
          <Link to="/rental">
            <button
              className={`font-semibold px-5 py-1.5 rounded-full shadow-md transition ${
                location.pathname === "/rental"
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white border border-white hover:bg-yellow-400 hover:text-black"
              }`}
            >
              Rental Bay
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AmazonStyleNavbar;
