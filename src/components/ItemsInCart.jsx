import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ItemsInCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Simulated cart items with Picsum images
    setCartItems([
      {
        id: 1,
        name: "Wireless Headphones",
        price: 1299,
        quantity: 1,
        image: "https://picsum.photos/seed/headphones/120/120",
      },
      {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        quantity: 2,
        image: "https://picsum.photos/seed/watch/120/120",
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1899,
        quantity: 1,
        image: "https://picsum.photos/seed/speaker/120/120",
      },
      {
        id: 4,
        name: "DSLR Camera",
        price: 4999,
        quantity: 1,
        image: "https://picsum.photos/seed/camera/120/120",
      },
      {
        id: 5,
        name: "Gaming Mouse",
        price: 899,
        quantity: 3,
        image: "https://picsum.photos/seed/mouse/120/120",
      },
         {
        id: 6,
        name: "Wireless Headphones",
        price: 1299,
        quantity: 1,
        image: "https://picsum.photos/seed/headphones/120/120",
      },
      {
        id: 7,
        name: "Smart Watch",
        price: 2499,
        quantity: 2,
        image: "https://picsum.photos/seed/watch/120/120",
      },
      {
        id: 8,
        name: "Bluetooth Speaker",
        price: 1899,
        quantity: 1,
        image: "https://picsum.photos/seed/speaker/120/120",
      },
      {
        id: 9,
        name: "DSLR Camera",
        price: 4999,
        quantity: 1,
        image: "https://picsum.photos/seed/camera/120/120",
      },
      {
        id: 10,
        name: "Gaming Mouse",
        price: 899,
        quantity: 3,
        image: "https://picsum.photos/seed/mouse/120/120",
      },
    ]);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full px-4 py-6 bg-white shadow-md">
      <h2 className="text-[35px] font-bold mb-4">Cart items waiting for you </h2>

      {/* Scrollable container */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-yellow-400 rounded-full p-2 shadow"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Items */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="max-w-[500px]  bg-gray-100 p-4 rounded-xl shadow flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover rounded-md"
              />
              <h3 className="text-md font-semibold mt-2">{item.name}</h3>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              <p className="font-bold text-black mt-1">₹{item.price}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-yellow-400 rounded-full p-2 shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ItemsInCart;
