// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Heart, Share2 } from "lucide-react";

// export default function ProductsPage() {
//   const [productsData, setProductsData] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 15;

//   const [wishlist, setWishlist] = useState([]);

//   // ✅ filters state
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [minRating, setMinRating] = useState(0);
//   const [sortBy, setSortBy] = useState("");

//   // ✅ fetch products
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         const bgColors = [
//           "bg-red-50",
//           "bg-blue-50",
//           "bg-green-50",
//           "bg-yellow-50",
//           "bg-purple-50",
//           "bg-pink-50",
//           "bg-indigo-50",
//           "bg-orange-50",
//         ];

//         const productsWithRatings = res.data.map((p) => ({
//           id: p.id,
//           name: p.title,
//           category: p.category,
//           price: p.price,
//           rating: p.rating?.rate ?? Math.round(Math.random() * 5),
//           image: p.image,
//           bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
//         }));

//         setProductsData(productsWithRatings);
//       })
//       .catch((err) => console.error("Error fetching products:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   // ✅ filtering & sorting logic
//   useEffect(() => {
//     let temp = [...productsData];

//     const matches = (p) => {
//       const matchesCategory =
//         selectedCategory === "All" || p.category === selectedCategory;
//       const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
//       const matchesRating = p.rating >= minRating;
//       return matchesCategory && matchesPrice && matchesRating;
//     };

//     temp = temp.filter(matches);

//     if (sortBy === "priceLowHigh") temp.sort((a, b) => a.price - b.price);
//     if (sortBy === "priceHighLow") temp.sort((a, b) => b.price - a.price);
//     if (sortBy === "ratingHighLow") temp.sort((a, b) => b.rating - a.rating);

//     setFilteredProducts(temp);
//     setVisibleProducts(temp.slice(0, page * itemsPerPage)); // reset visible
//   }, [productsData, selectedCategory, minPrice, maxPrice, minRating, sortBy, page]);

//   // ✅ infinite scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 100 >=
//         document.documentElement.scrollHeight
//       ) {
//         loadMore();
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [filteredProducts, visibleProducts]);

//   const loadMore = () => {
//     if (loadingMore) return;
//     if (visibleProducts.length >= filteredProducts.length) return;

//     setLoadingMore(true);
//     setTimeout(() => {
//       const nextPage = page + 1;
//       setPage(nextPage);
//       setVisibleProducts(filteredProducts.slice(0, nextPage * itemsPerPage));
//       setLoadingMore(false);
//     }, 800);
//   };

//   // ✅ toggle wishlist
//   const addWishlistItem= (productId) => {
//     setWishlist((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   // ✅ share product
//   const handleShare = (product) => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: product.name,
//           text: `Check out this product: ${product.name}`,
//           url: window.location.origin + `/productdeatilspage?id=${product.id}`,
//         })
//         .catch((err) => console.log("Share failed:", err));
//     } else {
//       navigator.clipboard.writeText(
//         window.location.origin + `/productdeatilspage?id=${product.id}`
//       );
//       alert("Link copied to clipboard!");
//     }
//   };


//   return (
//     <>
//       <h1 className=" text-3xl max-w-350 mx-auto font-bold py-5 px-8">
//         Here are some of our best products
//       </h1>

//       <div className="flex gap-6 max-w-350 mx-auto p-4 flex-col lg:flex-row">
//         {/* ✅ Sidebar Filters */}
//         <div className="hidden lg:block w-[20%] bg-white shadow rounded-lg p-4">
//           <h3 className="font-bold text-lg mb-4">Filters</h3>

//           {/* Category */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Category</h4>
//             {["All", "men's clothing", "women's clothing", "jewelery", "electronics"].map(
//               (cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => {
//                     setPage(1); // reset pagination on filter
//                     setSelectedCategory(cat);
//                   }}
//                   className={`block w-full text-left px-3 py-2 rounded mb-2 ${
//                     selectedCategory === cat
//                       ? "bg-yellow-500 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               )
//             )}
//           </div>

