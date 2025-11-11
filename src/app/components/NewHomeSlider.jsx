'use client'

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Importa estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

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

    const swiperRef = useRef(null);
    const prev = useRef(null); // Crear refs para los botones
    const next = useRef(null);
    const pagination = useRef(null);

    useEffect(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiper = swiperRef.current.swiper;
        swiper.params.navigation.prevEl = prev.current;
        swiper.params.navigation.nextEl = next.current;
        //swiper.params.pagination.el = `#${sectionId}`; // Asegurar que sea único
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }, []);

  const items = Array.isArray(slides) && slides.length ? slides : defaultSlides;

  return (
    <div className="w-full mx-auto flex flex-nowrap">
      <div className='lg:w-[5%] w-[10%] px-2 lg:px-0 content-center text-center'>
        <button ref={prev}>
          <Image 
            src={"/images/review-arrow-left.svg"}
            alt="review icon left"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/review-arrow-left.svg 768w, /images/review-arrow-left.svg 1024w"
            width={33}
            height={34} 
            className="hover:scale-125 duration-300 transition-all ease-in-out" />
        </button>
      </div>

      <div className='lg:w-[90%] w-[80%]'>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay, Navigation ]}
          grabCursor={true}
          loop={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 1, slidesPerGroup: 1 },
            1024: { slidesPerView: 2, slidesPerGroup: 2 }
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

      <div className='lg:w-[5%] w-[10%] px-2 lg:px-0 content-center text-center'>
        <button ref={next}>
          <Image 
            src={"/images/review-arrow-right.svg"}
            alt="review icon right"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/review-arrow-right.svg 768w, /images/review-arrow-right.svg 1024w"
            width={33}
            height={34} 
            className="hover:scale-125 duration-300 transition-all ease-in-out" />
        </button>
      </div>
    </div>
  );
}

