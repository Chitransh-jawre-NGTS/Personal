import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            {
              id: 1,
              image: 'https://picsum.photos/300/300?random=1',
              title: 'NY Bae PRO Strobe Cream - Pink Topaz (12 gm)',
              price: 207,
              originalPrice: 269,
              discount: '23% off',
              totalRatings: 4.3,
              usersRated: 320,
            },
            {
              id: 2,
              image: 'https://picsum.photos/300/300?random=2',
              title: 'NY Bae The Big Apple Of My Eyes Kohl Kajal',
              price: 97,
              originalPrice: 129,
              discount: '25% off',
              totalRatings: 4.1,
              usersRated: 145,
            },
            {
              id: 3,
              image: 'https://picsum.photos/300/300?random=3',
              title: 'NY Bae 3 IN 1 Serum Foundation - Warm Cashew',
              price: 273,
              originalPrice: 329,
              discount: '17% off',
              totalRatings: 4.5,
              usersRated: 210,
            },
            {
              id: 4,
              image: 'https://picsum.photos/300/300?random=4',
              title: 'NY Bae Dewy Drops Foundation - White Coffee',
              price: 189,
              originalPrice: 239,
              discount: '21% off',
              totalRatings: 4.0,
              usersRated: 198,
            },
            {
              id: 5,
              image: 'https://picsum.photos/300/300?random=5',
              title: 'NY Bae Truly Matte Liquid Eyeliner - Bold Black',
              price: 174,
              originalPrice: 249,
              discount: '30% off',
              totalRatings: 4.6,
              usersRated: 430,
            },
          ]);
        }, 500)
      );
      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <div className="lg:w-[85%] w-full mx-auto mt-6 px-4 bg-white py-8 relative rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">🛒 Items in Your Cart</h2>

      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 h-full">
              <img src={product.image} alt={product.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{product.title}</h3>
                <div className="mt-2 text-sm space-x-2">
                  <span className="font-semibold text-black">₹{product.price}</span>
                  <span className="line-through text-gray-400">₹{product.originalPrice}</span>
                  <span className="text-green-600">{product.discount}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    ★ {product.totalRatings}
                  </span>
                  <span className="text-gray-500">({product.usersRated} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100 transition"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full hover:bg-gray-100 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
