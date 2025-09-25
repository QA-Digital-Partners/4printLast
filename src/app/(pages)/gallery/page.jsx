'use client'
import React, { useState } from "react"
import { GalleryImages } from "@/app/data/data";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import ContactFormFooter from "@/app/components/ContactFormFooter";

const Gallery = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(12);

  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 12, GalleryImages.length));
  };

  return (
    <>
    <div className="bg-gallery mb-[100px] lg:pt-[250px] lg:mt-[-188px] lg:pb-[200px] pt-[130px] mt-[-115px] pb-[100px]">
        <h1 className="text-transparent stroke-[2px] stroke-white font-black lg:text-[90px] text-[60px] gallery-title tracking-tighter text-center">OUR PROJECTS</h1>
    </div>
    <div className="container mx-auto p-4 lg:mb-[100px] mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {GalleryImages.slice(0, visibleImages).map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/3] flex items-center justify-center bg-gray-200"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={`/images/${src}.webp`}
              alt={`Gallery Image ${index + 1}`}
              layout="intrinsic"
              width={300}
              height={300}
              className="object-cover w-full h-full hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
      
      {visibleImages < GalleryImages.length && (
        <div className="text-center mt-4">
          <div className="lg:w-3/12 w-[380px] mx-auto mt-12">
            <a onClick={loadMoreImages} className={`flex rounded-lg items-center font-bold shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)] btn-animation btn-red-to-blue btn-1`}>
                <Image
                    src={`/images/ib-link-blue-white.svg`} 
                    alt="Button Icon"
                    sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                    srcSet={`/images/Group-790.svg 768w, /images/Group-790.svg 1024w`}
                    width={44}
                    height={46}
                />
                <p className={`uppercase text-[15px] w-full text-center text-white ms-[-20px] lg:ms-0`}>LOAD MORE</p>            
            </a>
          </div>
        </div>
      )}
      
      {/* Modal */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="absolute inset-0" onClick={() => setSelectedImage(null)}></div>
        <div className="relative bg-white p-4 rounded-lg max-w-[90vw] w-[100%] lg:max-w-[75vw] max-h-[80vh]">
          <button
            className="absolute top-2 right-2 text-4pblack text-xl"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
          {selectedImage && (
            <Image
              src={`/images/${selectedImage}.webp`}
              alt="Selected Image"
              layout="intrinsic"
              width={950}
              height={950}
              className="object-contain mx-auto max-h-[75vh]"
            />
          )}
        </div>
      </Dialog>
    </div>

    {/******************  Contact Form Section ****************************/}
    <ContactFormFooter />
    </>
  );
};

export default Gallery;
