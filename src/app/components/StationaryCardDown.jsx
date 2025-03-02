import Image from "next/image";
import React from "react"
import Button4P from "./Button";

const StationaryCardDown = ({image, title3, cta, desc, features, buttonText, id}) => {
  return (
    <>
        <div className="text-center rounded-xl px-6 pt-12 pb-8 shadow-usual border-[1px] border-4plight-grey justify-items-center" id={id}>
          <h3 className="text-4pblue font-bold text-[35px] leading-[30px]">{title3}</h3>
          <p className="font-bold text-[25px] py-4">{cta}</p>
          <p className="leading-[23px] pb-4 px-8">{desc}</p>
          <p className="text-4pblue font-bold pb-6">{features}</p>
          <div className="lg:w-7/12 mx-auto lg:mx-0 pb-8">
            <Button4P buttonText={buttonText} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white text-center w-full ps-0'}/>
          </div>
          <Image
            src={`/images/${image}`}
            alt="Hoodies Image"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet={`/images/${image} 768w, /images/${image} 1024w`}
            width={533}
            height={400}
            className=""
          />
        </div>
    </>
  )
};

export default StationaryCardDown;
