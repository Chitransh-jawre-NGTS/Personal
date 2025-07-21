// import React, { useState } from "react";
// import Sidebar from "../components/SideBar";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Layer() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="flex ">
//       {/* Sidebar */}
//       {/* <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />   */}

//       {/* Main Content */}
//       <div
//         className={`transition-all duration-300  flex-1  ${
//           isOpen ? "" : "ml-0 flex justify-center items-center"
//         }`}
//       >
//         <div className="  ">
//           <Navbar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)}/>
//           <Outlet /> {/* ✅ This renders <Home />, <Offers />, etc */}
//           <Footer/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Layer;
