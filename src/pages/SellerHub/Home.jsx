import React from 'react'
import { FaShoppingCart, FaBolt, FaSearch } from "react-icons/fa";
import HeroCarousel from '../../components/HeroCarousal';
import DealCardGrid from '../../components/DealCardGrid';
import ProductSection from '../../components/Products';
import FullWidthCarousel from '../../components/FullWidthCrousal';
import NewArrivals from '../../components/NewArrival';



// import "../Global.css"

const Home = () => {

  const categories = [
    { image: 'https://picsum.photos/300/300?random=10', label: 'Catagorys' },
    { image: 'https://picsum.photos/300/300?random=1', label: 'Ethnic Wear' },
    { image: 'https://picsum.photos/300/300?random=2', label: 'Western Dresses' },
    { image: 'https://picsum.photos/300/300?random=5', label: 'Menswear' },
    { image: 'https://picsum.photos/300/300?random=3', label: 'Footwear' },
    { image: 'https://picsum.photos/300/300?random=7', label: 'Beauty' },
    { image: 'https://picsum.photos/300/300?random=9', label: 'Trendy' },
  ];
  return (
    <>
      <div className=" ">
        <div className="w-full bg-white shadow-t p-2 flex lg:hidden z-50">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products, brands, etc..."
              className="w-full border border-gray-300 bg-white rounded-2xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-purple-600" />
          </div>
        </div>
        <HeroCarousel />
        <DealCardGrid />
        {/* <NewArrivals/> */}
        <ProductSection />
        <DealCardGrid />
        <FullWidthCarousel />
        <DealCardGrid />
        <ProductSection />
        <FullWidthCarousel />
        <DealCardGrid />
        <DealCardGrid />
      </div>
    </>
  )
}

export default Home


