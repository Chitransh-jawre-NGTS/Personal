// import { FaSearch, FaHeart, FaShoppingBasket, FaRegSmile, FaBars, FaShoppingCart, FaBolt } from 'react-icons/fa';
// import React, { useRef, useState } from 'react';
// import { Home, List, ShoppingBag, HelpCircle, User } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getCartItemCount, getWishlistItemCount } from '../Features/carts/Cartslice';
// import { searchProducts } from '../Features/Produtcs/productSlice';



// const Navbar = ({ logoType, bgColor , showButtons }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const timeoutRef = useRef(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [query, setQuery] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const defaultColor = "bg-white"; // default for all pages
//   const appliedColor = bgColor || defaultColor;


//   const cartCount = useSelector(getCartItemCount);
//   const wishlistCount = useSelector(getWishlistItemCount);
//   const categories = [
//     { name: 'Women Ethnic', icon: '/icons/women-ethnic.png', active: true },
//     { name: 'Women Western', icon: '/icons/women-western.png' },
//     { name: 'Men', icon: '/icons/men.png' },
//     { name: 'Kids', icon: '/icons/kids.png' },
//     { name: 'Home & Kitchen', icon: '/icons/home-kitchen.png' },
//     { name: 'Beauty & Health', icon: '/icons/beauty-health.png' },
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim() !== '') {
//       dispatch(searchProducts(query));
//       navigate('/search'); // redirect to search result page
//     }
//   };
//   const handleMouseEnter = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setShowDropdown(false);
//     }, 200); // 2 seconds delay
//   };

//   return (
//     <>
//       <nav className={`w-full ${appliedColor} fixed top-0 left-0 shadow-sm py-3 flex justify-center z-50`}>

//         <div className="w-[85%] flex items-center justify-between">
//           {/* <button
//             className="lg:hidden mr-4 text-purple-600 md:hidden text-xl"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <FaBars />
//           </button> */}
//           {/* Left: Logo + Elite Badge */}
//           <div className="flex items-center gap-2">
//             <span className="text-purple-600  text-2xl font-bold">
//               <Link to="/">{logoType === 'default' ? 'MyLogo' : 'Shopinger'}</Link>
//             </span>
//             <button className="text-xs hidden lg:flex bg-yellow-300 text-black font-semibold px-2 py-1 rounded-full  items-center gap-1">
//               Join <span className="text-xs font-bold">elite ✨</span>
//             </button>
//           </div>

//           {/* Center: Search Bar */}
//           <form onSubmit={handleSearch} className="relative w-[40%] hidden lg:block">
//             <input
//               type="text"
//               // value={query}
//               // onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search products, brands, etc..."
//               className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//             <button type="submit">
//               <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-purple-600" />
//             </button>
//           </form>

//           {/* Right: Supplier + Icons */}
//           <div className="flex items-center gap-4 text-gray-700 text-lg relative">
//             <Link
//               to="/supplier"
//               className="text-sm hidden lg:flex bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold hover:bg-purple-200 transition"
//             >
//               Become a Seller
//             </Link>
//             <Link
//               to="/login"
//               className="text-sm hidden lg:flex bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold hover:bg-purple-200 transition"
//             >
//               Log in
//             </Link>

//             <div className="h-6 border-l border-gray-300 mx-3"></div>

//             {/* Favorite Icon with Small Light Indicator */}
//             {/* Wishlist Icon */}
//             <Link to={"/favourate"}>
//               <div className="relative">
//                 <FaHeart className="cursor-pointer hover:text-purple-600 text-lg sm:text-xl" />
//                 {wishlistCount > 0 && (
//                   <span className="absolute top-0 right-0 bg-yellow-500 rounded-full w-2.5 h-2.5"></span>
//                 )}
//               </div>
//             </Link>

//             {/* Cart Icon */}
//             <Link to={"/carts"}>
//               <div className="relative">
//                 <FaShoppingBasket className="cursor-pointer hover:text-purple-600" />
//                 {cartCount > 0 && (
//                   <span className="absolute top-0 right-0 bg-yellow-500 rounded-full w-2.5 h-2.5"> </span>
//                 )}
//               </div>
//             </Link>

//             {/* Smile Icon with Dropdown */}
//             <div
//               className=" hidden lg:flex relative"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <FaRegSmile className="cursor-pointer hover:text-purple-600" />
//               {showDropdown && (
//                 <div className="absolute right-0 z-50 mt-2 w-52 bg-white border border-gray-200 shadow-xl rounded-xl  text-sm transition-all duration-200">
//                   <Link
//                     to="/profile"
//                     className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition font-medium"
//                   >
//                     👤 Profile
//                   </Link>
//                   <hr />
//                   <Link
//                     to="/orders"
//                     className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition font-medium"
//                   >
//                     📦 My Orders
//                   </Link>
//                   <hr />
//                   <Link
//                     to="/settings"
//                     className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition font-medium"
//                   >
//                     ⚙️ Settings
//                   </Link>
//                   <hr />
//                   <button
//                     className="w-full text-left px-5 py-3 hover:bg-red-50 hover:text-red-500 transition font-medium border-t border-gray-100"
//                   >
//                     🚪 Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0  bg-opacity-30 z-40"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}




//       <div
//         className={`fixed top-0 left-0 h-full w-full bg-white z-50 shadow-md transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//       >
//         <div className="p-4 flex justify-between items-center border-b">
//           <h2 className="text-lg font-semibold text-purple-600">Categories</h2>
//           <button onClick={() => setIsSidebarOpen(false)} className="text-xl">✖</button>
//         </div>

//         <div className='flex h-auto '>
//           <div className=' h-full w-[150px] border-r'>
//             <ul className="p-2 space-y-2 overflow-y-auto h-[40%]">
//               {categories.map((cat, idx) => (
//                 <li key={idx} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-purple-100 ${cat.active ? 'bg-pink-100 border-l-4 border-pink-500' : ''}`}>
//                   <div className="min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-100">
//                     <img src={cat.icon} alt={cat.name} className="w-6 h-6 object-contain" />
//                   </div>
//                   <span className={`text-sm font-medium ${cat.active ? 'text-pink-800 font-semibold' : 'text-gray-800'}`}>{cat.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             hello
//           </div>
//         </div>
//       </div>




//       <div className={`fixed bottom-0 left-0 right-0 ${appliedColor}  shadow-md z-50 md:hidden`}>
//         <div className="flex justify-around items-center py-2 text-xs text-gray-700">
//           <Link to="/" className="flex flex-col items-center">
//             <Home className="w-6 h-6 text-purple-600 mb-1" />
//             <span>Home</span>
//           </Link>
//           <Link className="flex flex-col items-center">
//             <List className="w-6 text-purple-600 h-6 mb-1" />
//             <span onClick={() => setIsSidebarOpen(true)}>Categories</span>
//           </Link>
//           {/* <Link to="/mall" className="flex flex-col items-center">
//             <ShoppingBag className="w-6 text-purple-600 h-6 mb-1" />
//             <span>Mall</span>
//           </Link> */}
//           <Link to="/help" className="flex flex-col items-center">
//             <HelpCircle className="w-6 text-purple-600 h-6 mb-1" />
//             <span>Help</span>
//           </Link>
//           <Link to="/accounts" className="flex flex-col items-center">
//             <User className="w-6 text-purple-600 h-6 mb-1" />
//             <span>Account</span>
//           </Link>
//         </div>
//       </div>


//         <div className="flex justify-evenly mt-14 items-center w-full px-4 py-4 bg-gray-100 gap-4">
//       {showButtons && (
//         <>
//           <Link to={"/"}>
//             <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
//               <FaShoppingCart />
//               Shopinger
//             </button>
//           </Link>

//           <Link
//             to={"/rental"}
//             className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
//           >
//             <FaBolt />
//             Rental-HUB
//           </Link>
//         </>
//       )}
//     </div>
//     </>
//   );
// };

// export default Navbar;













// import React, { useState, useRef, useEffect } from "react";
// import {
//   Search,
//   User,
//   Heart,
//   ShoppingCart,
//   ChevronDown,
//   X,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getCartItemCount,
//   getWishlistItemCount,
// } from "../Features/carts/Cartslice";
// // import { searchProducts } from "../Features/Produtcs/productSlice";
// import { FiSearch, FiX } from "react-icons/fi";

// const popularTags = ["Shoes", "iPhone", "Watches", "Headphones", "T-Shirts"];

// export default function Navbar({ toggleSidebar }) {
//   const [darkMode, setDarkMode] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showSearchBar, setShowSearchBar] = useState(false);
//   const [query, setQuery] = useState("");
//   const timeoutRef = useRef(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const cartCount = useSelector(getCartItemCount);
//   const wishlistCount = useSelector(getWishlistItemCount);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim() !== "") {
//       // dispatch(searchProducts(query));
//       navigate("/search");
//       setShowSearchBar(false);
//     }
//   };

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutRef.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setShowDropdown(false);
//     }, 200);
//   };
//     // const [query, setQuery] = useState("");
//   const [recentSearches, setRecentSearches] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
//     setRecentSearches(saved.slice(0, 5));
//   }, []);

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   if (!query.trim()) return;

//   //   const updated = [query, ...recentSearches.filter((item) => item !== query)];
//   //   localStorage.setItem("recentSearches", JSON.stringify(updated.slice(0, 5)));
//   //   setRecentSearches(updated.slice(0, 5));

//   //   // Perform your search logic here...
//   //   console.log("Searching for:", query);
//   // };

//   const handleClear = () => setQuery("");

//   return (
//     <>
//       <nav className="bg-white shadow-md  h-18 px-6 py-3 w-[98%] mx-auto  rounded-b-xl relative">
//         <div className="flex items-center justify-between">
//           {/* Left Section */}
//           <div className="flex items-center space-x-4">
//             {/* Dark Mode Toggle */}
//             <button
//               onClick={() => {
//                 setDarkMode((prev) => !prev);
//                 toggleSidebar();
//               }}
//               className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
//                 darkMode ? "bg-yellow-600" : "bg-yellow-400"
//               }`}
//             >
//               <span
//                 className={`w-4 h-4 rounded-full bg-black transform transition-transform duration-300 ${
//                   darkMode ? "translate-x-4" : "translate-x-0"
//                 }`}
//               />
//             </button>

//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-1">
//               <div className="bg-blue-500 p-1 rounded">
//                 <span className="text-white font-bold text-sm">M</span>
//               </div>
//               <span className="text-2xl font-bold text-gray-800">WishCart</span>
//             </Link>
//           </div>

//           {/* Center Links */}
//           <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
//             <li>
//               <Link to="/" className="hover:text-blue-500">
//                 Home
//               </Link>
//             </li>
//             <li
//               className="hover:text-blue-500 cursor-pointer flex items-center relative"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span>Categories</span>
//               <ChevronDown className="w-4 h-4 ml-1" />
//               {showDropdown && (
//                 <ul className="absolute top-8 left-0 bg-white shadow-md rounded-lg p-3 text-sm space-y-2 z-50">
//                   <li>
//                     <Link to="/category/women">Women Ethnic</Link>
//                   </li>
//                   <li>
//                     <Link to="/category/men">Men</Link>
//                   </li>
//                   <li>
//                     <Link to="/category/kids">Kids</Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <Link to="/products" className="hover:text-blue-500 flex items-center">
//                 Products <ChevronDown className="w-4 h-4 ml-1" />
//               </Link>
//             </li>
//             <li>
//               <Link to="/pages" className="hover:text-blue-500 flex items-center">
//                 Pages <ChevronDown className="w-4 h-4 ml-1" />
//               </Link>
//             </li>
//           </ul>

//           {/* Right Section */}
//           <div className="flex items-center space-x-4 relative text-gray-600">
//             {/* Search Button */}
//             <button onClick={() => setShowSearchBar(!showSearchBar)}>
//               <Search className="w-5 h-5 cursor-pointer" />
//             </button>

//             {/* User */}
//             <Link to="/login">
//               <User className="w-5 h-5 cursor-pointer" />
//             </Link>

//             {/* Wishlist */}
//             <Link to="/favourate" className="relative">
//               <Heart className="w-5 h-5 cursor-pointer" />
//               {wishlistCount > 0 && (
//                 <span className="absolute -top-2 -right-2 text-xs bg-pink-400 text-white rounded-full px-1">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             {/* Cart */}
//             <Link to="/carts" className="relative">
//               <ShoppingCart className="w-5 h-5 cursor-pointer" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Search Tab Below Navbar */}
//    <div
//       className={`transition-all duration-300 ease-in-out overflow-hidden ${
//         showSearchBar ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
//       } bg-white w-[98%] mx-auto mt-3 rounded-xl shadow-lg px-6 py-5 border border-gray-200`}
//     >
//       <div className="flex items-start justify-between gap-4">
//         <form onSubmit={handleSearch} className="flex flex-col w-full">
//           {/* Input */}
//           <div className="flex items-center bg-gray-100 rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
//             <span className="px-3 text-gray-500">
//               <FiSearch className="w-5 h-5" />
//             </span>
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search for products, categories, or brands..."
//               className="flex-1 bg-transparent py-2 pr-3 text-sm text-gray-800 placeholder-gray-400 outline-none"
//             />
//             {query && (
//               <button
//                 type="button"
//                 onClick={handleClear}
//                 className="px-3 text-gray-500 hover:text-red-500"
//               >
//                 <FiX className="w-4 h-4" />
//               </button>
//             )}
//           </div>

//           {/* Tags */}
//           <div className="mt-3">
//             <p className="text-xs text-gray-500 mb-1">Popular Searches:</p>
//             <div className="flex gap-2 flex-wrap">
//               {popularTags.map((tag) => (
//                 <button
//                   type="button"
//                   key={tag}
//                   onClick={() => setQuery(tag)}
//                   className="bg-gray-100 hover:bg-gray-200 text-sm px-3 py-1 rounded-full transition"
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Recent */}
//           {recentSearches.length > 0 && (
//             <div className="mt-4">
//               <p className="text-xs text-gray-500 mb-1">Recent Searches:</p>
//               <div className="flex gap-2 flex-wrap">
//                 {recentSearches.map((item) => (
//                   <button
//                     type="button"
//                     key={item}
//                     onClick={() => setQuery(item)}
//                     className="bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs px-3 py-1 rounded-full"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </form>

