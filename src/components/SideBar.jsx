import React, { useState } from "react";
import {
  FaTshirt,
  FaShoePrints,
  FaGlasses,
  FaHatCowboy,
  FaShoppingBag,
  FaPumpSoap,
  FaMobileAlt,
  FaLaptop,
  FaGamepad,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  GiLipstick,
  GiCakeSlice,
  GiBread,
  GiToyMallet,
} from "react-icons/gi";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [expanded, setExpanded] = useState({});

  const toggleDropdown = (label) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const categories = [
    {
      title: "Fashion",
      items: [
        {
          icon: <FaTshirt />,
          label: "Clothes",
          subcategories: ["Kurta", "Saree", "Shirt", "Jeans"],
        },
        {
          icon: <FaShoePrints />,
          label: "Shoes",
          subcategories: ["Sport", "Casual", "Formal"],
        },
        { icon: <FaGlasses />, label: "Glasses" },
        { icon: <FaShoppingBag />, label: "Bags" },
        { icon: <FaHatCowboy />, label: "Hat" },
        { icon: <GiLipstick />, label: "Makeup" },
        { icon: <FaPumpSoap />, label: "Cosmetics" },
      ],
    },
    {
      title: "Bakery",
      items: [
        {
          icon: <GiCakeSlice />,
          label: "Cake",
          subcategories: ["Chocolate", "Vanilla", "Fruit"],
        },
        { icon: <GiBread />, label: "Bread", subcategories: ["White", "Brown"] },
      ],
    },
    {
      title: "Electronics",
      items: [
        {
          icon: <FaMobileAlt />,
          label: "Mobiles",
          subcategories: ["Samsung", "iPhone", "Realme"],
        },
        {
          icon: <FaLaptop />,
          label: "Laptops",
          subcategories: ["MacBook", "HP", "Lenovo"],
        },
        { icon: <FaGamepad />, label: "Gaming", subcategories: ["PS5", "Xbox"] },
      ],
    },
    {
      title: "Toys",
      items: [
        { icon: <GiToyMallet />, label: "Soft Toys" },
        {
          icon: <FaPuzzlePiece />,
          label: "Puzzles",
          subcategories: ["3D", "Board"],
        },
      ],
    },
  ];

  return (
    <aside
      className={`fixed top-1/2 left-0 transform -translate-y-1/2 w-80 h-[85vh] bg-[#20212C] text-white rounded-r-2xl p-6 z-10 shadow-xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } overflow-y-auto`}
    >
      <style>
        {`
          aside::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl md:hidden"
      >
        <IoMdClose />
      </button>

      <div className="space-y-10 mt-10">
        {categories.map((section) => (
          <div key={section.title}>
            <h4 className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-3">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.items.map(({ icon, label, subcategories }) => (
                <li key={label}>
                  {/* Parent Item */}
                  <div
                    className="flex items-center justify-between bg-[#2A2B3D] hover:bg-[#34364A] px-4 py-2 rounded-lg transition duration-200 cursor-pointer"
                    onClick={() => subcategories && toggleDropdown(label)}
                  >
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-lg text-gray-300">{icon}</span>
                      <span className="text-gray-200">{label}</span>
                    </div>
                    {subcategories ? (
                      expanded[label] ? (
                        <IoIosArrowDown className="text-gray-400 text-sm" />
                      ) : (
                        <IoIosArrowForward className="text-gray-400 text-sm" />
                      )
                    ) : null}
                  </div>

                  {/* Stylish Subcategories */}
                  {subcategories && (
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expanded[label] ? "max-h-96 mt-2" : "max-h-0"
                      }`}
                    >
                      <ul className="space-y-2 ml-5">
                        {subcategories.map((sub) => (
                          <li
                            key={sub}
                            className="bg-[#2A2B3D] hover:bg-[#34364A] px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition duration-200 cursor-pointer"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
