import React from 'react';
import BrandPromoCard from './BrandPromoCard';

const promoData = [
  {
    image: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1745399420_lorealparis_hydratedhair_aishwarya_1476x1028.jpeg",
    discount: 'Upto 30% off',
    subtext: 'Buy 2, get extra 10% off',
  },
  {
    image: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1745399420_lorealparis_hydratedhair_aishwarya_1476x1028.jpeg",
    discount: 'Upto 40% off',
    subtext: '',
  },

];

const PromoSection = () => {
  return (
    <div className="w-[85%]  mx-auto py-10 flex flex-wrap gap-6 justify-between">
      {promoData.map((item, index) => (
        <BrandPromoCard
          key={index}
          image={item.image}
          discount={item.discount}
          subtext={item.subtext}
        />
      ))}
    </div>
  );
};

export default PromoSection;
