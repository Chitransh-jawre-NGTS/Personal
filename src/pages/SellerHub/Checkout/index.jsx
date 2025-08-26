import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [totalAmount] = useState(1200); // Example total amount
  const [products] = useState([
    { name: 'Product 1', price: 500 },
    { name: 'Product 2', price: 700 },
  ]);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <>
    <div className="container  mt-26 mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {products.map((product, index) => (
              <div className="flex justify-between" key={index}>
                <span>{product.name}</span>
                <span>₹{product.price}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold mt-4">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between mt-2 text-gray-500">
              <span>Delivery Charge</span>
              <span>₹50</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Grand Total</span>
              <span>₹{totalAmount + 50}</span>
            </div>
          </div>
        </div>

        {/* Shipping Address Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <button className="w-full bg-yellow-500 text-white p-2 rounded-lg">Save Address</button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="space-y-4">
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Cash on Delivery (COD)
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Credit/Debit Card
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="netbanking"
                checked={paymentMethod === 'netbanking'}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Net Banking
            </label>
          </div>
        </div>
      </div>

      {/* Order Confirmation */}
      <div className="text-right mt-6">
        <button
          onClick={() => alert('Order placed successfully!')}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg"
        >
          Place Order
        </button>
      </div>
    </div>
    </>
  );
};

export default Checkout;
