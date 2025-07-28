import { Heart } from "lucide-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewArrivals({ heading = "", bgColor = "bg-white" }) {
  const [liked, setLiked] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch products from your API
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");

      // 🔍 DEBUG LOG
      console.log("✅ Response from backend:", res.data);

      if (res.data && res.data.products) {
        setProducts(res.data.products);
      } else {
        console.warn("⚠️ Unexpected response format", res.data);
      }
    } catch (err) {
      console.error("❌ Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleLike = (index) => {
    setLiked((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`mx-auto p-4 rounded-xl bg-tran my-10 container ${bgColor}`}>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        {heading.split(" ").map((word, idx) =>
          idx === 1 ? (
            <span key={idx} className="text-blue-500">
              {word}{" "}
            </span>
          ) : (
            word + " "
          )
        )}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
        {products.map((product, idx) => {
          const isLiked = liked.includes(idx);

          // 🔍 DEBUG EACH PRODUCT
          console.log("🔍 Rendering product:", product);

          return (
           <Link  key={product.id} to={`/product`} onClick={() => dispatch(selectProduct(product))}> <div
              key={product.id}
              className="rounded-2xl bg-white backdrop-blur-md shadow-md hover:shadow-xl p-5 transition-all duration-300 transform hover:-translate-y-1 hover:ring-2 hover:ring-blue-100"
            >
              <div className="relative rounded-xl overflow-hidden  p-4">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="mx-auto h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="text-xs uppercase text-gray-500 mt-3 flex justify-between">
                <span>{product.brand || "N/A"}</span>
                <span>{product.stock} left</span>
              </div>

              <h3 className="text-sm font-semibold mt-2 text-gray-800 line-clamp-2 min-h-[42px]">
                {product.title}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-gray-900 text-base">
                  ₹{product.price}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-blue-500">
                  {product.category || "No category"}
                </span>
                <button
                  onClick={() => toggleLike(idx)}
                  className={`p-1 rounded-full transition-all duration-200 transform active:scale-125 ${
                    isLiked
                      ? "text-red-500 ring-2 ring-red-300"
                      : "text-gray-400 hover:text-red-400"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div></Link>
          );
        })}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-400 mt-6">No products found.</p>
      )}
    </div>
  );
}
