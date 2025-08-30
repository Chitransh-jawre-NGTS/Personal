import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dummyRecentProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Recently Viewed ${i + 1}`,
  image: `https://picsum.photos/200?random=${i + 20}`, // different images
}));

const RecentViewed = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -260 : 260,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-5 max-w-340 my-5 mx-auto bg-blue-50 shadow-md rounded-xl border border-blue-200">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-700">
          Recently Viewed Products
        </h2>
        {dummyRecentProducts.length > 5 && (
          <button className="text-blue-600 font-medium text-sm hover:underline">
            View More
          </button>
        )}
      </div>

      {/* Slider Section */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full shadow-md hover:bg-blue-500 z-10"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable Products */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-10 no-scrollbar"
        >
          {dummyRecentProducts.map((product) => (
            <div
              key={product.id}
              className="w-[220px] flex-shrink-0 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-blue-200 p-3 text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <p className="text-sm mt-2 font-medium text-gray-700">
                {product.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-400 text-white p-2 rounded-full shadow-md hover:bg-blue-500 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RecentViewed;
