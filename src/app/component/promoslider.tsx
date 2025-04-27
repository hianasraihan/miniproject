"use client";

import { useEffect, useState } from "react";

const promoItems = [
  {
    id: "1",
    title: "Summer Sale - Up to 50% Off!",
    image: "/voucher2.jpg",
  },
  {
    id: "2",
    title: "New Movies Every Week!",
    image: "/new.jpg",
  },
  {
    id: "3",
    title: "Exclusive Offers for Members!",
    image: "/exclusive.jpg",
  },
];

const PromoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promoItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="relative w-full h-85 overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {promoItems.map((promo) => (
            <div key={promo.id} className="w-full h-full flex-shrink-0">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-2xl font-semibold text-white">
        {promoItems[currentIndex].title}
      </div>
    </div>
  );
};

export default PromoSlider;
