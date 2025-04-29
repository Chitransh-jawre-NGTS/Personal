import React from 'react';

const categories = [
  { image: 'https://picsum.photos/300/300?random=1', label: 'Ethnic Wear' },
  { image: 'https://picsum.photos/300/300?random=2', label: 'Western Dresses' },
  { image: 'https://picsum.photos/300/300?random=5', label: 'Menswear' },
  { image: 'https://picsum.photos/300/300?random=3', label: 'Footwear' },
  { image: 'https://picsum.photos/300/300?random=7', label: 'Beauty' },
  { image: 'https://picsum.photos/300/300?random=9', label: 'Trendy' },
];

const CategorySection = () => {
  return (
    <div className= " w-[95%] mx-auto py-10 lg:mt-20 bg-white">
      <div className="container px-4">
        <div className="flex flex-wrap justify-evenly gap-2 lg:gap-6">
          {categories.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
                <img src={item.image} alt={item.label} className="w-20 h-20 object-contain" />
              </div>
              <p className="mt-2 text-center text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
