'use client'
import React, { useEffect, useState } from "react";

export const DropdownMenu = ({menu, options}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Envolvemos tanto el texto como el menú dentro del mismo contenedor
    <div
      className="relative inline-block text-left w-auto h-full"
      // Solo se abre el menú al hacer hover sobre el contenedor completo
      onMouseEnter={() => setIsOpen(true)}
      // Solo se cierra cuando el mouse salga del área completa (texto + menú)
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Texto sobre el que se hace hover */}
      <div className="cursor-pointer">
        <a href={menu.link}>
            <span className="uppercase mx-4 text-[15px] hover:text-4pblue hover:font-bold">{menu.name}</span>
        </a>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute z-[999] left-0 mt-0 w-auto lg:w-64 min-w-64 bg-white border rounded-lg shadow-lg">
          <ul className="py-0 z-[999]">
            {options.map((data, index) => {
                return(
                    <li
                    key={index}
                    className="block px-4 py-2 text-gray-700 hover:bg-4pblue hover:text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    ><a href={data.link}>{data.name}</a>
                    </li>
                )
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
