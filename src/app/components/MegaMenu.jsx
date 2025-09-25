import React, { useState } from "react"

const MegaMenu = ({menu}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="relative inline-block text-left w-auto h-full"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setIsOpen(false)
        }}
      >
      <div className="cursor-pointer">
        <a href={menu.link}>
          <span className="uppercase mx-4 text-[15px] hover:text-4pblue hover:font-bold min-w-[75.5px]">
            {menu.name}
          </span>
        </a>
      </div>

      {isOpen && (
        <>
        <div className="absolute z-[999] left-[-641px] mt-0 w-auto lg:w-[1200px] min-w-[66em] shadow-lg pt-8">
          <div className="flex px-24 pt-4 pb-8 bg-white border-l border-r border-b border-4plight-grey rounded-b-lg gap-20">
            <div className="lg:w-6/12 flex flex-wrap px-2 content-start ease-in-out duration-300 transition-all">
              <a href="/car-wraps-maryland" className="w-full text-center font-bold text-4pblue text-[23px]">Car Wraps</a>
              <span className="mx-auto w-full pt-[2px] border-xl bg-4pred lg:max-h-[1px] my-2"></span>
              <div className="lg:w-6/12">
                <a href="/car-wraps-maryland/commercial" className="text-center font-bold text-[20px] pb-2">Commercial Wrap</a>
                <ul className="list-menu text-[18px]">
                  <li className="py-1 hover:text-4pred hover:font-semibold "><a href="/car-wraps-maryland/commercial/fleet">Fleet</a></li>
                  <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/car-wraps-maryland/commercial/food-trucks">Food Trucks</a></li>
                  <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/car-wraps-maryland/commercial/vans">Vans</a></li>
                  <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/car-wraps-maryland/commercial/trailers">Trailers</a></li>
                </ul>
              </div>
              <div className="lg:w-6/12">
                <a href="/custom-car-wraps" className="font-bold text-[20px] pb-2">Custom Wrap</a>
                <ul className="list-menu lg:ms-6">
                  <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/custom-car-wraps#graphicDesign">Graphic Design</a></li>
                  <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/custom-car-wraps#coloChange">Color Change</a></li>
                  <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/custom-car-wraps#textured">Textured</a></li>
                </ul>
              </div>
            </div>
            <div className="lg:w-6/12 flex flex-wrap px-2 content-start">
              <a href="/commercial-printing" className="w-full text-center font-bold text-4pblue text-[23px]">Commercial Printing</a>
                <span className="mx-auto w-full pt-[2px] border-xl bg-4pred max-h-[1px] my-2"></span>
                <div className="lg:w-6/12">
                  <ul className="list-menu ">
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#wallwrap">Wall Wrap</a></li>
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#windowvinyls">Windows Vynils</a></li>
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#banners">Banners</a></li>
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#stickers">Stickers</a></li>
                  </ul>
                </div>
                <div className="lg:w-6/12">
                <ul className="list-menu">
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#carmagnets">Car Magnets</a></li>
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#postcards">Stationary</a></li>
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#yardsigns">Yard Signs</a></li>
                    <li className="py-1 hover:text-4pred hover:font-semibold"><a href="/commercial-printing#minimenu">And More</a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        </>
      ) }

      </div>
    </>
  )
};

export default MegaMenu;
