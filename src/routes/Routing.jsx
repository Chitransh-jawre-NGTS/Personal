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

import Home from '../pages/SellerHub/Home';
import Login from '../pages/Login';
import BecomeSeller from '../pages/SellerHub/BecomeSeller';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import AccountPage from '../pages/AccountPage';
import SearchResults from '../pages/SellerHub/SerchResult';
import Chatbot from '../components/ChatBot';
import Favourate from '../pages/Favourate';
import RentalHub from '../pages/RentalHub/RentalHub';
import RentalCheckout from '../RentalComponents/RentalCheakout';
import Test from '../components/Test1';
import NewArrivals from '../components/NewArrival';
import AmazonStyleNavbar from '../components/Navbar';
import FooterSeller from '../components/FooterSeller';
import Youtube from '../pages/Youtube';
import WatchHistory from '../pages/Youtube';

const Routing = () => {
  return (
    <Router>
      <AmazonStyleNavbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/becomeseller" element={<BecomeSeller />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/newarrivals" element={<NewArrivals />} />
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/rental" element={<RentalHub />} />
        <Route path="/rentalcheckout" element={<RentalCheckout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/favourate" element={<Favourate />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/youtube" element={<WatchHistory />} />
      </Routes>
      <FooterSeller />
    </Router>
  );
};

export default Routing;
