import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  { title: "Clothes", sub: ["Men", "Women", "Boy"] },
  { title: "Cosmetics" },
  { title: "Shoes" },
  { title: "Bag" },
  { title: "Electronics" },
];

const brands = ["Zencart Mart", "Xeta Store", "Pili Market", "Indiana Store"];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["#000", "#3B82F6", "#F87171", "#34D399", "#FBBF24"];

const FilterSidebar = () => {
  const [expanded, setExpanded] = useState({});
  const [selectedBrand, setSelectedBrand] = useState("Zencart Mart");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState(500);

  const toggleExpand = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-lg p-6 space-y-6 text-gray-700 border border-gray-100">
      <h2 className="text-xl font-bold text-blue-600">Filters</h2>

      {/* Category */}
      <div className="border-t pt-3">
        {categories.map(({ title, sub }) => (
          <div key={title} className="mb-3">
            <div
              className="flex justify-between items-center cursor-pointer font-medium text-gray-800 hover:text-blue-600 transition"
              onClick={() => toggleExpand(title)}
            >
              <span>{title}</span>
              {sub ? (
                expanded[title] ? <ChevronUp size={18} /> : <ChevronDown size={18} />
              ) : null}
            </div>
            {sub && expanded[title] && (
              <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                {sub.map((item) => (
                  <li key={item} className="flex justify-between hover:text-blue-500">
                    <span>{item}</span>
                    <span className="text-gray-400">
                      -{Math.floor(Math.random() * 100)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-2">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className={`flex items-center gap-2 text-gray-700 cursor-pointer rounded-md px-2 py-1 hover:bg-blue-50 transition ${
                selectedBrand === brand ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <label
              key={size}
              className={`px-3 py-1 rounded-md border text-sm cursor-pointer transition hover:bg-blue-50 ${
                selectedSizes.includes(size)
                  ? "bg-blue-100 text-blue-600 border-blue-300"
                  : "border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => toggleSize(size)}
                className="hidden"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-2">Price Range</h3>
        <input
          type="range"
          min={0}
          max={1000}
          step={50}
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="text-sm text-gray-500 mt-1">Up to ₹{priceRange}</p>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-2">Color</h3>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-6 h-6 rounded-full border-2 ring-2 ring-white hover:ring-blue-400 cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold text-blue-600 mb-2">Availability</h3>
        <label className="block text-gray-600 hover:text-blue-600">
          <input type="checkbox" className="mr-2" />
          In Stock
        </label>
        <label className="block text-gray-600 hover:text-blue-600">
          <input type="checkbox" className="mr-2" />
          Out of Stock
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
