import React from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';
const product = [
    {
      id: 1,
      name: 'Swiss Beauty Matte Lipstick',
      brand: 'Swiss Beauty',
      price: 199,
      originalPrice: 299,
      image: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'Lakme Sun Expert SPF 50',
      brand: 'Lakme',
      price: 349,
      originalPrice: 399,
      image: '/images/product2.jpg',
    },
  ];
  

const WishlistItemCard = () => {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <div className="flex gap-2 items-center mt-1">
          <span className="text-purple-600 font-bold text-lg">₹{product.price}</span>
          {product.originalPrice && (
            <span className="line-through text-sm text-gray-400">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="text-purple-600 hover:text-white hover:bg-purple-600 border border-purple-600 px-3 py-1 rounded-md text-sm transition"
          onClick={() => onMoveToCart(product.id)}
        >
          <FaShoppingCart />
        </button>
        <button
          className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 px-3 py-1 rounded-md text-sm transition"
          onClick={() => onRemove(product.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default WishlistItemCard;
