import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    id: 1,
    title: "Bridal Wear",
    subtitle: "Lehenga • Sherwani • Couture",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200",
    badge: "Trending",
  },
  {
    id: 2,
    title: "Ethnic Wear",
    subtitle: "Saree • Kurta • Indo-Western",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200",
    badge: "Festive",
  },
  {
    id: 3,
    title: "Western Wear",
    subtitle: "Dresses • Denim • Tops",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
    badge: "New",
  },
  {
    id: 4,
    title: "Streetwear",
    subtitle: "Oversized • Graphics • Cargo",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200",
    badge: "Hot",
  },
  {
    id: 5,
    title: "Footwear",
    subtitle: "Heels • Sneakers • Juttis",
    image: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1200",
    badge: "Bestseller",
  },
  {
    id: 6,
    title: "Accessories",
    subtitle: "Belts • Scarves • Shades",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1a?q=80&w=1200",
    badge: "Edit",
  },
  {
    id: 7,
    title: "Jewelry",
    subtitle: "Necklace • Earrings • Rings",
    image: "https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=1200",
    badge: "Gold",
  },
  {
    id: 8,
    title: "Handbags",
    subtitle: "Totes • Clutches • Crossbody",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200",
    badge: "Editor's Pick",
  },
  {
    id: 9,
    title: "Activewear",
    subtitle: "Yoga • Training • Athleisure",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200",
    badge: "Move",
  },
  {
    id: 10,
    title: "Kids Fashion",
    subtitle: "Party • Casual • Ethnic",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",
    badge: "Cute",
  },
  {
    id: 11,
    title: "Luxury",
    subtitle: "Designer • Premium • Leather",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb3?q=80&w=1200",
    badge: "VIP",
  },
  {
    id: 12,
    title: "Sustainable",
    subtitle: "Organic • Handloom • Upcycled",
    image: "https://images.unsplash.com/photo-1618354691267-e201b84c3d2c?q=80&w=1200",
    badge: "Eco",
  },
];

export default function FashionCategoryCarousel({ onSelect }) {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // Autoplay
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const id = setInterval(() => {
      if (isHovering) return;
      el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(id);
  }, [isHovering]);

  // Track active index
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const card = el.querySelector("[data-card]");
      if (!card) return;
      const cardWidth =
        card.clientWidth + parseFloat(getComputedStyle(card).marginRight);
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIdx(Math.min(Math.max(idx, 0), CATEGORIES.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByAmount = (dir = 1) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const dots = useMemo(() => new Array(CATEGORIES.length).fill(0), []);

  return (
    <div className="relative w-full my-10 max-w-340 mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Explore Fashion
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
          <Star className="w-4 h-4" /> Handpicked categories
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Scroll container */}
        <div
          ref={containerRef}
          className="group flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 py-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style>{`
            /* hide scrollbar */
            .group::-webkit-scrollbar{ display:none; }
          `}</style>

          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              data-card
              onClick={() => onSelect?.(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="
                relative shrink-0
                w-[90%] sm:w-[70%] md:w-[46%] lg:w-[30%] xl:w-[24%]
                aspect-[4/5]
                snap-center
                rounded-2xl overflow-hidden shadow-sm
                focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500
              "
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Badge */}
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/40 bg-yellow-50/80 text-yellow-700 px-2 py-1 text-[11px] font-semibold backdrop-blur-lg">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  {cat.badge}
                </span>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 w-full p-4">
                <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow">
                  {cat.title}
                </h3>
                <p className="text-white/85 text-xs sm:text-sm line-clamp-1">
                  {cat.subtitle}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-gray-900 shadow-sm">
                  Shop now
                  <span className="i-ltr inline-block">→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-1">
          <button
            aria-label="Previous"
            onClick={() => scrollByAmount(-1)}
            className="rounded-full bg-yellow-100 hover:bg-yellow-300 text-black p-2 shadow-md backdrop-blur transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-1">
          <button
            aria-label="Next"
            onClick={() => scrollByAmount(1)}
            className="rounded-full bg-yellow-100 hover:bg-yellow-300 text-black p-2 shadow-md backdrop-blur transition"
          >
            <ChevronRight className="w-5 h-5 bg-yellow-100 hover:bg-yellow-300" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {dots.map((_, i) => (
          <span
            key={i}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === activeIdx ? "w-6 bg-yellow-500" : "w-2 bg-gray-300")
            }
          />
        ))}
      </div>
    </div>
  );
}
