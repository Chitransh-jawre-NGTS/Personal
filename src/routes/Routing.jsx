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
import PrivateRoute from './PrivateRouting';

import SearchResults from '../pages/SellerHub/SerchResult';
import Chatbot from '../components/ChatBot';
import RentalCheckout from '../RentalComponents/RentalCheakout';
import NewArrivals from '../components/NewArrival';
import { Toaster } from 'react-hot-toast';
import BookNow from '../RentalComponents/BooNow';
import RentalHub from '../pages/RentalHub/rental-hub/index.jsx';
import Home from '../pages/SellerHub/home/index.jsx';
import BecomeSeller from '../pages/SellerHub/becomeSeller';
import AccountPage from '../pages/accountpage';
import Favourate from '../pages/Favourate';
import Orders from '../pages/Orders';
import Cart from '../pages/cart';
import Checkout from '../pages/SellerHub/Checkout';
import Signup from '../pages/signup/index.jsx';
import ProductDetailPage from '../pages/SellerHub/productdetails/index.jsx';
import Dashboard from '../pages/dashboard/index.jsx';
import FashionCategoryPage from '../pages/FashionCatagory/index.jsx';
import ReelsPage from '../pages/Reels/index.jsx';
import PaymentPage from '../pages/Payment/index.jsx';
import OrderDetails from '../pages/OrderDetails/index.jsx';
import RentNow from '../RentalComponents/RentalCheakout';
import Login from '../pages/Login/index.jsx';
import RentalProductDetails from '../RentalComponents/RentalProductDetail';

const Routing = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop/>
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Home />} />

        {/* Protected Routes */}
      
        <Route
          path="/becomeseller"
          element={
            <PrivateRoute>
              <BecomeSeller />
            </PrivateRoute>
          }
        />
        <Route
          path="/newarrivals"
          element={
            <PrivateRoute>
              <NewArrivals />
            </PrivateRoute>
          }
        />
        <Route
          path="/accounts"
          element={
            <PrivateRoute>
              <AccountPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <SearchResults />
            </PrivateRoute>
          }
        />
        <Route
          path="/rental"
          element={
            <PrivateRoute>
              <RentalHub />
            </PrivateRoute>
          }
        />
        <Route
          path="/rentalcheckout"
          element={
            <PrivateRoute>
              <RentNow />
            </PrivateRoute>
          }
        />
        <Route
          path="/carts"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Favourate />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <PrivateRoute>
              <Chatbot />
            </PrivateRoute>
          }
        />
        <Route
          path="/rentalproduct/:id"
          element={
            <PrivateRoute>
              <RentalProductDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/booknow"
          element={
            <PrivateRoute>
              <BookNow />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/productdeatilspage"
          element={
            <PrivateRoute>
              <ProductDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/fashion"
          element={
            <PrivateRoute>
              <FashionCategoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/reels"
          element={
            <PrivateRoute>
              <ReelsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-details"
          element={
            <PrivateRoute>
              <OrderDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
