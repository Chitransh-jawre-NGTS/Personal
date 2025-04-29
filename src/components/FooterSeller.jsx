// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const FooterSeller = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Heading */}
        <h2 className="text-center text-2xl font-bold mb-8 text-white">
          Popular categories to sell across India
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-8">
          <div className="space-y-2">
            <p>Sell Mobile Online</p>
            <p>Sell Clothes Online</p>
            <p>Sell Sarees Online</p>
            <p>Sell Electronics Online</p>
            <p>Sell Women Clothes Online</p>
          </div>
          <div className="space-y-2">
            <p>Sell Shoes Online</p>
            <p>Sell Jewellery Online</p>
            <p>Sell Tshirts Online</p>
            <p>Sell Furniture Online</p>
            <p>Sell Makeup Online</p>
          </div>
          <div className="space-y-2">
            <p>Sell Paintings Online</p>
            <p>Sell Watch Online</p>
            <p>Sell Books Online</p>
            <p>Sell Home Products Online</p>
            <p>Sell Kurtis Online</p>
          </div>
          <div className="space-y-2">
            <p>Sell Beauty Products Online</p>
            <p>Sell Toys Online</p>
            <p>Sell Appliances Online</p>
            <p>Sell Shirts Online</p>
            <p>Sell Indian Clothes Online</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Sell Online */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sell Online</h3>
            <ul className="space-y-2">
              <li>Create Account</li>
              <li>List Products</li>
              <li>Storage & Shipping</li>
              <li>Fees & Commission</li>
              <li>Help & Support</li>
            </ul>
          </div>

          {/* Grow Your Business */}
          <div>
            <h3 className="text-white font-semibold mb-4">Grow Your Business</h3>
            <ul className="space-y-2">
              <li>Insights & Tools</li>
              <li>Flipkart Ads</li>
              <li>Flipkart Value Services</li>
              <li>Shopping Festivals</li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>FAQs</li>
              <li>Seller Success Stories</li>
              <li>Seller Blogs</li>
            </ul>
          </div>

          {/* Download App & Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4">Download Mobile App</h3>
            <div className="space-y-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-32" />
            </div>

            {/* Socials */}
            <div className="flex space-x-4 mt-6">
              <FaFacebookF className="text-white cursor-pointer" />
              <FaInstagram className="text-white cursor-pointer" />
              <FaLinkedinIn className="text-white cursor-pointer" />
              <FaYoutube className="text-white cursor-pointer" />
              <FaTwitter className="text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Go to Top Button */}
        <div className="flex justify-end mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-100 transition"
          >
            Go to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSeller;
