import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SmallNavbar from "../../components/SmallNavbar";
import AmazonStyleNavbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  removeFromCartAsync,
  updateQuantityAsync
} from "../../Features/carts/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems, loading } = useSelector((state) => state.cart);

  // Fetch cart on mount
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleQuantityChange = (productId, action) => {
    const item = cartItems.find((i) => i.product === productId);
    if (!item) return;

    const newQty = action === "increase" ? item.qty + 1 : Math.max(1, item.qty - 1);
    dispatch(updateQuantityAsync({ productId, quantity: newQty }));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCartAsync(productId));
  };

  const price = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 5000;
  const delivery = price > 1000 ? 0 : 99;
  const total = price - discount + delivery + 165;

  return (
    <>
      <AmazonStyleNavbar showMobileBottom={false} showMobileTop={false} />
      <SmallNavbar logoText="My Cart" showSearch={false} showBottomNav={false} />

      <div className="bg-gray-100 min-h-screen md:py-6 lg:mt-26 md:px-10 relative">
        <div className="grid md:grid-cols-3 gap-6 pb-24 md:pb-6">
          {/* Left Section - Cart Items */}
          <div className="md:col-span-2 bg-white shadow rounded-lg">
            <div className="flex">
              <button className="flex-1 py-3 font-semibold text-gray-600 border-b-2 border-yellow-600">
                Wishkart ({cartItems.length})
              </button>
            </div>

            <div>
              {loading ? (
                <p className="p-6 text-center">Loading cart...</p>
              ) : cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.product}
                    className="flex flex-col sm:flex-row gap-4 p-4 border-b relative"
                  >
                    <div className="flex flex-row items-start gap-4 w-full">
                      <img
                        src={`http://localhost:8080/api/product/photo/${item.product}`}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 text-sm sm:text-base">
                        <h2 className="font-semibold text-gray-800">{item.name}</h2>
                        <p className="text-yellow-700 font-bold mt-1">
                          ₹{(item.price * item.qty).toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => handleQuantityChange(item.product, "decrease")}
                            className="px-2 py-1 border rounded disabled:opacity-50"
                            disabled={item.qty === 1}
                          >
                            -
                          </button>
                          <span>{item.qty}</span>
                          <button
                            onClick={() => handleQuantityChange(item.product, "increase")}
                            className="px-2 py-1 border rounded"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex gap-6 mt-3 text-xs sm:text-sm font-semibold">
                          <button className="hover:text-blue-600">SAVE FOR LATER</button>
                          <button
                            onClick={() => handleRemove(item.product)}
                            className="hover:text-red-600"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <img
                    src="https://illustrations.popsy.co/gray/cart.svg"
                    alt="Empty cart"
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <h2 className="text-lg font-semibold">Your cart is empty</h2>
                  <p className="text-gray-500 mb-4">
                    Add items to your cart to see them here.
                  </p>
                  <Link
                    to="/"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Price Details */}
          {cartItems.length > 0 && (
            <div className="hidden md:block bg-white shadow rounded-lg p-4 h-fit">
              <h2 className="font-semibold text-gray-700 border-b pb-2">
                PRICE DETAILS
              </h2>
              <div className="flex justify-between py-2 text-sm">
                <span>Price ({cartItems.length} items)</span>
                <span>₹{price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span>Discount</span>
                <span className="text-green-600">- ₹{discount}</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span>Delivery Charges</span>
                <span className={delivery === 0 ? "text-green-600" : ""}>
                  {delivery === 0 ? "Free" : `₹${delivery}`}
                </span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span>Protect Promise Fee</span>
                <span>₹165</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <p className="text-green-600 text-sm mt-1">
                You will save ₹{discount} on this order
              </p>
              <button
                className="w-full bg-yellow-500 text-white py-3 rounded mt-4 font-semibold hover:bg-orange-600 transition"
              >
                PLACE ORDER
              </button>
            </div>
          )}
        </div>

        {/* Fixed Place Order (Mobile only) */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t p-3">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              <div>
                <p className="text-gray-700 font-semibold text-sm">
                  Total: ₹{total.toLocaleString()}
                </p>
                <p className="text-green-600 text-xs">You save ₹{discount}</p>
              </div>
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg font-semibold text-sm transition"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
