import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const FooterSeller = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white tracking-wide">
          Popular Categories to Sell Across India
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm mb-12">
          {[
            ["Sell Mobile Online", "Sell Clothes Online", "Sell Sarees Online", "Sell Electronics Online", "Sell Women Clothes Online"],
            ["Sell Shoes Online", "Sell Jewellery Online", "Sell Tshirts Online", "Sell Furniture Online", "Sell Makeup Online"],
            ["Sell Paintings Online", "Sell Watch Online", "Sell Books Online", "Sell Home Products Online", "Sell Kurtis Online"],
            ["Sell Beauty Products Online", "Sell Toys Online", "Sell Appliances Online", "Sell Shirts Online", "Sell Indian Clothes Online"],
          ].map((col, i) => (
            <div key={i} className="space-y-2">
              {col.map((item, index) => (
                <p
                  key={index}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-10" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold text-base border-b border-gray-700 pb-2 mb-4">
              Sell Online
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Create Account</li>
              <li className="hover:text-white cursor-pointer">List Products</li>
              <li className="hover:text-white cursor-pointer">Storage & Shipping</li>
              <li className="hover:text-white cursor-pointer">Fees & Commission</li>
              <li className="hover:text-white cursor-pointer">Help & Support</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold text-base border-b border-gray-700 pb-2 mb-4">
              Grow Your Business
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Insights & Tools</li>
              <li className="hover:text-white cursor-pointer">Flipkart Ads</li>
              <li className="hover:text-white cursor-pointer">Flipkart Value Services</li>
              <li className="hover:text-white cursor-pointer">Shopping Festivals</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold text-base border-b border-gray-700 pb-2 mb-4">
              Learn More
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Seller Success Stories</li>
              <li className="hover:text-white cursor-pointer">Seller Blogs</li>
            </ul>
          </div>

          {/* Column 4 - App & Socials */}
          <div>
            <h3 className="text-white font-semibold text-base border-b border-gray-700 pb-2 mb-4">
              Download Mobile App
            </h3>
            <div className="space-y-4 mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-36"
              />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter].map((Icon, i) => (
                <Icon
                  key={i}
                  className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                  size={18}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Go to Top Button */}
        <div className="flex justify-end mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-6 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            ↑ Go to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSeller;
