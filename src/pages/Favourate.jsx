import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../Features/carts/Cartslice';
import { Home, Smartphone, Headphones, Zap, Plug, Layers } from "lucide-react";

const Favourate = () => {
  const dispatch = useDispatch();

const wishlistItems = [
  {
    id: 1,
    name: 'Smart LED Light Strip - RGB',
    description:
      'This smart RGB LED light strip is perfect for home decor, parties, and mood lighting. Easily controlled via app or remote.',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    image: 'https://picsum.photos/seed/123/400/250',
    stock: true,
    delivery: 'Delivery by Aug 1 - Aug 3',
  },
  {
    id: 2,
    name: 'Wireless Earbuds Pro',
    description: 'Crystal clear sound, touch controls, and long battery life for on-the-go music lovers.',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: 'https://picsum.photos/seed/124/400/250',
    stock: true,
    delivery: 'Delivery by Aug 2 - Aug 4',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with deep bass and water resistance.',
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    image: 'https://picsum.photos/seed/125/400/250',
    stock: false,
    delivery: 'Delivery by Aug 3 - Aug 5',
  },
  {
    id: 4,
    name: 'Smart Fitness Band',
    description: 'Track your heart rate, steps, and sleep with this waterproof fitness tracker.',
    price: 1799,
    originalPrice: 2599,
    discount: 31,
    image: 'https://picsum.photos/seed/126/400/250',
    stock: true,
    delivery: 'Delivery by Aug 1 - Aug 4',
  },
  {
    id: 5,
    name: 'Mini Desk Fan',
    description: 'USB-powered quiet fan perfect for study or office desk use.',
    price: 499,
    originalPrice: 799,
    discount: 38,
    image: 'https://picsum.photos/seed/127/400/250',
    stock: true,
    delivery: 'Delivery by Jul 30 - Aug 1',
  },
  {
    id: 6,
    name: 'Portable Laptop Stand',
    description: 'Adjustable aluminum laptop stand for ergonomic comfort and heat dissipation.',
    price: 1099,
    originalPrice: 1599,
    discount: 31,
    image: 'https://picsum.photos/seed/128/400/250',
    stock: false,
    delivery: 'Delivery by Aug 3 - Aug 5',
  },
  {
    id: 7,
    name: 'Smartphone Ring Light',
    description: 'Clip-on LED ring light for selfies and video calls with brightness control.',
    price: 349,
    originalPrice: 599,
    discount: 41,
    image: 'https://picsum.photos/seed/129/400/250',
    stock: false,
    delivery: 'Delivery by Aug 4 - Aug 6',
  },
  {
    id: 8,
    name: 'USB-C Fast Charger',
    description: '20W PD fast charger compatible with all latest Android and iOS devices.',
    price: 699,
    originalPrice: 999,
    discount: 30,
    image: 'https://picsum.photos/seed/130/400/250',
    stock: true,
    delivery: 'Delivery by Aug 2 - Aug 4',
  },
];


  const handleMoveToCart = (id) => {
    const item = wishlistItems.find((item) => item.id === id);
    dispatch(removeFromWishlist(id));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="w-full mt-30 sm:px-2 md:px-4 lg:px-6">
      {/* Breadcrumb and Header */}
      <div className="border-b border-gray-300 py-6 px-4 bg-white/70 backdrop-blur-md">
        <nav className="text-sm text-gray-500 " aria-label="Breadcrumb">
          <ol className="list-reset flex flex-wrap items-center">
            <li><a href="/" className="hover:underline text-gray-500">Home</a></li>
            <span className="mx-2 text-gray-400">/</span>
            <li className="text-gray-700 font-medium">Wishlist</li>
          </ol>
        </nav>
        <div className="text-center">
          <p className="text-gray-600 text-md">
            You have <span className="font-semibold text-pink-600">{wishlistItems.length}</span> item{wishlistItems.length !== 1 ? 's' : ''} saved for later.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Note: Prices and availability are subject to change. Items are not reserved until moved to cart.
          </p>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col  lg:flex-row">
        {/* Sidebar */}
    <aside className="hidden md:flex w-full lg:w-64  border-r border-gray-200 p-6 sticky top-20 h-fit">

          <ul className="space-y-3 text-gray-700 text-sm font-medium">
            <li className="flex border-blue-400 border bg-blue-50 items-center gap-3 hover:bg-blue-100 hover:text-blue-600 transition p-2 w-[200px] rounded-lg cursor-pointer">
              <Home className="w-4 h-4" /> All Products
            </li>
            <li className="flex items-center border-blue-400 border bg-blue-50 gap-3 hover:bg-blue-100 hover:text-blue-600 transition p-2 rounded-lg cursor-pointer">
              <Smartphone className="w-4 h-4" /> Smart Devices
            </li>
            <li className="flex items-center border-blue-400 border bg-blue-50 gap-3 hover:bg-blue-100 hover:text-blue-600 transition p-2 rounded-lg cursor-pointer">
              <Headphones className="w-4 h-4" /> Audio
            </li>
            <li className="flex items-center border-blue-400 border bg-blue-50 gap-3 hover:bg-blue-100 hover:text-blue-600 transition p-2 rounded-lg cursor-pointer">
              <Plug className="w-4 h-4" /> Accessories
            </li>
            <li className="flex items-center border-blue-400 border bg-blue-50 gap-3 hover:bg-blue-100 hover:text-blue-600 transition p-2 rounded-lg cursor-pointer">
              <Zap className="w-4 h-4" /> Chargers
            </li>
            <li className="flex items-center border-blue-400 border bg-blue-50 gap-3 hover:bg-blue-100 hover:text-blue-600 transition p-2 rounded-lg cursor-pointer">
              <Layers className="w-4 h-4" /> Home Gadgets
            </li>
          </ul>
        </aside>

        {/* Wishlist Items Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-4 py-6">
          {wishlistItems.map((item) => {
            const isOutOfStock = !item.stock;
            return (
              <div key={item.id}
                className={`relative ${isOutOfStock ? 'grayscale opacity-70 cursor-not-allowed' : ''}
                bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-md 
                ${!isOutOfStock && 'hover:shadow-2xl'} transition-all duration-300 overflow-hidden group`}>
                
                {isOutOfStock && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-br-xl z-10">
                    ❌ Out of Stock
                  </div>
                )}

                <img src={item.image} alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl" />

                <div className="p-5 flex flex-col justify-between h-auto">
                  <div className="flex flex-col gap-2 mb-5">
                    <h3 className="text-xl font-bold text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 line-through text-sm">₹{item.originalPrice}</span>
                      <span className="font-bold text-lg">₹{item.price}</span>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        {item.discount}% OFF
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm mt-1">
                        <span className={`font-medium ${item.stock ? 'text-green-600' : 'text-red-500'}`}>
                          {item.stock ? '🟢 In Stock' : '🔴 Out of Stock'}
                        </span>
                      </p>
                      <p className="text-xs text-green-600 mt-1">{item.delivery}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 mt-auto">
                    {!isOutOfStock && (
                      <div className="flex gap-3">
                        <button
                          className="w-1/2 px-4 py-2 border border-green-400 hover:bg-green-400 text-gray-800 text-sm font-medium rounded-full transition-all"
                          onClick={() => handleMoveToCart(item.id)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="w-1/2 px-4 py-2 border border-blue-400 hover:bg-blue-400 text-gray-700 text-sm font-medium rounded-full transition-all"
                        >
                          Buy Now
                        </button>
                      </div>
                    )}
                    <button
                      className="w-full px-4 py-2 border border-red-500 text-red-600 hover:bg-red-50 rounded-full text-sm font-medium transition-all"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourate;
