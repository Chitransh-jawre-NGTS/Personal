import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, Truck, ShieldCheck, RotateCcw, MapPin, Store } from "lucide-react";
import AmazonStyleNavbar from "../components/Navbar";
import SmallNavbar from "../components/SmallNavbar";

const RentalProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [duration, setDuration] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Mock data (can be replaced with API)
    const products = [
      {
        title: "Designer Lehenga",
        description:
          "Premium bridal lehenga crafted with intricate embroidery. Perfect for weddings and festive occasions.",
        price: 1800,
        category: "Fashion",
        rating: 4.6,
        images: [
          "https://picsum.photos/600/400?random=5",
          "https://picsum.photos/600/400?random=51",
          "https://picsum.photos/600/400?random=52",
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Maroon", "Golden"],
        fabric: "Silk & Net",
        minRentalDays: 3,
        rentDuration: ["3 Days", "7 Days", "15 Days", "1 Month"],
        store: {
          name: "Royal Ethnic Rentals",
          address: "MG Road, Indore, Madhya Pradesh, India",
        },
      },
      {
        title: "Men's Tuxedo Suit",
        description:
          "Stylish slim-fit tuxedo, perfect for parties, weddings, and corporate events.",
        price: 1200,
        category: "Fashion",
        rating: 4.7,
        images: [
          "https://picsum.photos/600/400?random=6",
          "https://picsum.photos/600/400?random=61",
          "https://picsum.photos/600/400?random=62",
        ],
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Navy Blue"],
        fabric: "Polyester Blend",
        minRentalDays: 2,
        rentDuration: ["2 Days", "7 Days", "15 Days", "1 Month"],
        store: {
          name: "Elite Men’s Wear Rentals",
          address: "South Tukoganj, Indore, Madhya Pradesh, India",
        },
      },
    ];

    const randomProduct = products[Math.floor(Math.random() * products.length)];
    setProduct({ id, ...randomProduct });
    setSelectedImage(randomProduct.images[0]);
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin h-12 w-12 border-4 border-yellow-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* <AmazonStyleNavbar showMobileBottom={false} /> */}
      <SmallNavbar showBottomNav={false} showCart={false} showSearch={false} logoText="rent"/>

      <main className="max-w-fulll bg-white mx-auto px-4 lg:mt-28 py-8 grid lg:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div className="flex flex-col h-1/2 lg:flex-row gap-4">
          {/* Thumbnails - Left on large screens, Below on small */}
          <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                  selectedImage === img ? "border-yellow-500" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="bg-white rounded-2xl shadow flex-1 flex justify-center order-1 lg:order-2">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full max-w-full  rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="flex items-center mt-2 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600">{product.rating} / 5</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <p>
              <span className="font-semibold">Sizes:</span> {product.sizes.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Colors:</span> {product.colors.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Fabric:</span> {product.fabric}
            </p>
            <p className="text-red-600 font-medium">
              Minimum {product.minRentalDays} days rental
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <p className="text-lg font-semibold">
              Rent Price:{" "}
              <span className="text-yellow-600 font-bold">₹{product.price} /-</span>
            </p>
            <select
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">-- Select Duration --</option>
              {product.rentDuration.map((d, i) => (
                <option key={i}>{d}</option>
              ))}
            </select>
            <button
              disabled={!duration}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                duration
                  ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Rent Now
            </button>
          </div>

          {/* Store Info */}
          <div className="bg-white p-4 rounded-xl shadow space-y-2">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Store className="text-yellow-500" /> {product.store.name}
            </h3>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin className="text-gray-500 h-4 w-4" /> {product.store.address}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
              <Truck className="text-blue-600 h-6 w-6 mb-1" />
              <span className="text-sm">Fast Delivery</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
              <ShieldCheck className="text-green-600 h-6 w-6 mb-1" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
              <RotateCcw className="text-red-600 h-6 w-6 mb-1" />
              <span className="text-sm">Easy Returns</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
              <ShieldCheck className="text-yellow-500 h-6 w-6 mb-1" />
              <span className="text-sm">Cancel at Delivery</span>
            </div>
          </div>
        </div>
      </main>

      {/* Policy & FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h2 className="text-xl font-bold">Rental Policy</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Refundable security deposit required</li>
          <li>Late return may attract additional charges</li>
          <li>Free maintenance & dry cleaning included</li>
          <li>Easy doorstep return available</li>
          <li>You may cancel your order at the time of delivery</li>
        </ul>

        <h2 className="text-xl font-bold">FAQ</h2>
        <details className="bg-white p-4 rounded-xl shadow">
          <summary className="font-semibold cursor-pointer">
            Do I need to wash the dress before returning?
          </summary>
          <p className="text-gray-600 mt-2">
            No, professional dry cleaning is included in your rental fee.
          </p>
        </details>
        <details className="bg-white p-4 rounded-xl shadow">
          <summary className="font-semibold cursor-pointer">
            What if the dress doesn’t fit me?
          </summary>
          <p className="text-gray-600 mt-2">
            We provide multiple sizes and a fitting option before rental.
          </p>
        </details>
      </section>

      {/* Mobile Rent Button */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white p-4 border-t shadow">
        {/* to={duration ? `/rental/checkout/${product.id}?duration=${duration}` : '#'} */}
    <Link  to={"/booknow"}>
        <button
          disabled={!duration}
          className={`w-full py-3 rounded-xl font-semibold ${
            duration
              ? "bg-yellow-500 hover:bg-yellow-600 text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Rent Now
        </button></Link>
      </div>
    </div>
  );
};

export default RentalProductDetail;
