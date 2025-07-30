// // src/Routing.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ScrollToTop from '../components/ScrollTop';
// import PrivateRoute from './PrivateRouting';

// // import Layer from './Layer';
// import Home from '../pages/SellerHub/Home';
// import Offers from '../pages/Offers';
// import Login from '../pages/Login';
// import BecomeSeller from '../pages/SellerHub/BecomeSeller';
// import ProductDetails from '../pages/ProductDetails';
// import Cart from '../pages/Cart';
// import Checkout from '../pages/Checkout';
// import AccountPage from '../pages/AccountPage';
// import SearchResults from '../pages/SellerHub/SerchResult';
// import Chatbot from '../components/ChatBot';
// import Favourate from '../pages/Favourate';
// import RentalHub from '../pages/RentalHub/RentalHub';
// import RentalCheckout from '../components/RentalCheakout';
// import TopBar from '../components/Topbar';
// import Footer from '../components/Footer';
// import Test from '../components/Test1';
// import NewArrivals from '../components/NewArrival';
// import AmazonStyleNavbar from '../components/Navbar';
// import FooterSeller from '../components/FooterSeller';

// const Routing = () => {
//   return (
//     <Router>
//         {/* <TopBar/> */}
//         <AmazonStyleNavbar/>
//       <Routes>
//         {/* All routes inside Layer layout */}
//         <Route >
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/offers" element={<Offers />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/becomeseller" element={<BecomeSeller />} />
//           <Route path="/product/:id" element={<ProductDetails />} />
//            <Route path="/product/:id" element={<NewArrivals />} />
//           <Route path="/accounts" element={<AccountPage />} />
//           <Route path="/search" element={<SearchResults />} />
//           <Route path="/rental" element={<RentalHub />} />
//           <Route path="/rentalcheckout" element={<RentalCheckout />} />
//           <Route path="/test" element={<Test/>} />

//           {/* Protected Routes */}
//           <Route
//             path="/carts"
//             element={
//               <PrivateRoute>
//                 <Cart />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/favourate"
//             element={
//               <PrivateRoute>
//                 <Favourate />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/checkout"
//             element={
//               <PrivateRoute>
//                 <Checkout />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/chatbot"
//             element={
//               <PrivateRoute>
//                 <Chatbot />
//               </PrivateRoute>
//             }
//           />
//         </Route>
//       </Routes>
//       <FooterSeller/>
//     </Router>
//   );
// };

// export default Routing;


// src/Routing.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollTop';
// import PrivateRoute from './PrivateRouting';



import SearchResults from '../pages/SellerHub/SerchResult';
import Chatbot from '../components/ChatBot';
import RentalCheckout from '../RentalComponents/RentalCheakout';
import NewArrivals from '../components/NewArrival';
import AmazonStyleNavbar from '../components/Navbar';
import FooterSeller from '../components/FooterSeller';

import Footer from '../components/Footer';
import RentalProductDetails from '../RentalComponents/RentalProductDetail';
import { Toaster } from 'react-hot-toast';
import BookNow from '../RentalComponents/BooNow';
import RentalHub from '../pages/RentalHub/rental-hub';
import Home from '../pages/SellerHub/home';
import Login from '../pages/Login';
import BecomeSeller from '../pages/SellerHub/becomeSeller';
import AccountPage from '../pages/accountpage';
import Favourate from '../pages/Favourate';
import Orders from '../pages/Orders';
import Cart from '../pages/cart';
import Checkout from '../pages/SellerHub/Checkout';

const Routing = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <AmazonStyleNavbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/becomeseller" element={<BecomeSeller />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/rental" element={<RentalHub />} />
        <Route path="/rentalcheckout" element={<RentalCheckout />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/wishlist" element={<Favourate />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/rentalproduct/:id" element={<RentalProductDetails />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
