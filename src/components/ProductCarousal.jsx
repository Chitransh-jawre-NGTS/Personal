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

  // Simulate API call
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
            },
            {
              id: 2,
              image: 'https://picsum.photos/300/300?random=1',
              title: 'NY Bae The Big Apple Of My Eyes Kohl Kajal',
              price: 97,
              originalPrice: 129,
              discount: '25% off',
            },
            {
              id: 3,
              image: 'https://picsum.photos/300/300?random=1',
              title: 'NY Bae 3 IN 1 Serum Foundation - Warm Cashew',
              price: 273,
              originalPrice: 329,
              discount: '17% off',
            },
            {
              id: 4,
              image: 'https://picsum.photos/300/300?random=1',
              title: 'NY Bae Dewy Drops Foundation - White Coffee',
              price: 189,
              originalPrice: 239,
              discount: '21% off',
            },
            {
              id: 5,
              image: 'https://picsum.photos/300/300?random=1',
              title: 'NY Bae Truly Matte Liquid Eyeliner - Bold Black',
              price: 174,
              originalPrice: 249,
              discount: '30% off',
            },
          ]);
        }, 500)
      );
      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-[85%] mx-auto mt-6 px-4 bg-white py-6 relative">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-52 object-cover" />
              <div className="py-4">
                <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-black">₹{product.price}</span>{' '}
                  <span className="line-through text-gray-400">₹{product.originalPrice}</span>{' '}
                  <span className="text-green-600">{product.discount}</span>
                </div>
                  {/* Display Total Ratings and User Ratings */}
              <div className="mt-4 text-sm text-gray-700">
              <span className="font-semibold bg-green-400 text-white rounded-full px-4 py-2">{product.totalRatings}</span>

                <span className="text-gray-500">({product.usersRated} Reviews)</span>
              </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Left and Right Buttons */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute top-1/2 left-5 bg-white transform -translate-y-1/2 p-2 border rounded-full hover:bg-gray-200"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute top-1/2 right-5  bg-white transform -translate-y-1/2 p-2 border rounded-full hover:bg-gray-200"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
