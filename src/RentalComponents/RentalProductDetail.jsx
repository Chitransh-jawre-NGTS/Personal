import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Truck, Star, Home, Smartphone, Headphones, Plug, Zap, Layers } from "lucide-react";
import RentalCartSection from "./RentalCartSection";

const RentalProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/nearby-rentals/${id}`);
        setProduct(data);
        setSelectedImage(data.images?.[0] || data.image);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl font-semibold">Loading...</div>;
  }

  if (!product) {
    return <div className="flex items-center justify-center h-screen text-xl font-semibold">No product found.</div>;
  }

  return (
    <div className="max-w-[100vw] mt-[110px]">
      {/* Breadcrumb */}
     <div className="border-b border-gray-300 py-4 px-4 bg-white/70 backdrop-blur-md">
<nav className="text-sm text-gray-500" aria-label="Breadcrumb">
  <ol className="list-reset flex flex-wrap items-center">
    <li>
      <a href="/" className="hover:underline text-gray-500">Home</a>
    </li>
    <span className="mx-2 text-gray-400">/</span>
    <li>
      <a href="/rental" className="hover:underline text-gray-500">Rentals</a>
    </li>
    {product.category && (
      <>
        <span className="mx-2 text-gray-400">/</span>
        <li>
          <a className="hover:underline text-gray-500">{product.category}</a>
        </li>
      </>
    )}
    <span className="mx-2 text-gray-400">/</span>
    <li className="text-gray-700 font-medium">
      {product.name} / {product._id}
    </li>
  </ol>
</nav>

</div>


      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 p-6 sticky top-20 h-fit">
          <ul className="space-y-3 text-gray-700 text-sm font-medium">
            {[
              { icon: <Home className="w-4 h-4" />, label: "All Products" },
              { icon: <Smartphone className="w-4 h-4" />, label: "Smart Devices" },
              { icon: <Headphones className="w-4 h-4" />, label: "Audio" },
              { icon: <Plug className="w-4 h-4" />, label: "Accessories" },
              { icon: <Zap className="w-4 h-4" />, label: "Chargers" },
              { icon: <Layers className="w-4 h-4" />, label: "Home Gadgets" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center border border-blue-400 bg-blue-50 gap-3 hover:bg-blue-100 hover:text-blue-600 transition p-2 rounded-lg cursor-pointer"
              >
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Details */}
        <div className="flex-1 px-6 lg:px-10 py-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Image Gallery */}
          <div>
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-96 object-contain rounded-xl shadow mb-4 transition-transform duration-300 hover:scale-105"
            />
            <div className="flex gap-2">
              {(product.images || [product.image]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.name}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 object-cover cursor-pointer border rounded-lg transition 
                    ${selectedImage === img ? "border-blue-500" : "border-gray-200"}`}
                />
              ))}
            </div>
            <div className="flex max-w-full gap-4 mt-5 flex-col sm:flex-row">
              <button className="w-full sm:w-1/2 px-4 py-2 border border-green-400 hover:bg-green-400 text-gray-800 text-sm font-medium rounded-full transition-all">
                Add to Cart
              </button>
              <button className="w-full sm:w-1/2 px-4 py-2 border border-blue-400 hover:bg-blue-400 text-gray-700 text-sm font-medium rounded-full transition-all">
                Book now
              </button>
            </div>
          </div>

          {/* Right - Details */}
          <div>
            <h1 className="text-2xl mt-2 font-bold text-gray-900">{product.name}</h1>
            <h1 className="text-2xl mt-4 font-bold text-gray-700">{product.description}</h1>
            <div className="flex items-center gap-3 my-2">
              <span className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                {product.rating || 4.5} <Star className="w-4 h-4 ml-1" />
              </span>
              <p className="text-sm text-gray-500">
                {product.reviews || 20} Ratings & {product.ratings || 10} Reviews
              </p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <span className="text-3xl font-bold">₹{product.price}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-400 text-lg">₹{product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="text-green-600 font-bold">{product.discount}% off</span>
              )}
            </div>

            {product.offers && (
              <div className="mt-5">
                <h3 className="font-bold text-lg">Available offers</h3>
                <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                  {product.offers.map((offer, index) => (
                    <li key={index}>{offer}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <h3 className="font-bold">Delivery</h3>
              <div className="flex items-center gap-3 mt-2">
                <input type="text" placeholder="Enter pincode" className="border p-2 rounded w-40" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Check</button>
              </div>
              {product.delivery && (
                <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                  <Truck className="w-4 h-4" /> {product.delivery}
                </p>
              )}
            </div>

            {product.highlights && (
              <div className="mt-6">
                <h3 className="font-bold">Highlights</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                  {product.highlights.map((h, index) => (
                    <li key={index}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.seller && (
              <div className="mt-6">
                <h3 className="font-bold">Seller</h3>
                <p className="text-blue-500">{product.seller}</p>
                {product.returnPolicy && (
                  <p className="text-gray-500 text-sm">{product.returnPolicy}</p>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
          {/* <RentalCartSection />  */}
    </div>
  );
};

export default RentalProductDetail;
