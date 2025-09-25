'use client';

import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactFormFooter = ({title1, title2, text1, text2, children}) => {


  return (
    <>
      <div className="container lh:mb-[100px] mb-16" id="contact">
        <div className="bg-contact-form lg:px-32 px-8 pt-16 text-white rounded-lg pb-32">
            <h2 className="lg:text-[70px] lg:leading-[80px] text-[28px] leading-[35px] font-bold uppercase">{title1 ? title1 : "Let's Start Your " }<span className="lg:text-[80px] leading-[62px] lg:leading-[80px] text-[55px] block">{title2 ? title2 : "Project Today" }</span></h2>
            <p className="lg:w-[35rem] leading-[23px] py-4">{text1 ? text1 : "From design to installation, we're here to help your brand stand out on the road. Contact us now to discuss your vehicle wrapping needs or schedule a visit to our Glen Burnie facility." } </p>
            <p className="font-bold text-[20px]">{text2 ? text2 : "Serving Glen Burnie, and the entire DMV area with pride since 2021" }</p>
            {children ? children : ''}
        </div>

        <div className="lg:mx-[78px] mx-8 bg-white rounded-lg border-[1px] border-4plight-grey flex flex-wrap lg:flex-nowrap mt-[-105px]">
            <div className="lg:w-[612px] p-8">
              <ContactForm orientation=""/>
            </div>
            <div className="w-[432px]">
                <a href="https://maps.app.goo.gl/dZunpUZZmkJ9DUxS9?g_st=com.google.maps.preview.copy" target="_blank">
                    <Image
                        src={`/images/form-map.webp`} 
                        alt="Map image"
                        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                        srcSet={`/images/form-map.webp 768w, /images/form-map.webp 1024w`}
                        width={435}
                        height={600}
                    />
                </a>
            </div>

        </div>
      </div>
    </>
  )
};

export default ContactFormFooter;