//         {/* Close button */}
//         <button
//           onClick={() => setShowSearchBar(false)}
//           className="p-2 rounded-md hover:bg-gray-100 transition self-start"
//           aria-label="Close Search"
//         >
//           <FiX className="w-6 h-6 text-gray-600 hover:text-red-500" />
//         </button>
//       </div>
//     </div>
//     </>
//   );
// }













import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Heart,
  PackageSearch,
} from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getCartItemCount } from "../Features/carts/Cartslice";

const AmazonStyleNavbar = () => {
  const cartCount = useSelector(getCartItemCount);
  const [showBottomNavbar, setShowBottomNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBottomNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-gray-800 fixed top-0 w-full z-20 text-white px-4 py-3 shadow-md">
        {/* Row for large screen */}
        <div className="hidden md:flex items-center justify-between gap-4 flex-wrap">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
  <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
    WishCart
  </span>
</Link>

          </div>

          {/* Center: Search Bar */}
          <form className="flex flex-1 max-w-3xl mx-6">
            <input
              type="text"
              className="flex-grow px-4 py-2 rounded-l-md bg-white text-black focus:outline-none"
              placeholder="Search Amazon.in"
            />
            <button className="bg-yellow-400 px-4 rounded-r-md">
              <FiSearch className="text-black" />
            </button>
          </form>
          <button className="  border border-blue-600 w-[185px] rounded-2xl px-8 hover:bg-yellow-500 hover:text-black py-2">
            Dawnload app
          </button>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-xs">
            <Link to="/wishlist" className="hover:text-yellow-400">
              <Heart size={24} />
            </Link>
            <Link to="/orders" className="hover:text-yellow-400">
              <PackageSearch size={24} />
            </Link>
            <Link to="/carts" className="relative hover:text-yellow-400">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 text-xs bg-yellow-400 text-black rounded-full px-1 font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/accounts" className="hover:text-yellow-400">
              <User size={24} />
            </Link>
          </div>
        </div>

        {/* Mobile View */}
<div className="md:hidden w-full">
  {/* Top Row: Logo + Products & Rental */}
  <div className="flex items-center justify-between">
    <Link to="/" className="flex items-center">
  <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
    WishCart
  </span>
</Link>

    <div className="flex gap-2">
      <Link to="/">
        <button className="bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full shadow">
          Products
        </button>
      </Link>
      <Link to="/rental">
        <button className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full border border-white shadow">
          Rental Bay
        </button>
      </Link>
    </div>
  </div>

  {/* Search Bar + Icons Row */}
  <div className="flex items-center mt-3 gap-2">
    <form className="flex flex-grow">
      <input
        type="text"
        className="flex-grow px-4 py-2 rounded-l-md bg-white text-black focus:outline-none"
        placeholder="Search Amazon.in"
      />
      <button className="bg-yellow-400 px-4 rounded-r-md">
        <FiSearch className="text-black" />
      </button>
    </form>
    <div className="flex gap-3 items-center">
      <Link to="/carts" className="relative">
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-2 text-xs bg-yellow-400 text-black rounded-full px-1 font-bold">
            {cartCount}
          </span>
        )}
      </Link>
      <Link to="/accounts">
        <User size={24} />
      </Link>
    </div>
  </div>
</div>

      </nav>

      {/* Bottom Navbar (Desktop only) */}
      <div
        className={`hidden md:flex bg-gray-700 text-white text-[17px] px-6 py-2 fixed top-[65px] z-10 w-full items-center gap-4 transition-transform duration-300 ${showBottomNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <span className="font-semibold cursor-pointer">☰ All</span>
        <Link to="/">Home & Kitchen</Link>
        <Link to="/">Men's</Link>
        <Link to="/">Women's</Link>
        <Link to="/">Cosmetic's</Link>
        <Link to="/">Rental Lehnga's</Link>
        <Link to="/">Rental Shoe's  </Link>
        <Link to="/">Men's</Link>
        <Link to="/">Women's</Link>
        <Link to="/">Cosmetic's</Link>
        <Link to="/">Rental Lehnga's</Link>
        <Link to="/">Rental Shoe's  </Link>

        <div className="ml-auto flex gap-3">
          <Link to="/">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1.5 rounded-full shadow">
              Products
            </button>
          </Link>
          <Link to="/rental">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-1.5 rounded-full border border-white shadow">
              Rental Bay
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AmazonStyleNavbar;