//           {/* Price */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Price Range ($)</h4>
//             <div className="flex gap-2 mb-2">
//               <input
//                 type="number"
//                 value={minPrice}
//                 onChange={(e) => {
//                   setPage(1);
//                   setMinPrice(Number(e.target.value));
//                 }}
//                 className="w-1/2 border rounded px-2 py-1"
//                 placeholder="Min"
//               />
//               <input
//                 type="number"
//                 value={maxPrice}
//                 onChange={(e) => {
//                   setPage(1);
//                   setMaxPrice(Number(e.target.value));
//                 }}
//                 className="w-1/2 border rounded px-2 py-1"
//                 placeholder="Max"
//               />
//             </div>
//           </div>

//           {/* Rating */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Minimum Rating</h4>
//             <select
//               value={minRating}
//               onChange={(e) => {
//                 setPage(1);
//                 setMinRating(Number(e.target.value));
//               }}
//               className="w-full border rounded px-2 py-1"
//             >
//               <option value={0}>All Ratings</option>
//               <option value={1}>⭐ 1 & up</option>
//               <option value={2}>⭐ 2 & up</option>
//               <option value={3}>⭐ 3 & up</option>
//               <option value={4}>⭐ 4 & up</option>
//             </select>
//           </div>

//           {/* Sort */}
//           <div>
//             <h4 className="font-semibold mb-2">Sort By</h4>
//             <select
//               value={sortBy}
//               onChange={(e) => {
//                 setPage(1);
//                 setSortBy(e.target.value);
//               }}
//               className="w-full border rounded px-2 py-1"
//             >
//               <option value="">Default</option>
//               <option value="priceLowHigh">Price: Low to High</option>
//               <option value="priceHighLow">Price: High to Low</option>
//               <option value="ratingHighLow">Rating: High to Low</option>
//             </select>
//           </div>
//         </div>

//         {/* ✅ Products Grid */}
//         <div className="w-full px-2">
//           <h2 className="text-lg font-semibold mb-4">
//             {visibleProducts.length} of {filteredProducts.length} Products
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
//             {visibleProducts.length > 0 ? (
//               visibleProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white lg:p-3 hover:shadow-xl transition relative rounded-xl"
//                 >
//                   {/* Wishlist + Share Icons */}
//                   <div className="absolute top-2 right-2 flex flex-col gap-2">
//                     <button
//                       onClick={() => handleShare(product)}
//                       className="p-1 rounded-full bg-gray-100 hover:bg-blue-100"
//                     >
//                       <Share2 size={20} className="text-gray-600" />
//                     </button>
//                     <button
//                       onClick={() => toggleWishlist(product.id)}
//                       className="p-1 rounded-full bg-gray-100 hover:bg-red-100"
//                     >
//                       <Heart
//                         size={20}
//                         className={
//                           wishlist.includes(product.id)
//                             ? "text-red-500 fill-red-500"
//                             : "text-gray-500"
//                         }
//                       />
//                     </button>
//                   </div>

//                   <Link to={`/productdeatilspage?id=${product.id}`}>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className={`w-full h-40 rounded-2xl ${product.bgColor} sm:h-50 object-contain mb-2`}
//                     />
//                     <h4 className="font-semibold text-sm sm:text-lg line-clamp-2">
//                       {product.name}
//                     </h4>
//                     <p className="text-xs sm:text-sm text-gray-500">
//                       {product.category}
//                     </p>
//                     <p className="text-yellow-600 font-bold text-sm sm:text-base">
//                       ${product.price}
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-600">
//                       ⭐ {product.rating} / 5
//                     </p>
//                   </Link>

//                   <button className="px-2 py-2 w-full rounded m-2 text-center border border-blue-400 text-blue-400 hover:bg-yellow-500">
//                     Add to cart
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <div className="flex flex-col items-center justify-center py-12 text-center col-span-2">
//                 <img
//                   src="https://illustrations.popsy.co/gray/cart.svg"
//                   alt="No products"
//                   className="w-32 h-32 mb-6"
//                 />
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                   No Products Found
//                 </h2>
//                 <p className="text-gray-500 mb-6">
//                   Try adjusting your filters to see more products.
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Loader */}
//           {loadingMore && (
//             <div className="flex justify-center py-6">
//               <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


// src/pages/ProductsPage.jsx



