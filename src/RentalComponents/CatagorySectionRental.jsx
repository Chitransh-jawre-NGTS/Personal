import React from "react";

const categories = [
  {
    id: 1,
    name: "Sarees",
    image: "https://picsum.photos/seed/saree/300/300",
  },
  {
    id: 2,
    name: "Lehengas",
    image: "https://picsum.photos/seed/lehenga/300/300",
  },
  {
    id: 3,
    name: "Gowns",
    image: "https://picsum.photos/seed/gown/300/300",
  },
  {
    id: 4,
    name: "Sherwanis",
    image: "https://picsum.photos/seed/sherwani/300/300",
  },
  {
    id: 5,
    name: "Accessories",
    image: "https://picsum.photos/seed/accessories/300/300",
  },
  {
    id: 6,
    name: "Mens Kurta",
    image: "https://picsum.photos/seed/kurta/300/300",
  },
];

const CategorySection = () => {
  return (
    <div className="max-w-[100%] mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
