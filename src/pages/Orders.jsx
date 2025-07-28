import React from "react";
import { Link } from "react-router-dom";
import { Package } from "lucide-react";

const Orders = () => {
  // Dummy Orders
  const orders = [
    {
      id: "ORD12345",
      date: "2025-07-20",
      status: "Delivered",
      total: 2200,
      items: [
        { name: "Trendy Shoes", image: "https://picsum.photos/80?random=1" },
        { name: "Cool Headphones", image: "https://picsum.photos/80?random=2" },
      ],
    },
    {
      id: "ORD67890",
      date: "2025-07-25",
      status: "Processing",
      total: 999,
      items: [{ name: "Smart Watch", image: "https://picsum.photos/80?random=3" }],
    },
  ];

  return (
    <div className="max-w-7xl mt-30 mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Package className="text-pink-600" /> Your Orders
      </h2>

      {orders.length > 0 ? (
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white/70 backdrop-blur-lg shadow-md rounded-2xl p-6 border hover:shadow-xl transition"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Order ID:</span> {order.id}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Date:</span> {order.date}
                  </p>
                  <p
                    className={`font-semibold mt-1 ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    Status: {order.status}
                  </p>
                </div>
                <div className="text-xl font-bold text-gray-900 mt-2 sm:mt-0">
                  ₹{order.total}
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-4 mt-5">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <p className="text-gray-800 font-medium">{item.name}</p>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="mt-5 flex justify-end">
                <Link
                  to={`/orders/${order.id}`}
                  className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-500">
          <Package size={48} className="mx-auto mb-4 text-pink-500" />
          <p className="text-xl font-semibold">No Orders Yet</p>
          <p className="mt-2">You haven't placed any orders yet.</p>
          <Link
            to="/"
            className="text-pink-600 hover:underline mt-4 block text-base font-medium"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
