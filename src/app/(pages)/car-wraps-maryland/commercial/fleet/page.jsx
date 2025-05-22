import Button4P from "@/app/components/Button";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import FAQs from "@/app/components/FAQS";
import ReviewSection from "@/app/components/ReviewSection";
import {  CWMFAQsFleet, CWMMapCitiesFleet, CWMServicesOptionsFleet1, CWMServicesOptionsFleet2, CWMWhyUsFleet } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Quality Fleet Wraps in Maryland - 4Print",
  description: "Get high-quality fleet wraps in Maryland with 4Print. Custom lettering wraps, logo wraps, and branding solutions for all businesses!",
};


const FleeWrapMaryland = (props) => {
  return (
    <>
      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap z-10">
          <div className="lg:w-6/12 w-full relative lg:z-20 px-6 lg:px-0 lg:pt-4">
            <h1 className="lg:text-[40px] text-[45px] font-bold uppercase lg:leading-[60px] leading-[45px] lg:pb-8 lg:me-[-450px]">Fleet Wraps in Maryland <br /> 
                <span className="lg:text-[80px] text-4pblue">Maximize Your Brand</span> <br /> 
                <span className="lg:text-[72px] text-4pred"> Visibility on the Road</span></h1>

            <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-8">Looking for fleet wraps in Maryland to enhance your business's mobile advertising? At 4Print, we specialize in custom fleet graphics that turn company vehicles into moving billboards. Whether you operate a small business or manage a large commercial fleet, our premium vinyl wraps offer long-lasting durability, vibrant designs, and professional installation.</p>
            <div className="flex flex-wrap">
              <div className="lg:w-5/12 w-[370px] mx-auto lg:mx-0 mt-4 lg:mt-6 ">
                <Button4P buttonText={'Call (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-blue-to-white me-4'} iconOption={7} textColor={'text-white ps-3'}/>
              </div>
              <div className="lg:w-7/12 w-[370px] mx-auto lg:mx-0 mt-6 lg:mt-6">
                <Button4P buttonText={'Email sales@4printus.com'} buttonLink={'mailto:sales@4printus.com'} buttonBgAnimation={'btn-blue-to-white lg:ms-4'} iconOption={7} textColor={'text-white ps-3'}/>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full lg:pt-56 z-20">
            <div className="px-8 lg:pt-6 lg:pb-8 bg-white lg:mt-6 lg:ms-12 lg:me-0 rounded-xl shadow-usual">
              <p className="text-[22px] font-semibold pb-4"> Contact us Today!</p>
              <ContactForm />
            </div>
          </div>
        <div className="w-full hero-banner-car-wrap-fleet lg:h-[425px] h-2/6 lg:mt-[-290px]"></div>
        </div>
      </div>

      {/****************** Services & Options  Section ****************************/}
      <div className="lg:mb-8 mb-16 pb-0 lg:pb-0">
        <div className="container lg:pb-4 pt-4 pt-24">
          <h2 className="lg:text-[65px] text-[45px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Fleet Wrap Services & Custom  
          <span className="lg:text-[80px] text-4pblue block">Branding Solutions</span></h2>

          <div className="flex flex-wrap lg:pt-4 px-6 lg:px-0">
            <div className="lg:w-5/12"></div>
            <div className="lg:w-7/12 w-full lg:ps-8">
              <p className="leading-[23px]">At 4Print, we offer tailored <b>fleet wrap solutions</b> to help businesses increase visibility and establish a professional image. From fully wrapped service vehicles to strategically placed decals, we deliver eye-catching results that make a lasting impression.</p>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0 pt-12 lg:pt-0" >

            <div className="lg:w-5/12 lg:pt-32 lg:order-1 order-3">
                <Image
                src="/images/commercial-fleet-wrap.webp"
                alt="Commercial fleet wrap in maryland"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/commercial-fleet-wrap.webp 768w, /images/commercial-fleet-wrap.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:mt-[-160px] lg:w-[536px] lg:min-w-[400px]"
                />
            </div>

            <div className="lg:w-7/12 w-full pb-2 lg:pb-0 lg:pt-4 lg:ps-8 lg:order-2 order-1" id="personal">
              <p className="text-4pred font-bold text-[35px] leading-[35px] py-4">Fleet Wraps & Graphics for Businesses</p>
              <p className="leading-[23px] ">For businesses of all sizes, our <b>fleet wraps</b> provide a cost-effective way to promote services while protecting vehicle surfaces. Whether you need branding for a single work van or an entire fleet, we ensure high-quality graphics that align with your brand identity.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 pt-8">
                {CWMServicesOptionsFleet1.map((data, index) => {
                return (
                  <div key={index} className={`relative`}>
                    <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full min-h-[180px] py-4 `}>
                    <p className="text-center leading-[23px] font-bold px-4 text-4pblack pb-4">{data.title}</p>
                    <p className="text-center leading-[23px] px-4 text-4pblack">{data.text}</p>
                    </div>
                  </div>
                )
                })}
              </div>
            </div>

            <div className="w-full pt-4 lg:pt-0 pb-8 lg:pb-0 lg:order-3 order-2" >
              <div className="lg:w-12/12 lg:pe-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:pt-6">
                  {CWMServicesOptionsFleet2.map((data, index) => {
                  return (
                    <div key={index} className={`relative`}>
                      <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full min-h-[180px] py-4 `}>
                      <p className="text-center leading-[23px] font-bold px-4 text-4pblack pb-4">{data.title}</p>
                      <p className="text-center leading-[23px] px-4 text-4pblack">{data.text}</p>
                      </div>
                    </div>
                  )
                  })}
                </div>
              </div>
            </div>

            <div className="w-full lg:px-60 lg:order-7 order-7 pt-8 lg:pt-0">
                <p className="leading-[23px] lg:pt-16 text-center">For businesses looking to extend their reach with fleet wraps in Maryland, our commercial solutions offer a high-visibility, cost-effective marketing strategy. Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a> to discuss your fleet branding needs today!</p>
            </div>

          </div>
        </div>
      </div>

      {/****************** Map Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-4pgrey rounded-xl lg:p-12 p-8">
          <h2 className="lg:text-[60px] text-[45px] leading-[50px] lg:px-0 lg:leading-[60px] uppercase font-bold">Wrapping Vehicles  
          <span className="lg:text-[65px] text-4pblue block">in Maryland Since 2021</span></h2>
          <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-4 lg:w-[50rem]">At 4Print, we have been enhancing vehicles with high-quality vinyl wraps since 2021. Our team proudly serves Maryland, providing custom car wraps, fleet graphics, and business vehicle wraps that improve aesthetics and branding.</p>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-6 lg:pe-8">Based in Glen Burnie, MD, we offer on-site installations within a 50-mile radius, depending on the project. Whether you're a personal vehicle owner or managing a business fleet, we ensure convenience and professional results by bringing our expertise to your location when needed.</p>
              <p className="text-[22px] font-semibold pb-6 lg:pt-6">MD Counties We Can Travel To</p>
              <ul className="list-disc ps-8">
              {CWMMapCitiesFleet.map((data, index) => {
                return (
                  <li key={index} className="lg:pb-2">
                    {data.link ? (
                      <>
                        <a href={data.link} target="_self" rel="noopener noreferrer" className="underline">
                          {data.text}
                        </a>
                        {data.cities && data.cities.length > 0 && (
                          <ul>
                            {data.cities.map((city, index) => (
                              <li key={index}>{city.cityName}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <>
                        <p>{data.title}</p>
                        {data.cities && data.cities.length > 0 && (
                          <ul className="list-none ps-6 my-4 grid lg:grid-cols-3 grid-cols-1">
                            {data.cities.map((city, index) => (
                              <li className="flex items-center gap-2" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                                <a className="underline" href={city.citylink}>{city.cityName}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                );
              })}
              </ul>
              <Image 
                src={"/images/logo-grey.svg"}
                alt="logo in grey scale"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/logo-grey.svg 768w, /images/logo-grey.svg 1024w"
                width={544}
                height={411}
                className="lg:justify-self-start justify-self-end lg:mt-[-430px] mt-[-290px] lg:ms-[100px] z-0 lg:w-[544px] w-[90%]" />    
            </div>
            <div className="lg:w-6/12 w-full lg:pt-8 pt-24">
              <Image
                src="/images/Map.webp"
                alt="Map of Maryland and Counties"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/Map.webp 768w, /images/Map.webp 1024w"
                width={552}
                height={691}
                className="z-0 relative rounded-xl shadow-usual"
              />
            </div>
          </div>
          <p className="text-center lg:px-24 leading-[23px] lg:pe-2 pt-8 lg:pt-12 lg:pe-8">If you're outside these counties or in Washington D.C. or Northern Virginia, we may still be able to assist. We welcome all customers from the DMV area! Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a> to discuss your project and location.</p>
        </div>
      </div>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap">
          <div className="lg:w-6/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[45px] text-[45px] lg:leading-[55px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why Choose 4Print
            <span className="lg:text-[70px] lg:leading-[70px] text-4pblue block"> for Fleet Wraps in Maryland?</span></h2>
            <p className="lg:pt-8">At 4Print, we specialize in high-quality vehicle wraps that turn cars, trucks, and fleets into powerful marketing tools. Since 2021, we’ve helped businesses of all sizes stand out on the road with expert design, precision installation, and durable materials. Whether you need a single wrap or a full fleet transformation, we deliver impactful results with unmatched attention to detail. </p>
            <div className="lg:w-8/12 w-[34 0px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Contact us at (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="lg:ps-12 ps-6 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl lg:pt-20 pt-8">
              {CWMWhyUsFleet.map((data, index) =>{
                return(
                  <div key={index} className="flex py-3">
                    <img src="/images/ib-link-blue-white.svg" width={30} height={32} className="me-2" />
                    <p className=""><span className="font-bold text-[25px]">{data.title} </span>{data.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/****************** Contact Form  Section ****************************/}
      <ContactFormFooter
        title1={"Ready to Transform Your Fleet?"}
        title2={"Get Your Maryland Wrap Today!"}
        text1={"Whether you need fleet branding or individual vehicle wraps, 4Print is Maryland's trusted expert."}
        text2={'We proudly serve all of Maryland and can assist clients in Washington D.C. and Virginia.'} 
      >
        <div className="flex flex-wrap">
          <div className="w-full">Call us today or email to get started!</div>
          <div className="lg:w-3/12 w-[370px] mx-auto lg:mx-0 mt-4 lg:mt-6">
            <Button4P buttonText={'Call (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-white me-4'} iconOption={4} textColor={'text-4pred'}/>
          </div>
          <div className="lg:w-4/12 w-[370px] mx-auto lg:mx-0 mt-6 lg:mt-6 mb-4 lg:mb-0">
            <Button4P buttonText={'Email sales@4printus.com'} buttonLink={'mailto:sales@4printus.com'} buttonBgAnimation={'btn-red-to-white lg:ms-4'} iconOption={8} textColor={'text-4pred'}/>
          </div>
        </div>
      </ContactFormFooter>


      {/******************  FAQs Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="flex flex-wrap bg-4pblack rounded-2xl lg:pt-16 lg:pb-20 lg:min-h-[980px] lg:h-[710px]">
          <div className="lg:w-4/12 w-full justify-items-center content-top lg:pt-32">
            <h2 className="text-transparent stroke-[2px] stroke-white font-black lg:text-[178px] text-[105px] lg:transform lg:-rotate-180 stroke4p italic tracking-tighter ">FAQ's</h2>
          </div>

          <div className="lg:w-8/12 w-full lg:pe-24 px-8 py-8 lg:py-0 ">
          <h3 className="text-white lg:text-[40px] font-semibold">Fleet Wrapping FAQs</h3>
          <p className="text-white pb-8">Find answers to common questions about fleet wraps in Maryland and learn about durability, cost, maintenance, and more.</p>
            <FAQs faqsData={CWMFAQsFleet} />
          </div>
        </div>
      </div>
    </>
  )
};

export default FleeWrapMaryland;
