import React, { useState } from "react";
import { Slider } from "@mui/material";

const ProductFilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <aside className="w-full md:w-72 bg-white border-r border-gray-200 p-6 h-fit sticky top-24 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Category</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><input type="checkbox" /> Electronics</li>
          <li><input type="checkbox" /> Fashion</li>
          <li><input type="checkbox" /> Home & Kitchen</li>
          <li><input type="checkbox" /> Beauty</li>
          <li><input type="checkbox" /> Books</li>
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          min={0}
          max={10000}
          valueLabelDisplay="auto"
          sx={{ color: "#ec4899" }} // Tailwind pink-500
        />
        <p className="text-sm text-gray-600 mt-1">
          ₹{priceRange[0]} - ₹{priceRange[1]}
        </p>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Brands</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><input type="checkbox" /> Apple</li>
          <li><input type="checkbox" /> Samsung</li>
          <li><input type="checkbox" /> Boat</li>
          <li><input type="checkbox" /> Sony</li>
          <li><input type="checkbox" /> OnePlus</li>
        </ul>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Ratings</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li><input type="radio" name="rating" /> 4★ & above</li>
          <li><input type="radio" name="rating" /> 3★ & above</li>
          <li><input type="radio" name="rating" /> 2★ & above</li>
          <li><input type="radio" name="rating" /> 1★ & above</li>
        </ul>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Color</h3>
        <div className="flex gap-2 flex-wrap">
          {["black", "red", "blue", "green", "yellow", "white"].map((color) => (
            <div
              key={color}
              className={`w-6 h-6 rounded-full border-2 cursor-pointer`}
              style={{ backgroundColor: color }}
              title={color}
            ></div>
          ))}
        </div>
      </div>

      <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold">
        Apply Filters
      </button>
    </aside>
  );
};

export default ProductFilterSidebar;
