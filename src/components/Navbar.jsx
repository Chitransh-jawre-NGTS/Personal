import { FaSearch, FaHeart, FaShoppingBasket, FaRegSmile, FaBars } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(1); // Example: number of items in the cart
  const [favoriteItems, setFavoriteItems] = useState(5); // Example: number of items in favorites
  const timeoutRef = useRef(null);



  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // 2 seconds delay
  };

  return (
    <>
      <nav className="w-full bg-white fixed top-0 left-0 shadow-sm py-3 flex justify-center z-50">
        <div className="w-[85%] flex items-center justify-between">
        <button
              className="lg:hidden mr-4 text-purple-600 md:hidden text-xl"
              // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars />
            </button>
          {/* Left: Logo + Elite Badge */}
          <div className="flex items-center gap-2">
            <span className="text-purple-600  text-2xl font-bold">
              <Link to="/">Shopinger</Link>
            </span>
            <button className="text-xs hidden lg:flex bg-yellow-300 text-black font-semibold px-2 py-1 rounded-full  items-center gap-1">
              Join <span className="text-xs font-bold">elite ✨</span>
            </button>
          </div>

          {/* Center: Search Bar */}
          <div className="relative w-[40%]">
            <input
              type="text"
              placeholder="Search products, brands, etc..."
              className="w-full hidden lg:flex border border-gray-300 rounded-full px-4 py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <FaSearch className="absolute hidden lg:flex right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-purple-600" />
          </div>

          {/* Right: Supplier + Icons */}
          <div className="flex items-center gap-4 text-gray-700 text-lg relative">
            <Link
              to="/supplier"
              className="text-sm hidden lg:flex bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold hover:bg-purple-200 transition"
            >
              Become a Seller
            </Link>
            <Link
              to="/login"
              className="text-sm hidden lg:flex bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold hover:bg-purple-200 transition"
            >
              Log in
            </Link>

            <div className="h-6 border-l border-gray-300 mx-3"></div>

            {/* Favorite Icon with Small Light Indicator */}
            <Link to={"/favourate"}>
              <div className="relative">
              <FaHeart className="cursor-pointer hover:text-purple-600 text-lg sm:text-xl" />

                {favoriteItems > 0 && (
                  <span className="absolute top-0 right-0 bg-yellow-500 rounded-full w-2.5 h-2.5"></span>
                )}
              </div>
            </Link>

            {/* Cart Icon with Small Light Indicator */}
            <Link to={"/carts"}>
              <div className="relative">
                <FaShoppingBasket className="cursor-pointer hover:text-purple-600" />
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-yellow-500 rounded-full w-2.5 h-2.5"></span>
                )}
              </div>
            </Link>

            {/* Smile Icon with Dropdown */}
            <div
              className=" hidden lg:flex relative"
                 onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
            >
              <FaRegSmile className="cursor-pointer hover:text-purple-600" />
              {showDropdown && (
                <div className="absolute right-0 z-50 mt-2 w-52 bg-white border border-gray-200 shadow-xl rounded-xl  text-sm transition-all duration-200">
                  <Link
                    to="/profile"
                    className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition font-medium"
                  >
                    👤 Profile
                  </Link>
                  <hr />
                  <Link
                    to="/orders"
                    className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition font-medium"
                  >
                    📦 My Orders
                  </Link>
                  <hr />
                  <Link
                    to="/settings"
                    className="block px-5 py-3 hover:bg-purple-50 hover:text-purple-700 transition font-medium"
                  >
                    ⚙️ Settings
                  </Link>
                  <hr />
                  <button
                    className="w-full text-left px-5 py-3 hover:bg-red-50 hover:text-red-500 transition font-medium border-t border-gray-100"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



// import { FaSearch, FaHeart, FaShoppingBasket, FaRegSmile } from 'react-icons/fa';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const cartItems = useSelector((state) => state.cart.items);  // Get cart items from Redux store

//   const hasItemsInCart = cartItems?.length > 0;  // Use optional chaining to avoid errors when cartItems is undefined

//   return (
//     <>
//       <nav className="w-full bg-white fixed top-0 left-0 shadow-sm py-3 flex justify-center z-50">
//         <div className="w-[85%] flex items-center justify-between">
//           {/* Left: Logo + Elite Badge */}
//           <div className="flex items-center gap-2">
//             <span className="text-purple-600 text-2xl font-bold">
//               <Link to="/">Shopinger</Link>
//             </span>
//             <button className="text-xs bg-yellow-300 text-black font-semibold px-2 py-1 rounded-full flex items-center gap-1">
//               Join <span className="text-xs font-bold">elite ✨</span>
//             </button>
//           </div>

//           {/* Center: Search Bar */}
//           <div className="relative w-[40%]">
//             <input
//               type="text"
//               placeholder="Search products, brands, etc..."
//               className="w-full border border-gray-300 rounded-full px-4 py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//             <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-purple-600" />
//           </div>

//           {/* Right: Supplier + Icons */}
//           <div className="flex items-center gap-4 text-gray-700 text-lg relative">
//             <Link
//               to="/supplier"
//               className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold hover:bg-purple-200 transition"
//             >
//               Become a Seller
//             </Link>
//             <Link
//               to="/login"
//               className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold hover:bg-purple-200 transition"
//             >
//               Log in
//             </Link>

//             <div className="h-6 border-l border-gray-300 mx-3"></div>

//             {/* Favorite Icon */}
//             <Link to={"/favourate"}>
//               <FaHeart className="cursor-pointer hover:text-purple-600" />
//             </Link>

//             {/* Cart Icon with Glow Effect */}
//             <Link to={"/carts"}>
//               <div className="relative">
//                 <FaShoppingBasket className={`cursor-pointer hover:text-purple-600 ${hasItemsInCart ? 'animate-pulse text-green-600' : ''}`} />
//                 {hasItemsInCart && (
//                   <span className="absolute top-0 right-0 bg-green-500 rounded-full w-2.5 h-2.5"></span>
//                 )}
//               </div>
//             </Link>

//             {/* Smile Icon with Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setShowDropdown(true)}
//               onMouseLeave={() => setShowDropdown(false)}
//             >
//               <FaRegSmile className="cursor-pointer hover:text-purple-600" />
//               {showDropdown && (
//                 <div className="absolute right-0 z-50 mt-2 w-52 bg-white border border-gray-200 shadow-xl rounded-xl z-50 text-sm transition-all duration-200">
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
//     </>
//   );
// };

// export default Navbar;
