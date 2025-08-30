import React from 'react'
import { FaShoppingCart, FaBolt, FaSearch } from "react-icons/fa";
import HeroCarousel from '../../../components/HeroCarousal';
import DealCardGrid from '../../../components/DealCardGrid';
import ProductSection from '../../../components/Products';
import FullWidthCarousel from '../../../components/FullWidthCrousal';
import NewArrivals from '../../../components/NewArrival';
import AmazonStyleNavbar from '../../../components/Navbar';
import RecentViewed from '../../../components/RecentViewd';
import FashionCategoryCarousel from '../../../components/Category';
import Footer from '../../../components/Footer';




// import "../Global.css"

const Home = () => {
  return (
    <>
<div className=' bg-gray-100'>
        <AmazonStyleNavbar />
      <HeroCarousel />
      <FashionCategoryCarousel/>
      <DealCardGrid />
      <NewArrivals/>
      <RecentViewed/>
      {/* <ProductSection /> */}
      {/* <DealCardGrid /> */}
      <FullWidthCarousel />
      <Footer/>
</div>

    </>
  )
}

export default Home


