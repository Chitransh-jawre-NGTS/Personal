import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Heart, Share2 } from "lucide-react"; // ✅ Icons

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]); // ✅ wishlist state

  // filters state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const bgColors = [
          "bg-red-50",
          "bg-blue-50",
          "bg-green-50",
          "bg-yellow-50",
          "bg-purple-50",
          "bg-pink-50",
          "bg-indigo-50",
          "bg-orange-50",
        ];

        const productsWithRatings = res.data.map((p) => ({
          id: p.id,
          name: p.title,
          category: p.category,
          price: p.price,
          rating: p.rating?.rate ?? Math.round(Math.random() * 5),
          image: p.image,
          bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
        }));
        setProductsData(productsWithRatings);
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // ✅ share product
  const handleShare = (product) => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: `Check out this product: ${product.name}`,
          url: window.location.origin + `/productdeatilspage?id=${product.id}`,
        })
        .catch((err) => console.log("Share failed:", err));
    } else {
      navigator.clipboard.writeText(
        window.location.origin + `/productdeatilspage?id=${product.id}`
      );
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-yellow-400">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-pulse">
          Loading Products...
        </h1>
      </div>
    );
  }

  // filtering logic
  let filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    const matchesRating = product.rating >= minRating;
    return matchesCategory && matchesPrice && matchesRating;
  });

  // sorting logic
  if (sortBy === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "ratingHighLow") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
     <h1 className=" max-text-4xl font-bold py-5 px-8">Here our some best products</h1>
      <div className="flex gap-6  p-4 flex-col lg:flex-row">
        
        {/* Sidebar */}
        <div className="hidden lg:block w-[20%] bg-white shadow rounded-lg p-4">
          
          <h3 className="font-bold text-lg mb-4">Filters</h3>

          {/* Category Filter */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Category</h4>
            {["All", "men's clothing", "women's clothing", "jewelery", "electronics"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-3 py-2 rounded mb-2 ${selectedCategory === cat
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Price Range ($)</h4>
            <div className="flex gap-2 mb-2">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-1/2 border rounded px-2 py-1"
                placeholder="Min"
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-1/2 border rounded px-2 py-1"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Minimum Rating</h4>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full border rounded px-2 py-1"
            >
              <option value={0}>All Ratings</option>
              <option value={1}>⭐ 1 & up</option>
              <option value={2}>⭐ 2 & up</option>
              <option value={3}>⭐ 3 & up</option>
              <option value={4}>⭐ 4 & up</option>
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <h4 className="font-semibold mb-2">Sort By</h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">Default</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="ratingHighLow">Rating: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full px-2">
         
          <h2 className="text-lg font-semibold mb-4">
            {filteredProducts.length} Products Found
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white lg:p-3 hover:shadow-xl transition relative rounded-xl"
                >
                  {/* Wishlist + Share Icons */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {/* Share */}
                    <button
                      onClick={() => handleShare(product)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-blue-100"
                    >
                      <Share2 size={20} className="text-gray-600" />
                    </button>

                    {/* Heart */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-red-100"
                    >
                      <Heart
                        size={20}
                        className={
                          wishlist.includes(product.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-500"
                        }
                      />
                    </button>
                  </div>


                  <Link to={`/productdeatilspage?id=${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-40 rounded-2xl ${product.bgColor} sm:h-50 object-contain mb-2`}
                    />
                    <h4 className="font-semibold text-sm sm:text-lg line-clamp-2">
                      {product.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {product.category}
                    </p>
                    <p className="text-yellow-600 font-bold text-sm sm:text-base">
                      ${product.price}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      ⭐ {product.rating} / 5
                    </p>
                  </Link>

                  <button className="px-2 py-2 w-full rounded m-2 text-center border border-blue-400 text-blue-400 hover:bg-yellow-500">
                    Add to cart
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center col-span-2">
                <img
                  src="https://illustrations.popsy.co/gray/cart.svg"
                  alt="No products"
                  className="w-32 h-32 mb-6"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  No Products Found
                </h2>
                <p className="text-gray-500 mb-6">
                  Try adjusting your filters to see more products.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
