import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/carts/Cartslice';
import { Link, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const dummyProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    image: 'https://picsum.photos/300/200?random=1',
  },
  {
    id: 2,
    name: 'Smartphone Stand',
    price: 499,
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 1499,
    image: 'https://picsum.photos/300/200?random=3',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 1999,
    image: 'https://picsum.photos/300/200?random=4',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 999,
    image: 'https://picsum.photos/300/200?random=5',
  },
];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate fetching from backend
    setProducts(dummyProducts);
  }, []);

  // const notify =  Toaster.alirt("hello");

  return (
    <div className="p-8 w-[80 %] mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-8">Best Picked For You</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg  hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">₹{product.price}</p>


              <button onClick={() => {
                dispatch(addToCart(product));
                Navigate("/carts"); 
              }} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
