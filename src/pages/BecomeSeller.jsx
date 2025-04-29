import React from 'react'
import Navbar from '../components/Navbar'
import CategoryNavbar from '../components/CatagoryNavbar'
import FooterSeller from '../components/FooterSeller'

const BecomeSeller = () => {
  return (
    <>
     <Navbar/>
     <CategoryNavbar/> 
     <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-pink-50 min-h-screen px-6 lg:px-20 py-12">
      
      {/* Left Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Meesho Shipping, Delivery & Returns Policy
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Get your products delivered to crores of customers with the <span className="text-pink-600 font-semibold">lowest shipping charges</span>.
        </p>
        <p className="text-gray-600 mb-8">
          <span className="inline-block bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full mr-2">New!</span>
          Don't have a GSTIN or have a Composition GSTIN? You can still sell on Meesho. Click <span className="text-pink-600 font-semibold cursor-pointer">here</span> to know more.
        </p>

        {/* Input and Button */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <span className="flex items-center px-3 text-gray-600 bg-gray-100">+91</span>
            <input 
              type="text" 
              placeholder="Enter Your Mobile Number" 
              className="outline-none px-4 py-2 w-48"
            />
          </div>
          <button className="ml-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold">
            Start Selling
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mb-10 lg:mb-0">
        <img 
          src="/path-to-your-image.png" 
          alt="Delivery Man" 
          className="w-full max-w-md"
        />
      </div>

    </section>






    
     <FooterSeller/>
    </>
  )
}

export default BecomeSeller
