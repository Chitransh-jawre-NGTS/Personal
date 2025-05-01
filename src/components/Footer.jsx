import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white mb-10  text-gray-600 py-10 px-4 md:px-10">
      <div className="max-w-full d-flex justify-content-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-2">Purplle</h3>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Investor Relation</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">Privacy Info</h3>
          <ul className="space-y-1">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Return & Cancellation Policy</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <ul className="space-y-1">
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
