'use client';

import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactFormFooter = ({title1, title2, text1, text2, bgColor="", 
                            mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus',
                            mapHeight = 600,  
                            children}) => {


  return (
    <>
      <div className="container lh:mb-[100px] mb-16" id="contact">
        <div className={`bg-contact-form${bgColor} lg:px-32 px-8 pt-16 text-white rounded-lg pb-32`}>
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
              <iframe src={mapUrl} 
                width='400' 
                height={mapHeight} 
                style={{border:0, height: mapHeight ? `${mapHeight}px` : '520px'}} 
                allowFullScreen="" 
                className={`rounded-xl shadow-usual lg:w-[430px] w-full ${mapHeight ? `lg:h-[${mapHeight}px]` : 'lg:h-[520px]'} h-[500px]`} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" />
            </div>

        </div>
      </div>
    </>
  )
};

export default ContactFormFooter;
