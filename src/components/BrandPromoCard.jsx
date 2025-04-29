import React from 'react';

const BrandPromoCard = ({ image, discount, subtext }) => {
  return (
    <div className="bg-white h-auto rounded-lg shadow-md overflow-hidden max-w-[600px] w-full">
      <img src={image} alt="Promo" className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-purple-600 text-xl font-bold">{discount}</h3>
        {subtext && <p className="text-sm text-gray-600 mt-1">{subtext}</p>}
      </div>
    </div>
  );
};

export default BrandPromoCard;
