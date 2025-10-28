'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Importa estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Ejemplo de componente por defecto exportado
export default function NewCaruselHome({ slides }){
  // slides: array opcional de objetos { id, title, subtitle, image }
  const defaultSlides = [
    { id: 1, alt:'Car Wrap Chick Fil A App', image: '/images/chick-fil-a-home.webp' },
    { id: 2, alt:'Car Wrap in MAryland - BMA Pools', image: '/images/car-wrap-bma-pools-home.webp' },
    { id: 3, alt:'Fleet Wraps in Maryland - HoCo', image: '/images/fleet-wrap-hoco-home.webp' },
    { id: 4, alt:'Truck Wrap in Maryland - White Oak Tree Experts', image: '/images/white-oak-tree-expert-home.webp' },
    { id: 5, alt:'Trailer Wrap in Maryland- Sinaloa', image: '/images/trailer-fleet-sinaloa-home.webp' },
    { id: 6, alt:'Full Vehicle Wrap - Tesla', image: '/images/full-car-wrap-tesla-home.webp' },
    { id: 7, alt:'Trailer Full Wrap - DOES DC', image: '/images/trailer-wrap-does-dc-home.webp' },
    { id: 8, alt:'Food Truck Wrap in Maryland - Choza del Chef', image: '/images/food-truck-wrap-choza-del-chef-home.webp' }
  ];

  const items = Array.isArray(slides) && slides.length ? slides : defaultSlides;

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        grabCursor={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 }
        }}
        style={{ paddingBottom: 40 }}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img src={item.image} alt={item.alt} className="w-full lg:h-[488px] object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

