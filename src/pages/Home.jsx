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
import { FaShoppingCart, FaBolt, FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

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
      <div className="bg-gray-100 ">
        <Navbar />
        <CategoryNavbar />
        <div className="flex items-center bg-white mt-14 gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-[#ececf5] transition">
          <FaMapMarkerAlt className="text-blue-400" />
          <span className="text-gray-800">Add delivery location to check extra discount</span>
          <FaAngleDoubleRight className="text-gray-400" />
        </div>

        {/* Mobile Search Bar (Bottom-fixed) */}
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


        <div className="flex justify-evenly  items-center w-full px-4 py-4 bg-gray-100 gap-4">
          <Link to={"/"}> <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
            <FaShoppingCart />
            Shopinger
          </button></Link>

          <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
            <FaBolt />
            Rental-HUB
          </button>
        </div>

        <div className="w-full  md:hidden py-6 bg-white">
          <div
            className="overflow-x-auto"
            style={{
              scrollbarWidth: 'none',          // Firefox
              msOverflowStyle: 'none'          // IE & Edge
            }}
          >
            <div
              className="flex gap-4 px-4 min-w-max"
              style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch'  // smooth scrolling on iOS
              }}
            >
              {/* Scrollbar hidden for Webkit (Chrome, Safari) */}
              <style>
                {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
              </style>

              {categories.map((item, index) => (
                <div key={index} className="flex flex-col items-center min-w-[70px]">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
                    <img src={item.image} alt={item.label} className="w-12 h-12 object-contain" />
                  </div>
                  <p className="mt-2 text-xs text-gray-700 font-medium text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Carousel />
        <CategorySection />
        <ProductCarousel />
        <PromoSection />

        <ProductGrid />

        <ProductPage />
        <InfoBanner />
        <Footer />
        {/* <WishlistItemCard/> */}
        {/* <ComingSoon/> */}
        {/* <ProductDescription/> */}
        {/* <Chatbot /> */}
      </div>
    </>
  )
}

export default Home




// import React from 'react'
// import Navbar from '../components/Navbar';
// import Carousel from '../components/Carousal';
// import ProductCarousel from '../components/ProductCarousal';
// import Footer from '../components/Footer';
// import InfoBanner from '../components/InfoBanner';
// import PromoSection from '../components/PromoSection';
// import WishlistItemCard from '../components/WishlistItemCart';
// import ProductPage from '../components/BestPicked';
// import ProductGrid from '../components/Products';
// import SkincareCategories from '../components/ProductCatagory';
// import CategoryNavbar from '../components/CatagoryNavbar';
// import CategorySection from '../components/CatagorySection';
// import ComingSoon from '../components/ComingSoon';
// import ProductDescription from '../components/ProductDescription';
// import Chatbot from '../components/ChatBot';
// import { FaShoppingCart, FaBolt, FaSearch } from "react-icons/fa";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';

// // Fallback component to show when an error occurs
// const FallbackComponent = ({ error, resetErrorBoundary }) => (
//   <div role="alert" className="text-center p-4">
//     <h2 className="text-lg font-semibold text-red-600">Something went wrong!</h2>
//     <p className="text-sm text-gray-600">{error.message}</p>
//     <button 
//       onClick={resetErrorBoundary}
//       className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//     >
//       Try Again
//     </button>
//   </div>
// );

// const Home = () => {

//   const categories = [
//     { image: 'https://picsum.photos/300/300?random=10', label: 'Catagorys' },
//     { image: 'https://picsum.photos/300/300?random=1', label: 'Ethnic Wear' },
//     { image: 'https://picsum.photos/300/300?random=2', label: 'Western Dresses' },
//     { image: 'https://picsum.photos/300/300?random=5', label: 'Menswear' },
//     { image: 'https://picsum.photos/300/300?random=3', label: 'Footwear' },
//     { image: 'https://picsum.photos/300/300?random=7', label: 'Beauty' },
//     { image: 'https://picsum.photos/300/300?random=9', label: 'Trendy' },
//   ];

//   return (
//     <div className="bg-gray-100">
//       <Navbar />
//       <CategoryNavbar />
//       <div className="flex items-center bg-white mt-14 gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 cursor-pointer hover:bg-[#ececf5] transition">
//         <FaMapMarkerAlt className="text-blue-400" />
//         <span className="text-gray-800">Add delivery location to check extra discount</span>
//         <FaAngleDoubleRight className="text-gray-400" />
//       </div>

//       {/* Mobile Search Bar (Bottom-fixed) */}
//       <div className="w-full bg-white shadow-t p-2 flex lg:hidden z-50">
//         <div className="relative w-full">
//           <input
//             type="text"
//             placeholder="Search products, brands, etc..."
//             className="w-full border border-gray-300 bg-white rounded-2xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
//           />
//           <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-purple-600" />
//         </div>
//       </div>

//       <div className="flex justify-evenly items-center w-full px-4 py-4 bg-gray-100 gap-4">
//         <Link to={"/"}>
//           <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">
//             <FaShoppingCart />
//             Shopinger
//           </button>
//         </Link>

//         <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
//           <FaBolt />
//           Rental-HUB
//         </button>
//       </div>

//       <div className="w-full md:hidden py-6 bg-white">
//         <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//           <div className="flex gap-4 px-4 min-w-max" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
//             <style>{`
//               div::-webkit-scrollbar {
//                 display: none;
//               }
//             `}</style>

//             {categories.map((item, index) => (
//               <div key={index} className="flex flex-col items-center min-w-[70px]">
//                 <div className="w-16 h-16 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
//                   <img src={item.image} alt={item.label} className="w-12 h-12 object-contain" />
//                 </div>
//                 <p className="mt-2 text-xs text-gray-700 font-medium text-center">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Carousel />
//       <CategorySection />
//       <ProductCarousel />
//       <PromoSection />

//       <ErrorBoundary FallbackComponent={FallbackComponent}>
//         <ProductGrid />
//       </ErrorBoundary>

//       <ProductPage />
//       <InfoBanner />
//       <Footer />
//       <Chatbot />
//     </div>
//   );
// };

// export default Home;
