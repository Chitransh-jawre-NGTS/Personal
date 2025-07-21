import { useNavigate } from 'react-router-dom';
import React from 'react';
import HeroCarousel from '../../RentalComponents/HeroCraouslRental';
import CategorySection from '../../RentalComponents/CatagorySectionRental';
import RentalCartSection from '../../RentalComponents/RentalCartSection';

const RentalHub = () => {
  return (
    <>
      <HeroCarousel />
      <CategorySection />
      <RentalCartSection />
    </>
  );
};

export default RentalHub;
