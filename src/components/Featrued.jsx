import React from "react";

const featuredItems = [
  {
    id: 1,
    title: "Best of Noise TWS",
    subtitle: "Best. Deal. Ever.",
    offer: "Min. 73% Off",
    image: "/assets/noise.png",
  },
  {
    id: 2,
    title: "Makeup magic your way!",
    subtitle: "",
    offer: "From ₹151",
    image: "/assets/minara.png",
  },
  {
    id: 3,
    title: "Find what you need in a few clicks. Not 40.",
    subtitle: "It’s possible on your Intel AI PC",
    offer: "From ₹57,490*",
    image: "/assets/intel.png",
  },
];

const FeaturedBrandsCarousel = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Featured Brands</h2>
      <div className="flex overflow-x-auto space-x-4">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="min-w-[300px] bg-white shadow-md rounded-md overflow-hidden"
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-bold">{item.title}</h3>
              {item.subtitle && <p className="text-xs text-gray-600">{item.subtitle}</p>}
            </div>
            <div className="bg-purple-600 text-white p-2 text-center font-semibold text-sm">
              {item.offer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBrandsCarousel;
