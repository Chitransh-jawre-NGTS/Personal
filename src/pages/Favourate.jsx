import React from 'react'
import Navbar from '../components/Navbar'
import ComingSoon from '../components/ComingSoon'
// import Wishlist from '../components/Wishlist'
import { removeFromWishlist } from '../Features/carts/Cartslice'

const Favourate = () => {

  const handleMoveToCart = (id) => {
    const item = wishlistItems.find((item) => item.id === id);
    dispatch(addToCart(item)); // or your cart action
    dispatch(removeFromWishlist(id));
  };
  
  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };
  
  const getOriginalPrice = (item) => item.price + (item.discount || 200);
  
  return (
    <>
     {/* <ComingSoon/> */}
     {/* <Wishlist/> */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">💖 Your Wishlist</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img
        src="https://via.placeholder.com/300"
        alt="Sample Product"
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-5 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-xl font-bold text-gray-800">Sample Product</h3>
          <p className="text-sm text-gray-500">Category: General</p>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 line-through text-sm">₹999</span>
            <span className="text-pink-600 font-bold text-lg">₹699</span>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
              30% OFF
            </span>
          </div>
          <p className="text-xs text-green-500 mt-1">🚚 Delivery available in 3–5 days</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <button className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold rounded-full transition-all">
            🛒 Move to Cart
          </button>
          <button className="w-full px-4 py-2 border border-red-500 text-red-600 hover:bg-red-100 rounded-full text-sm font-semibold transition-all">
            ❌ Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Favourate
