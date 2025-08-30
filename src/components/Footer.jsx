import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1f2734] hidden lg:flex mb-14 lg:mb-0  mx-auto text-white px-6  py-10 ">

      <div className="max-w-full mx-auto grid md:grid-cols-6 gap-10">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              WishCart
            </span>
          </Link>

          <p className="text-gray-300 text-sm pt-5 leading-6 mb-6">
            The WishCart is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=YOUR.ANDROID.APP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="w-40"
              />
            </a>

            <a
              href="https://apps.apple.com/app/idYOUR_IOS_APP_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="w-40"
              />
            </a>
          </div>

        </div>

        {/* Category */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Category</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Fashion</li>
            <li>Cosmetics</li>
            <li>Bags & Purse</li>
            <li>Shoes</li>
            <li>Belts</li>
            <li>Perfumes</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms of use</li>
            <li>Secure payment</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Account</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Return Policy</li>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              <span>
                Indore
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-lg" /> +00 9876543210
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" /> example@email.com
            </li>
            <li className="flex gap-3 mt-2">
              <div className="bg-gray-600 p-2 rounded-full">
                <FaFacebookF />
              </div>
              <div className="bg-gray-600 p-2 rounded-full">
                <FaTwitter />
              </div>
              <div className="bg-gray-600 p-2 rounded-full">
                <FaLinkedinIn />
              </div>
              <div className="bg-gray-600 p-2 rounded-full">
                <FaInstagram />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          Copyright © 2025 <span className="text-yellow-400 font-semibold">The WishCart</span> all rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Skrill_Logo.svg" alt="Skrill" className="h-6" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Maestro_2016.svg" alt="Maestro" className="h-6" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Electron.png" alt="Visa Electron" className="h-6" /> */}
        </div>

      </div>
    </footer>
  );
}