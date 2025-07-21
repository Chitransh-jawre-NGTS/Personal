import React from "react";

const cardData = [
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      { label: "Air conditioners", image: "https://picsum.photos/seed/ac/400/300" },
      { label: "Refrigerators", image: "https://picsum.photos/seed/fridge/400/300" },
      { label: "Microwaves", image: "https://picsum.photos/seed/microwave/400/300" },
      { label: "Washing machines", image: "https://picsum.photos/seed/washer/400/300" },
    ],
    footerLink: "See more",
  },
  {
    title: "Up to 60% off | Footwear & handbags",
    items: [
      { label: "Sports shoes", image: "https://picsum.photos/seed/sports/400/300" },
      { label: "Men's shoes", image: "https://picsum.photos/seed/mensshoes/400/300" },
      { label: "Women's shoes", image: "https://picsum.photos/seed/womensshoes/400/300" },
      { label: "Handbags", image: "https://picsum.photos/seed/handbag/400/300" },
    ],
    footerLink: "See all offers",
  },
  {
    title: "More Deals on Home Essentials",
    items: [
      { label: "Kitchen sets", image: "https://picsum.photos/seed/kitchen/400/300" },
      { label: "Furniture", image: "https://picsum.photos/seed/furniture/400/300" },
      { label: "Curtains", image: "https://picsum.photos/seed/curtains/400/300" },
      { label: "Lighting", image: "https://picsum.photos/seed/lighting/400/300" },
    ],
    footerLink: "Shop now",
  },
  {
    title: "Electronics & Gadgets",
    items: [
      { label: "Headphones", image: "https://picsum.photos/seed/headphones/400/300" },
      { label: "Smartphones", image: "https://picsum.photos/seed/smartphones/400/300" },
      { label: "Laptops", image: "https://picsum.photos/seed/laptops/400/300" },
      { label: "Speakers", image: "https://picsum.photos/seed/speakers/400/300" },
    ],
    footerLink: "Browse electronics",
  },
];

const DealCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-200">
      {cardData.map((section, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 p-6 flex flex-col justify-between"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-5">{section.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-sm text-gray-700 hover:text-black group"
              >
                <div className="overflow-hidden rounded-xl w-full shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-24 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
                <span className="mt-2 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="text-blue-600 text-sm mt-6 inline-block font-semibold relative group"
          >
            {section.footerLink}
            <span className="block h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default DealCardGrid;
