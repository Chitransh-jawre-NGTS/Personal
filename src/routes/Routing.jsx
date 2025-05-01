// // src/Routing.jsx
// import React from 'react';
// import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Offers from '../pages/Offers';
// import Wishlist from '../pages/Wishlist';
// import Login from '../pages/Login';
// import Favourate from '../pages/Favourate';
// import BecomeSeller from '../pages/BecomeSeller';
// import { Scroll } from 'lucide-react';
// import ScrollToTop from '../components/ScrollTop';
// import ProductDetails from '../pages/ProductDetails';
// import { Toaster } from 'react-hot-toast';
// import Cart from '../pages/Cart';
// import Checkout from '../pages/Checkout';
// import AccountPage from '../pages/AccountPage';
// import HelpPage from '../pages/HelpPage';
// import SearchResults from '../pages/SerchResult';
// // import Wishlist from '../pages/Wishlist';

// const Routing = () => {
//   return (
//    <Router>
//     <ScrollToTop/>
//     {/* <Toaster/> */}
//      <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/offers" element={<Offers />} />
//       <Route path='/carts'element={<Cart/>}/>
//       <Route path='/login' element={<Login/>}/>
//       {/* <Route path='/favourate' element={<Wishlist/>}/> */}
//       <Route path='/supplier' element={<BecomeSeller/>} />
//       <Route path="/product/:id" element={<ProductDetails />} />
//       <Route path='/checkout'  element={<Checkout/>} />
//       <Route path='/accounts' element={<AccountPage/>}/>
//       <Route path='/help' element={<HelpPage/>}/>
//       <Route path="/search" element={<SearchResults />} />
//     </Routes>


//     <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />

//           {/* Protected Routes */}
//           <Route
//             path="/cart"
//             element={
//               <PrivateRoute>
//                 <Cart />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/wishlist"
//             element={
//               <PrivateRoute>
//                 <Wishlist />
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
//             path="/profile"
//             element={
//               <PrivateRoute>
//                 <Profile />
//               </PrivateRoute>
//             }
//           />

//           {/* Chatbot Route */}
//           <Route
//             path="/chatbot"
//             element={
//               <PrivateRoute>
//                 <Chatbot />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>


    
//    </Router>
//   );
// };

// export default Routing;






// src/Routing.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Offers from '../pages/Offers';
import Wishlist from '../pages/Wishlist';
import Login from '../pages/Login';
import BecomeSeller from '../pages/BecomeSeller';
import ScrollToTop from '../components/ScrollTop';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import AccountPage from '../pages/AccountPage';
import HelpPage from '../pages/HelpPage';
import SearchResults from '../pages/SerchResult';
import PrivateRoute from './PrivateRouting'; // ⬅️ Make sure you have this component
import Chatbot from '../components/ChatBot';     // ⬅️ If it exists

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/supplier" element={<BecomeSeller />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Protected Routes */}
        <Route
          path="/cart"
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
              <Wishlist />
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
      </Routes>
    </Router>
  );
};

export default Routing;
