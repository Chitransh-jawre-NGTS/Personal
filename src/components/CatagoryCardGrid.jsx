import React from "react";

const categories = [
  {
    discount: "35%",
    title: "Fashion",
    subtitle: "Clothes",
    items: 16,
    fadedText: "35%",
  },
  {
    discount: "22%",
    title: "Generic",
    subtitle: "Cosmetics",
    items: 45,
    fadedText: "22%",
  },
  {
    discount: "65%",
    title: "Stylish",
    subtitle: "Shoes",
    items: 58,
    fadedText: "65%",
  },
  {
    discount: "45%",
    title: "Digital",
    subtitle: "Watches",
    items: 64,
    fadedText: "45%",
  },
   {
    discount: "65%",
    title: "Stylish",
    subtitle: "Shoes",
    items: 58,
    fadedText: "65%",
  },
  {
    discount: "45%",
    title: "Digital",
    subtitle: "Watches",
    items: 64,
    fadedText: "45%",
  },
];

export default function CategoryCardGrid() {
  return (
    <div className="flex container mx-auto flex-wrap gap-6 mt-8 justify-center bg-[#f7fafd] p-6">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative w-full sm:w-[300px] max-w-full h-full max-h-[400px] rounded-2xl p-4 shadow-sm text-gray-800 bg-gradient-to-b from-[#f2f4f7] to-[#d9dde3] flex flex-col"
        >
          {/* Faded Background Text */}
          <div className="absolute text-[64px] font-extrabold text-gray-300 top-4 right-4 pointer-events-none select-none">
            {cat.fadedText}
          </div>

          {/* Discount Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-[#1f2937] text-white text-xs font-bold px-2 py-1 rounded-sm">
              {cat.discount}
            </div>
          </div>

          {/* Title Section */}
          <div className="mt-16">
            <h4 className="text-base font-medium">{cat.title}</h4>
            <h3 className="text-xl font-extrabold">{cat.subtitle}</h3>
            <p className="text-sm text-blue-600 mt-1">Items ({cat.items})</p>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex space-x-2">
            {[1, 2, 3].map((imgNum) => (
              <img
                key={imgNum}
                src={`https://picsum.photos/seed/${cat.title}-${imgNum}/60/60`}
                alt={`${cat.title} ${imgNum}`}
                className="w-12 h-12 rounded-lg object-cover border border-white"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
