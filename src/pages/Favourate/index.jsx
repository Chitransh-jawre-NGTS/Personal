import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Smartphone, Headphones, Zap, Plug, Layers } from "lucide-react";
import SmallNavbar from '../../components/SmallNavbar';
import axios from 'axios';
import AmazonStyleNavbar from '../../components/Navbar';

const Favourate = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example using fake product API from fakestoreapi.com
    axios.get('https://fakestoreapi.com/products?limit=20') // limit 8 for demo
      .then((res) => {
        // Transform API data to match your current structure
         const bgColors = [
          "bg-red-50",
          "bg-blue-50",
          "bg-green-50",
          "bg-yellow-50",
          "bg-purple-50",
          "bg-pink-50",
          "bg-indigo-50",
          "bg-orange-50",
        ];
        const items = res.data.map((item) => ({
          id: item.id,
          name: item.title,
          description: item.description,
          price: Math.round(item.price),
          originalPrice: Math.round(item.price * 1.3),
          discount: Math.round((1 - item.price / (item.price * 1.3)) * 100),
          image: item.image,
          stock: true,
          delivery: 'Delivery by Aug 1 - Aug 3',
          
        }));
        setWishlistItems(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const handleMoveToCart = (id) => {
    console.log(`Move item ${id} to cart`);
  };

  const handleRemoveFromWishlist = (id) => {
    console.log(`Remove item ${id} from wishlist`);
  };

if (loading) {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      
      {/* Loading Text */}
      <p className="text-gray-500">Loading wishlist...</p>
    </div>
  );
}


  return (
    <>
    {/* <AmazonStyleNavbar/> */}
      <SmallNavbar logoText='Wishlist' showSearch={false} />
      <div className="w-full lg:mt-24 sm:px-2 md:px-4 lg:px-6">
        {/* Breadcrumb and Header */}
        <div className="border-b border-gray-300 py-6 px-4 bg-white/70 backdrop-blur-md">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="list-reset flex flex-wrap items-center">
              <li><Link to="/" className="hover:underline text-gray-500">Home</Link></li>
              <span className="mx-2 text-gray-400">/</span>
              <li className="text-gray-700 font-medium">Wishlist</li>
            </ol>
          </nav>
          <div className="text-center mt-2">
            <p className="text-gray-600 text-md">
              You have <span className="font-semibold text-pink-600">{wishlistItems.length}</span> item{wishlistItems.length !== 1 ? 's' : ''} saved for later.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Note: Prices and availability are subject to change. Items are not reserved until moved to cart.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          {/* Sidebar */}
          <aside className="hidden md:flex w-full lg:w-64 border-r border-gray-200 p-6 sticky top-20 h-fit">
            <ul className="space-y-3 text-gray-700 text-sm font-medium">
              {[{ icon: Home, label: "All Products" }, { icon: Smartphone, label: "Smart Devices" }, { icon: Headphones, label: "Audio" }, { icon: Plug, label: "Accessories" }, { icon: Zap, label: "Chargers" }, { icon: Layers, label: "Home Gadgets" }].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-center gap-3 border border-blue-400 bg-blue-50 hover:bg-blue-100 hover:text-blue-600 transition p-2 rounded-lg cursor-pointer">
                    <Icon className="w-4 h-4" /> {item.label}
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Wishlist Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 w-full">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((product) => (
                <div key={product.id} className={`bg-white p-3 lg:rounded-2xl shadow hover:shadow-xl transition relative ${!product.stock ? 'opacity-70 grayscale' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                     className={`w-full h-40 rounded-2xl ${product.bgColor} sm:h-50 object-contain mb-2`}
                  />
                  <h4 className="font-semibold text-sm sm:text-lg line-clamp-2">{product.name}</h4>
                  <p className="text-yellow-600 font-bold text-sm sm:text-base">${product.price}</p>
                  <p className="text-gray-400 text-xs">{product.delivery}</p>

                  <div className="flex gap-2 mt-2">
                    <button
                      disabled={!product.stock}
                      onClick={() => handleMoveToCart(product.id)}
                      className={`flex-1 px-2 py-1 rounded text-center border ${product.stock ? 'border-blue-400 text-blue-400 hover:bg-blue-50' : 'border-gray-300 text-gray-300 cursor-not-allowed'}`}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className="flex-1 px-2 py-1 rounded text-center border border-red-400 text-red-400 hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center col-span-2">
                <img
                  src="https://illustrations.popsy.co/gray/cart.svg"
                  alt="No products"
                  className="w-32 h-32 mb-6"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  No Products Found
                </h2>
                <p className="text-gray-500 mb-6">
                  We couldn’t find any products matching your search.
                </p>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourate;
