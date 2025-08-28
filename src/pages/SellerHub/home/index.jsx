import React from 'react'
import { FaShoppingCart, FaBolt, FaSearch } from "react-icons/fa";
import HeroCarousel from '../../../components/HeroCarousal';
import DealCardGrid from '../../../components/DealCardGrid';
import ProductSection from '../../../components/Products';
import FullWidthCarousel from '../../../components/FullWidthCrousal';
import NewArrivals from '../../../components/NewArrival';
import AmazonStyleNavbar from '../../../components/Navbar';




// import "../Global.css"

const Home = () => {
  return (
    <>
      <AmazonStyleNavbar />
      <HeroCarousel />
      <DealCardGrid />
      {/* <NewArrivals/> */}
      {/* <ProductSection /> */}
      {/* <DealCardGrid /> */}
      <FullWidthCarousel />

    </>
  )
}

export default Home


