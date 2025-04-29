import React from 'react';
import WishlistItemCard from './WishlistItemCart';

const Wishlist = ({ wishlist, onRemove, onMoveToCart }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty. Go explore some products!</p>
      ) : (
        <div className="flex flex-col gap-4">
          {wishlist.map((product) => (
            <WishlistItemCard
              key={product.id}
              product={product}
              onRemove={onRemove}
              onMoveToCart={onMoveToCart}
            />
          ))}
        </div>
      )}

      {/* Extra Explore Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">More to Explore 👀</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* map popular products here */}
          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-md font-semibold">Swiss Beauty Lip Gloss</p>
            <p className="text-purple-600 font-bold">₹199</p>
            <button className="mt-2 bg-purple-600 text-white text-sm px-4 py-1 rounded-md hover:bg-purple-700">
              Shop Now
            </button>
          </div>

          <div className="bg-white shadow p-4 rounded-lg text-center">
            <p className="text-md font-semibold">Lakme Sun Expert</p>
            <p className="text-purple-600 font-bold">₹299</p>
            <button className="mt-2 bg-purple-600 text-white text-sm px-4 py-1 rounded-md hover:bg-purple-700">
              Shop Now
            </button>
          </div>

          {/* Add more cards or map from array */}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
