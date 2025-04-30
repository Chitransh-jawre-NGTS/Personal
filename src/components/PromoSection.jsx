import React from 'react';
import BrandPromoCard from './BrandPromoCard';

const promoData = [
  {
    id: 1,
    image: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1745399420_lorealparis_hydratedhair_aishwarya_1476x1028.jpeg",
    discount: 'Upto 30% off',
    subtext: 'Buy 2, get extra 10% off',
  },
  {
    id: 2,
    image: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1745399420_lorealparis_hydratedhair_aishwarya_1476x1028.jpeg",
    discount: 'Upto 40% off',
    subtext: '',
  },
];

const PromoSection = () => {
  return (
    <section className="md:w-[85%] w-full mx-auto py-4 gap-1 lg:py-10 grid grid-cols-2 sm:grid-cols-2 md:gap-6">
      {promoData.map((item) => (
        <BrandPromoCard
          key={item.id}
          image={item.image}
          discount={item.discount}
          subtext={item.subtext}
        />
      ))}
    </section>
  );
};

export default PromoSection;
