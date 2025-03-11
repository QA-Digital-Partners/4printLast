'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para la navegación
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';


const ImageCarousel = ({ imageData, imageWidth, imageHeigh, sectionId }) => {

  const swiperRef = useRef(null);
  const prev = useRef(null); // Crear refs para los botones
  const next = useRef(null);
  const pagination = useRef(null);



  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prev.current;
      swiper.params.navigation.nextEl = next.current;
      swiper.params.pagination.el = `#${sectionId}`; // Asegurar que sea único
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

 
  return (
    <div className={`lg:max-w-[510px] w-full`}>
      <Swiper
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        modules={[Autoplay, Pagination, Navigation]} // Habilita los módulos necesarios
        className="swiper-container"
        pagination={{
          el: `#${sectionId}`,
          clickable: true,
        }}
        breakpoints={{
          // Pantallas pequeñas (sm)
          640: {
            slidesPerView: 1, // Muestra 1 slide
            spaceBetween: 25,
          },
          // Pantallas medianas (md)
          768: {
            slidesPerView: 1, // Muestra 2 slides
            spaceBetween: 25,
          },
        }}
      >
        {imageData.map((slide, index) => (
          <SwiperSlide key={index} id={index} className="me-[0px]">
            <Image 
              src={`/images/${slide.image}`}
              alt={slide.title}
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet={`/images/${slide.image} 768w, /images/${slide.image} 1024w`}
              width={imageWidth}
              height={imageHeigh} 
              className='max-h-[360px] lg:max-h-[400px]'
              style={{ width: `${imageWidth}px`, height: `${imageHeigh}px` }}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-6 px-6 lg:px-0">
        <button ref={prev}>
          <Image 
              src={"/images/review-arrow-left.svg"}
              alt="review icon left"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/review-arrow-left.svg 768w, /images/review-arrow-left.svg 1024w"
              width={33}
              height={34} 
              className="" />
        </button>
        <div ref={pagination} id={sectionId} className="content-center text-center mx-6 lg:w-[11rem] lg:max-w-[11rem]"></div>
        <button ref={next}>
        <Image 
              src={"/images/review-arrow-right.svg"}
              alt="review icon right"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/review-arrow-right.svg 768w, /images/review-arrow-right.svg 1024w"
              width={33}
              height={34} 
              className="" />
        </button>
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 25px;
          height: 25px;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          margin: 0 5px;
          opacity: 0.5;
          transition: opacity 0.3s, border-color 0.3s;
          background: #D2D2D2;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #3149BC;
        }
        .pagination-wrapper {
          display: flex;
          align-items: center;
          gap: 25px;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
