import Image from "next/image";
import React from "react"


const Button4P = ({buttonText, buttonBgAnimation, textColor, iconOption, buttonLink, self='_self'}) => {

    const iconList = ['ib-white-blue.svg', 'ib-blue-white.svg', 'ir-white-blue.svg', 'ib-link-blue-white.svg', 'ib-white-red.svg', 'ib-blue-white-ar.svg', 'ib-white-blue-call.svg', 'ib-red-white-arrow.svg', 'ib-red-white-mail.svg']
  return (
    <>
      <a href={buttonLink} target={self} className={`flex rounded-lg items-center font-bold shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)] btn-animation ${buttonBgAnimation} btn-1`}>
        <Image
            src={`/images/${iconList[iconOption]}`} 
            alt="Button Icon"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet={`/images/Group-790.svg 768w, /images/Group-790.svg 1024w`}
            width={44}
            height={46}
        />
        <p className={`uppercase text-[15px] w-full text-center ${textColor}`}>{buttonText}</p>            
      </a>
    </>
  )
};

export default Button4P;
