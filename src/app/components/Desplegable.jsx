"use client";
import React, { useState } from "react";
import { dropDownCarWraps } from "../data/data";

export const DropdownMenu = ({ menu, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Estado para el submenú

  return (
    <div
      className="relative inline-block text-left w-auto h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setSubMenuOpen(false);
      }}
    > 
      <div className="cursor-pointer">
        <a href={menu.link}>
          <span className="uppercase mx-4 text-[15px] hover:text-4pblue hover:font-bold">
            {menu.name}
          </span>
        </a>
      </div>

      {isOpen && (
        <div className="absolute z-[999] left-0 mt-0 w-auto lg:w-64 min-w-64 bg-white border rounded-lg shadow-lg">
          <ul className="py-0 z-[999]">
            {options.map((data, index) => (
              <li
                key={index}
                className="relative block px-4 py-2 text-gray-700 hover:bg-4pblue hover:text-white cursor-pointer"
                onMouseEnter={() => index === 0 && setSubMenuOpen(true)}
                onMouseLeave={() => index === 0 && setSubMenuOpen(false)}
              >
                <a href={data.link}>{data.name}</a>

                {/* Submenú lateral para el primer elemento */}
                {index === 0 && subMenuOpen && (
                  <div className="absolute left-full top-0 w-48 bg-white border rounded-lg shadow-lg">
                    <ul className="">
                      {dropDownCarWraps.map((dataI, ident) => {
                        return(
                        <li key={ident} className="px-4 py-2 text-gray-700 hover:bg-4pblue hover:text-white cursor-pointer">
                          <a href={dataI.link}>{dataI.name}</a>
                        </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
