import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousal';
import ProductCarousel from '../components/ProductCarousal';
import Footer from '../components/Footer';
import InfoBanner from '../components/InfoBanner';
import PromoSection from '../components/PromoSection';
import WishlistItemCard from '../components/WishlistItemCart';
import ProductPage from '../components/BestPicked';
import ProductGrid from '../components/Products';
import SkincareCategories from '../components/ProductCatagory';
import CategoryNavbar from '../components/CatagoryNavbar';
import CategorySection from '../components/CatagorySection';
import ComingSoon from '../components/ComingSoon';
import ProductDescription from '../components/ProductDescription';
import Chatbot from '../components/ChatBot';

const Home = () => {
  return (
    <>
  <div className="bg-gray-100 ">
  <Navbar />
   <CategoryNavbar/>
   {/* <SkincareCategories/> */}
    <Carousel/>
    <CategorySection/>
    <ProductCarousel/>
    <PromoSection/>
    <ProductGrid/>
    <ProductPage/>
    <InfoBanner/>
    <Footer/>
    {/* <WishlistItemCard/> */}
    {/* <ComingSoon/> */}
    {/* <ProductDescription/> */}
    <Chatbot/>
  </div>
    </>
  )
}

export default Home
