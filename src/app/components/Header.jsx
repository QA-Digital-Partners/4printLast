"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { dropDownCarWraps, dropDownCarWrapsCommercial, dropDownServices, headerMenu } from "../data/data";
import Button4P from "./Button";
import { DropdownMenu } from "./Desplegable";
import MegaMenu from "./MegaMenu";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileCarWrapsDropdownOpen, setMobileCarWrapsDropdownOpen] = useState(false);
  const [mobileCarWrapsCommercialDropdownOpen, setMobileCarWrapsCommercialDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Estado para verificar si el componente ya está montado

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="container lg:py-8 py-4 z-[999] relative">
        <div className="rounded-xl border-1 border-4plight-grey lg:py-8 py-4 bg-white flex px-8 shadow-usual bg-white flex-wrap lg:flex-nowrap">
          {/* LOGO */}
          <div className="lg:w-3/12 w-8/12">
          <a href="/">
            <Image
              src="/images/Logo-no-lined.svg"
              alt="Logo without bottom line"
              width={276}
              height={56}
              className="w-[12rem] lg:w-full"
            />
          </a>
          </div>

          {/* MENÚ DESKTOP */}
          <div className="w-7/12 content-center text-end pe-8 hidden lg:block">
            <nav>
              {headerMenu.map((data, index) =>
                data.name === "Services" ? (
                  <div key={index} className="inline-block">
{/*                  <DropdownMenu key={index} menu={data} options={dropDownServices} /> */}
                    <MegaMenu menu={data}/>

                  </div>
                ) : (
                  <a key={index} href={data.link} className="mx-4 uppercase text-[15px] hover:text-4pblue hover:font-bold">
                    {data.name}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* BOTÓN CALL US DESKTOP */}
          <div className="w-2/12 hidden lg:block">
            <Button4P
              buttonText={"Call Us"}
              buttonBgAnimation={"btn-red-to-blue click_call_header"}
              textColor={"text-white"}
              buttonLink={"tel:+14439981717"}
              iconOption={0}
            />
          </div>

          {/* MENÚ RESPONSIVE */}
          <div className="w-2/12 lg:hidden text-center">
            <button
              className="lg:hidden p-2 rounded-md border border-gray-500"
              aria-label="responsive menu"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          <div className="w-2/12 lg:hidden justify-items-center">
            <a href="tel:+114439981717" className="click_call_header">
              <Image
                src="/images/ib-call-resp.svg"
                alt="Call icon"
                width={43}
                height={46}
              />
            </a>
          </div>

          {/* MENÚ RESPONSIVE (solo se renderiza después del montaje) */}
          {mounted && (
            <div
              className={`w-full absolute z-30 top-[95px] bg-white right-0 overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
              } lg:hidden rounded-md`}
            >
              <ul>
                {headerMenu.map((data, index) => (
                  <li key={index} className="mx-4 uppercase text-[18px] py-2">
                    {data.name === "Services" ? (
                      <div className="flex justify-between items-center">
                        <a href={data.link} className="w-4/12">{data.name}</a>
                        {/* FLECHA PARA ABRIR EL DROPDOWN */}
                        <button
                          className="ml-2 text-gray-700 w-8/12 text-end"
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        >
                          {mobileDropdownOpen ? "▲" : "▼"}
                        </button>
                      </div>
                    ) : (
                      <a href={data.link}>{data.name}</a>
                    )}

                    {/* DROPDOWN PARA SERVICES EN RESPONSIVE */}
                    {data.name === "Services" && mobileDropdownOpen && (
                      <ul className="mt-2 pl-4">
                        {dropDownServices.map((options, idx) => (
                          <li key={idx} className="py-1 text-gray-700">
                            {options.name === "Car Wrap" ? (
                              <div className="flex justify-between items-center">
                              <a href={options.link} className="w-4/12">{options.name}</a>
                              {/* FLECHA PARA ABRIR EL DROPDOWN */}
                              <button
                                className="ml-2 text-gray-700 w-8/12 text-end"
                                onClick={() => setMobileCarWrapsDropdownOpen(!mobileCarWrapsDropdownOpen)}
                              >
                                {mobileCarWrapsDropdownOpen ? "▲" : "▼"}
                              </button>
                            </div>
                            ) : (
                              <a href={options.link}>{options.name}</a>
                            )}

                            {options.name === "Car Wrap" && mobileCarWrapsDropdownOpen && (
                              <ul className="mt-2 ps-4">
                                {dropDownCarWraps.map((CWOption, idn) => (
                                  <li key={idn} className="py-1 text-gray-700">
                                    {CWOption.name === "Commercial Wrap" ? (
                                      <div className="flex justify-between items-center">
                                      <a href={CWOption.link} className="w-9/12">{CWOption.name}</a>
                                      {/* FLECHA PARA ABRIR EL DROPDOWN */}
                                      <button
                                        className="ml-2 text-gray-700 w-3/12 text-end"
                                        onClick={() => setMobileCarWrapsCommercialDropdownOpen(!mobileCarWrapsCommercialDropdownOpen)}
                                      >
                                        {mobileCarWrapsCommercialDropdownOpen ? "▲" : "▼"}
                                      </button>
                                      </div>
                                    ) : (
                                      <a href={CWOption.link}>{CWOption.name}</a>
                                    )}

                                    {CWOption.name === "Commercial Wrap" && mobileCarWrapsCommercialDropdownOpen && (
                                      <ul className="mt-2 ps-4">
                                        {dropDownCarWrapsCommercial.map((CWCom, index) => (
                                          <li className="py-1 text-gray-700" key={index}>
                                            <a href={CWCom.link}>{CWCom.name}</a>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
