import React, { useRef, useEffect, useState } from "react";
import SmallNavbar from "../../components/SmallNavbar";

// Categories
const categories = [
  "Men's Wear",
  "Women's Wear",
  "Kurtas",
  "Sarees",
  "Footwear",
  "Accessories",
  "Bags",
];

// Example products
const productsData = {
  "Men's Wear": [
    { id: 1, name: "Men's T-Shirt", price: "499", image: "https://picsum.photos/200?random=1" },
    { id: 2, name: "Men's Jeans", price: "999", image: "https://picsum.photos/200?random=2" },
  ],
  "Women's Wear": [
    { id: 3, name: "Women's Dress", price: "799", image: "https://picsum.photos/200?random=3" },
    { id: 4, name: "Women's Top", price: "599", image: "https://picsum.photos/200?random=4" },
  ],
  Kurtas: [
    { id: 5, name: "Cotton Kurta", price: "699", image: "https://picsum.photos/200?random=5" },
  ],
  Sarees: [
    { id: 6, name: "Silk Saree", price: "1299", image: "https://picsum.photos/200?random=6" },
  ],
  Footwear: [
    { id: 7, name: "Sneakers", price: "1499", image: "https://picsum.photos/200?random=7" },
  ],
  Accessories: [
    { id: 8, name: "Watches", price: "1999", image: "https://picsum.photos/200?random=8" },
  ],
  Bags: [
    { id: 9, name: "Handbags", price: "999", image: "https://picsum.photos/200?random=9" },
  ],
};

const FashionCategoryPage = () => {
  const categoryRefs = useRef({});
  const rightSideRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Scroll to category
  const scrollToCategory = (cat) => {
    categoryRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Observe which category is in view
  useEffect(() => {
    const options = { root: rightSideRef.current, threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.dataset.category);
        }
      });
    }, options);

    categories.forEach((cat) => {
      if (categoryRefs.current[cat]) {
        observer.observe(categoryRefs.current[cat]);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SmallNavbar showSearch={false} />
      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <div className="fixed top-10 left-0 h-full w-33 bg-white shadow-md border-r border-gray-200 p-4 flex flex-col gap-4 ">
          {/* Top Image */}
        
          <h2 className="font-bold text-lg text-gray-700 mb-2">Categories</h2>
          <ul className="flex flex-col gap-2 pb-25 overflow-y-auto">
            {categories.map((cat) => (
              
              <li
                key={cat}
                onClick={() => scrollToCategory(cat)}
                className={`cursor-pointer px-3 py-2 rounded-xl font-medium transition-all duration-200
                  ${
                    activeCategory === cat
                      ? "border-l-6 border-yellow-700 text-gray-800 shadow-lg"
                      : "border-l-6 border-yellow-200 text-gray-800"
                  }`}
              >
                  <img src="https://picsum.photos/200?random=9" alt="Fashion" className="w-20 h-20 object-cover rounded-lg mb-4"/>
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div
          ref={rightSideRef}
          className="ml-33 flex-1 p-4 pb-50 overflow-y-auto"
        >
          {categories.map((cat) => (
            <div
              key={cat}
              ref={(el) => (categoryRefs.current[cat] = el)}
              data-category={cat}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2">{cat}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {productsData[cat]?.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-2xl hover:shadow-xl transition flex flex-col gap-3 bg-white p-2"
                  >
                    <div className="relative w-full h-36 rounded-2xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm truncate">{product.name}</h3>
                    <p className="text-sm font-medium text-gray-600">₹{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FashionCategoryPage;
