import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import SmallNavbar from "../../components/SmallNavbar";
import AmazonStyleNavbar from "../../components/Navbar";

export default function SearchResults() {
  const location = useLocation();

  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState("popular");

  // read ?q= from the URL
  const urlKeyword = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return (params.get("q") || "").trim().toLowerCase();
  }, [location.search]);

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
          bgColor: bgColors[Math.floor(Math.random() * bgColors.length)], // random bg color
        }));
        setProductsData(productsWithRatings);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => setLoading(false));
  }, []);

if (loading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    </div>
  );
}


  // filter
  let filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch =
      !urlKeyword ||
      product.name.toLowerCase().includes(urlKeyword) ||
      product.category.toLowerCase().includes(urlKeyword);

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    const matchesRating = product.rating >= minRating;

    return matchesCategory && matchesSearch && matchesPrice && matchesRating;
  });

  // basic sorting (left dropdown)
  if (sortBy === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "ratingHighLow") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // top-right sort (popular / lowToHigh / highToLow)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "popular") return b.rating - a.rating;
    return 0;
  });

  return (
    <>
    <AmazonStyleNavbar showMobileBottom={false} showMobileTop={false} />
      <SmallNavbar />
      <div className="flex gap-6 lg:mt-32 p-4 flex-col lg:flex-row">
        {/* Sidebar Filters (Visible only on lg and above) */}
        <div className="hidden lg:block w-[20%] bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-4">Filters</h3>

          {/* Category Filter */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Category</h4>
            {[
              "All",
              "men's clothing",
              "women's clothing",
              "jewelery",
              "electronics",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-3 py-2 rounded mb-2 ${
                  selectedCategory === cat
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
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

          {/* Sort Options (left) */}
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

        {/* Mobile Filters + Products */}
        <div className="w-full px-2">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-3">
            <ol className="flex space-x-2">
              <li className="hover:underline cursor-pointer">Home</li>
              <li>{">"}</li>
              <li className="hover:underline cursor-pointer">Products</li>
              {urlKeyword && (
                <>
                  <li>{">"}</li>
                  <li className="text-gray-800 font-medium">
                    Search Results
                  </li>
                </>
              )}
            </ol>
          </nav>

          {/* Mobile Filters + Sort (at top) */}
          <div className="lg:hidden flex flex-wrap gap-2 mb-4">
            <select
              className="border rounded px-3 py-1 text-gray-700 flex-1"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <select
              className="border rounded px-3 py-1 text-gray-700 flex-1"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="popular">Popular</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Header showing result count */}
          <div className="mb-4">
            {urlKeyword ? (
              <p className="text-gray-700">
                Showing results for{" "}
                <span className="font-semibold">"{urlKeyword}"</span> –{" "}
                {filteredProducts.length} products found
              </p>
            ) : (
              <p className="text-gray-700">
                {filteredProducts.length} products available
              </p>
            )}
          </div>

          {/* Products Grid (2 per row on mobile, 4 on lg) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <Link
                  to={`/productdeatilspage?id=${product.id}`}
                  key={product.id}
                >
                  
                  <div className="bg-white lg:p-3 hover:shadow-xl transition">
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
                    <button className="px-2 py-2 w-full rounded m-2 text-center border border-blue-400 text-blue-400 hover:bg-yellow-500">Add to cart</button>
                  </div>
                </Link>
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
                  We couldn’t find any products matching your search.
                </p>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
