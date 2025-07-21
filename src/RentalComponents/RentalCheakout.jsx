import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RentalCheckout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.item) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">No item selected.</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => navigate('/')}
        >
          Go Back
        </button>
      </div>
    );
  }

  const { item } = state;

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 mt-16 bg-white shadow rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <div className="flex gap-4">
          <img src={item.image} alt={item.name} className="w-48 h-48 object-cover rounded-lg" />
          <div>
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <p className="mt-4 text-lg font-semibold text-green-600">
              ₹{item.price} <span className="text-sm font-normal text-gray-500">{item.duration}</span>
            </p>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Confirm Rent
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalCheckout;
