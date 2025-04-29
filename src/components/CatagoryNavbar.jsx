import React, { useState } from 'react';

const categories = [
  {
    name: 'Women Ethnic',
    subcategories: ['Sarees', 'Kurtis', 'Dupattas', 'Blouses'],
  },
  {
    name: 'Women Western',
    subcategories: ['Dresses', 'Tops', 'Jeans', 'Jumpsuits'],
  },
  {
    name: 'Men',
    subcategories: ['Shirts', 'T-Shirts', 'Jeans', 'Ethnic Wear'],
  },
  {
    name: 'Kids',
    subcategories: ['Boys Clothing', 'Girls Clothing', 'Toys', 'Footwear'],
  },
  {
    name: 'Beauty & Health',
    subcategories: ['Makeup', 'Skincare', 'Haircare', 'Wellness'],
  },
  {
    name: 'Bags & Footwear',
    subcategories: ['Handbags', 'Backpacks', 'Heels', 'Casual Shoes'],
  },
];

const CategoryNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-white hidden fixed top-16 z-30 shadow border-t border-b border-gray-300 py-4 px-10 w-full md:flex justify-center">

      <ul className="flex gap-6 relative">
        {categories.map((cat, idx) => (
          <li
            key={cat.name}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className="relative cursor-pointer group"
          >
            <span className="text-sm text-gray-800 font-medium hover:text-purple-600 transition">{cat.name}</span>

            {activeIndex === idx && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md  w-48 z-50">
                <ul className="py-2">
                  {cat.subcategories.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="px-4 py-2 hover:bg-purple-50 text-sm hover:text-purple-700 transition"
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
  );
};

export default CategoryNavbar;
