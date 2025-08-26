import React from "react";
import { Trash2 } from "lucide-react";

const wishlistItems = [
  {
    id: 1,
    title: "Samsung Galaxy F16 5G (Glam Green, 128 GB)",
    price: "₹12,999",
    oldPrice: "₹17,499",
    discount: "25% off",
    img: "https://picsum.photos/seed/phone/100/100",
  },
  {
    id: 2,
    title: "OTC Combo RM-1935 ||Eo-4 Roti and Khakra Maker",
    price: "₹1,498",
    oldPrice: "₹2,090",
    discount: "28% off",
    img: "https://picsum.photos/seed/kitchen/100/100",
  },
  {
    id: 3,
    title: "CELLUX Men Kurta Pyjama Set",
    price: "₹498",
    oldPrice: "₹1,499",
    discount: "66% off",
    img: "https://picsum.photos/seed/kurta/100/100",
  },
  {
    id: 4,
    title: "Flipkart Perfect Homes Andes Engineered Wood 4 Door Wardrobe",
    price: "₹13,821",
    oldPrice: "₹44,999",
    discount: "69% off",
    img: "https://picsum.photos/seed/wardrobe/100/100",
  },
  {
    id: 5,
    title: "Tokyo Talkies Top Palazzos Co-ords Set",
    price: "₹819",
    oldPrice: "₹2,499",
    discount: "67% off",
    img: "https://picsum.photos/seed/dress1/100/100",
    unavailable: true,
  },
  {
    id: 6,
    title: "Tokyo Talkies Top Palazzos Co-ords Set",
    price: "₹621",
    oldPrice: "₹2,499",
    discount: "75% off",
    img: "https://picsum.photos/seed/dress2/100/100",
  },
];

const Sidebar = () => (
  <div className="w-64 bg-white shadow-md h-screen mt-17 p-4 text-sm">
    <h2 className="font-semibold text-lg mb-4">Hello, <br />Mr. Chitransh Jawre</h2>
    <div className="space-y-3">
      <div className="font-medium text-gray-600">MY ORDERS</div>

      <div className="font-medium text-gray-600">ACCOUNT SETTINGS</div>
      <ul className="ml-3 text-gray-500 space-y-1">
        <li>Profile Information</li>
        <li>Manage Addresses</li>
        <li>PAN Card Information</li>
      </ul>

      <div className="font-medium text-gray-600">PAYMENTS</div>
      <ul className="ml-3 text-gray-500 space-y-1">
        <li>Gift Cards</li>
        <li>Saved UPI</li>
        <li>Saved Cards</li>
      </ul>

      <div className="font-medium text-gray-600">MY STUFF</div>
      <ul className="ml-3 text-gray-500 space-y-1">
        <li>My Coupons</li>
        <li>My Reviews & Ratings</li>
        <li>All Notifications</li>
        <li className="font-semibold text-blue-600">My Wishlist</li>
      </ul>
    </div>
    <button className="mt-6 w-full bg-gray-200 py-2 rounded-md">Logout</button>
  </div>
);

const WishlistPage = () => {
  return (
    <div className="flex px-20  mt-26 bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-xl font-semibold mb-4">My Wishlist ({wishlistItems.length})</h1>
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-sm rounded-md p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4 flex-1">
                <h2 className="font-medium text-gray-800">{item.title}</h2>
                {item.unavailable && (
                  <span className="text-red-500 text-xs">Currently unavailable</span>
                )}
                <div className="text-sm text-gray-600 space-x-2 mt-1">
                  <span className="text-lg font-semibold text-black">{item.price}</span>
                  <span className="line-through text-gray-400">{item.oldPrice}</span>
                  <span className="text-green-600 font-medium">{item.discount}</span>
                </div>
              </div>
              <button className="text-gray-500 hover:text-red-600">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