import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";
import { fetchProducts } from "../Features/Produtcs/productSlice";
import { addToCart } from "../Features/carts/cartSlice";
import { addWishlistItem} from "../Features/Wishlist/wishlistSlice";

export default function ProductsPage() {
  const dispatch = useDispatch();

  // Redux state
  const { items: productsData = [], loading, error } = useSelector(
    (state) => state.products
  );
  const { items: wishlistItems } = useSelector((state) => state.wishlist);

  // Local state
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("");

  // Fetch products on mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filtering & sorting
  useEffect(() => {
    if (!Array.isArray(productsData) || productsData.length === 0) {
      setFilteredProducts([]);
      setVisibleProducts([]);
      return;
    }

    let temp = [...productsData];

    const matches = (p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
      const matchesRating = (p.rating || 0) >= minRating;
      return matchesCategory && matchesPrice && matchesRating;
    };

    temp = temp.filter(matches);

    if (sortBy === "priceLowHigh") temp.sort((a, b) => a.price - b.price);
    if (sortBy === "priceHighLow") temp.sort((a, b) => b.price - a.price);
    if (sortBy === "ratingHighLow")
      temp.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    setFilteredProducts(temp);
    setVisibleProducts(temp.slice(0, page * itemsPerPage));
  }, [productsData, selectedCategory, minPrice, maxPrice, minRating, sortBy, page]);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredProducts, visibleProducts]);

  const loadMore = () => {
    if (loadingMore) return;
    if (visibleProducts.length >= filteredProducts.length) return;

    setLoadingMore(true);
    setTimeout(() => {
      const nextPage = page + 1;
      setPage(nextPage);
      setVisibleProducts(filteredProducts.slice(0, nextPage * itemsPerPage));
      setLoadingMore(false);
    }, 800);
  };

  // Add to cart
 const handleAddToCart = (productId) => {
  dispatch(addToCart({ productId, quantity: 1 })) // ✅ use the thunk and param
    .unwrap()
    .then(() => alert("Added to cart!"))
    .catch((err) => alert(err.message || "Failed to add to cart"));
};

  // Add/remove wishlist
const handleaddWishlistItem = (product) => {
  dispatch(
    addWishlistItem({ product }) // ✅ wrap in braces
  )
}

  // Share
  const handleShare = (product) => {
    const productUrl = `${window.location.origin}/productdeatilspage?id=${product.id}`;
    if (navigator.share) {
      navigator
        .share({
          title: product.title,
          text: `Check out this product: ${product.title}`,
          url: productUrl,
        })
        .catch((err) => console.log("Share failed:", err));
    } else {
      navigator.clipboard.writeText(productUrl);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold animate-pulse">Loading Products...</h1>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  return (
    <>
      <h1 className="text-3xl max-w-350 mx-auto font-bold py-5 px-8">
        Here are some of our best products
      </h1>

      <div className="flex pb-20 gap-6 max-w-350 mx-auto p-4 flex-col lg:flex-row">
        <div className="w-full px-2">
          <h2 className="text-lg font-semibold mb-4">
            {visibleProducts.length} of {filteredProducts.length} Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white lg:p-3 hover:shadow-xl transition relative rounded-xl"
                >
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button
                      onClick={() => handleShare(product)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-blue-100"
                    >
                      <Share2 size={20} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleaddWishlistItem(product.id)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-red-100"
                    >
                      <Heart
                        size={20}
                        className={
                          wishlistItems.includes(product.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-500"
                        }
                      />
                    </button>
                  </div>

                  <Link to={`/productdeatilspage?id=${product.id}`}>
                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                      className="w-full h-40 rounded-2xl object-contain mb-2"
                    />
                    <h4 className="font-semibold text-sm sm:text-lg line-clamp-2">
                      {product.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {product.category}
                    </p>
                    <p className="text-yellow-600 font-bold text-sm sm:text-base">
                      ${product.price}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      ⭐ {product.rating || 0} / 5
                    </p>
                  </Link>

                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="px-2 py-2 w-full rounded m-2 text-center border border-blue-400 text-blue-400 hover:bg-yellow-500"
                  >
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
              </div>
            )}
          </div>

          {loadingMore && (
            <div className="flex justify-center py-6">
              <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
