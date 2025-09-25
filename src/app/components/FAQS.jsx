'use client';

import React, { useRef, useState } from "react"

const FAQs = ({faqsData}) => {
    const faqRef = useRef({})
    const [expandedResource, setExpandedResource] = useState(faqsData[0].title);

    const handleReadMoreClick = (title) => {
        setExpandedResource(expandedResource === title ? null : title); // Alterna la expansión
    };

  return (
    <>
      {faqsData.map((data, index) => (
        <div key={index} ref={(el) => (faqRef.current[data.title] = el)} className={`rounded-xl px-8 py-[2rem] mb-8 min-h-[83px] content-center border-[2px] border-white ${expandedResource === data.title ? 'bg-white' : 'bg-4pblack'}`}>
            <div className="flex py-0 justify-between ">
                <div className="w-[80%]">
                    <p className={`text-[22px] font-semibold leading-[25px] ${expandedResource === data.title ? 'text-4pblack' : 'text-white'}`}>{data.title}</p>
                </div>
                <a onClick={() => handleReadMoreClick(data.title)} className="h-fit max-w-[36px] w-full block cursor-pointer">
                    <div className={`max-w-[36px] min-h-[36px] rounded-xl lg:w-full px-[10px] py-[6px] transition-all ease-in-out duration-300  ${expandedResource === data.title ? 'bg-4pblue hover:bg-4pred' : 'bg-4pred hover:bg-4pblue'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" className={`absolute transition-transform mx-auto ${expandedResource === data.title ? 'rotate-x-90' : 'rotate-0'}`}>
                            <path d="M9.33333 5.10715L13.1793 8.94245C13.6991 9.46073 14.5403 9.46014 15.0593 8.94114C15.5789 8.42163 15.5789 7.57934 15.0593 7.05983L8.70711 0.707594C8.31658 0.31707 7.68342 0.317071 7.29289 0.707595L0.940655 7.05983C0.421145 7.57934 0.421146 8.42163 0.940655 8.94114C1.45965 9.46014 2.30093 9.46073 2.82065 8.94245L6.66667 5.10715V20.0005C6.66667 20.7369 7.26362 21.3338 8 21.3338C8.73638 21.3338 9.33333 20.7369 9.33333 20.0005V5.10715Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none" className={`absolute transition-transform ${expandedResource === data.title ? 'rotate-0' : 'rotate-x-90'}`}>
                            <path d="M9.33333 16.8928L13.1793 13.0575C13.6991 12.5393 14.5403 12.5399 15.0593 13.0589C15.5789 13.5784 15.5789 14.4207 15.0593 14.9402L8.70711 21.2924C8.31658 21.6829 7.68342 21.6829 7.29289 21.2924L0.940655 14.9402C0.421145 14.4207 0.421146 13.5784 0.940655 13.0589C1.45965 12.5399 2.30093 12.5393 2.82065 13.0575L6.66667 16.8928V1.99951C6.66667 1.26313 7.26362 0.666178 8 0.666178C8.73638 0.666178 9.33333 1.26313 9.33333 1.99951V16.8928Z" fill="white"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div className={`lg:pe-4 font-light leading-[25px] whitespace-pre-wrap faq ${expandedResource === data.title ? 'expanded pt-2 pb-4 mt-4' : ''}`}>{data.answer}</div>
        </div>
      ))}
    </>
  )
};

export default FAQs;