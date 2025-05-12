import Button4P from "@/app/components/Button";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import FAQs from "@/app/components/FAQS";
import ReviewSection from "@/app/components/ReviewSection";
import { FoodTruckCities, FoodTruckFAQs, FoodTruckOptions1, FoodTruckOptions2, FoodTruckWhyUs } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Get Noticed – Professional Food Truck Wraps in Maryland",
  description: "Turn heads with custom food truck wraps in Maryland. Eye-catching designs, fast service, and professional installation by 4Print.",
};


const FleeWrapMaryland = (props) => {
  return (
    <>
      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap z-10 gap-8 lg:gap-0">
          <div className="lg:w-6/12 w-full relative lg:z-20 px-6 lg:px-0 lg:pt-4 lg:pb-8">
            <h1 className="lg:text-[40px] text-[45px] font-bold uppercase lg:leading-[60px] leading-[45px] lg:pb-8 lg:me-[-450px]">Food Truck Wraps in Maryland <br /> 
                <span className="lg:text-[80px] text-4pblue">Drive Your Culinary</span> <br /> 
                <span className="lg:text-[72px] text-4pred">  Brand Forward</span></h1>

            <p className="leading-[23px] lg:pe-2 pt-4 ">Looking for food truck wraps in Maryland to amplify your mobile culinary business? At 4Print, we specialize in custom food truck graphics that transform your vehicle into an attention-grabbing dining destination.</p>
            <p className="leading-[23px] lg:pe-2 pt-4 ">Whether you operate a single gourmet food truck or manage a fleet of mobile kitchens, our premium vinyl wraps deliver outstanding durability, vibrant food-themed designs, and expert installation.</p>
            <div className="flex flex-wrap gap-4 justify-center py-4 lg:pt-4">  
              <div className="lg:w-[30%] w-[45%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-0 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-8">Fast turnaround</p>
              </div>
              <div className="lg:w-[30%] w-[45%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-0 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2"> Expert Installation</p>
              </div>
              <div className="lg:w-[30%] w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-12">Custom Designs</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-5/12 w-[370px] mx-auto lg:mx-0 mt-4 lg:mt-2 ">
                <Button4P buttonText={'Call (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-blue-to-white me-4'} iconOption={7} textColor={'text-white ps-3'}/>
              </div>
              <div className="lg:w-7/12 w-[370px] mx-auto lg:mx-0 mt-6 lg:mt-2">
                <Button4P buttonText={'Email sales@4printus.com'} buttonLink={'mailto:sales@4printus.com'} buttonBgAnimation={'btn-blue-to-white lg:ms-4'} iconOption={7} textColor={'text-white ps-3'}/>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full lg:pt-56 z-20">
            <div className="px-8 lg:pt-6 lg:pb-8 bg-white lg:mt-6 lg:ms-12 lg:me-0 rounded-xl shadow-usual py-8 lg:py-4">
              <p className="text-[22px] font-semibold pb-4"> Contact us Today!</p>
              <ContactForm />
            </div>
          </div>
        <div className="w-full hero-carwrap-food-truck lg:h-[425px] h-2/6 lg:mt-[-130px] h-[200px]"></div>
        </div>
      </div>

      {/****************** Services & Options  Section ****************************/}
      <div className="lg:mb-8 mb-16 pb-0 lg:pb-0">
        <div className="container lg:pb-4 pt-4 pt-24">
          <h2 className="lg:text-[65px] text-[45px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Food Truck Wrap Services   
          <span className="lg:text-[80px] text-4pblue block">& Culinary Branding Solutions</span></h2>

          <div className="flex flex-wrap lg:pt-4 px-6 lg:px-0">
            <div className="lg:w-5/12"></div>
            <div className="lg:w-7/12 w-full lg:ps-8">
              <p className="leading-[23px]">At 4Print, we provide tailored food truck wrap solutions to help culinary businesses increase street visibility and establish a memorable brand image. From fully wrapped gourmet vehicles to strategically placed menu decals, we deliver appetizing visuals that create lasting customer impressions.</p>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0 pt-12 lg:pt-0" >

            <div className="lg:w-5/12 lg:pt-32 lg:order-1 order-3">
                <Image
                src="/images/foodtruck-wrap-maryland.webp"
                alt="Food Truck Wrap in Maryland"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/foodtruck-wrap-maryland.webp 768w, /images/foodtruck-wrap-maryland.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:mt-[-160px] lg:w-[536px] lg:min-w-[400px]"
                />
            </div>

            <div className="lg:w-7/12 w-full pb-2 lg:pb-0 lg:pt-4 lg:ps-8 lg:order-2 order-1" id="personal">
              <p className="text-4pred font-bold text-[35px] leading-[35px] py-4">Food Truck Wraps & Graphics for Culinary Businesses</p>
              <p className="leading-[23px] ">For food entrepreneurs of all specialties, our <b>food truck wraps</b> offer a cost-effective way to promote your culinary offerings while protecting your vehicle surfaces. Whether you need branding for a single food truck or an entire mobile dining fleet, we ensure high-quality graphics that perfectly represent your culinary identity.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 pt-8">
                {FoodTruckOptions1.map((data, index) => {
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
                  {FoodTruckOptions2.map((data, index) => {
                  return (
                    <div key={index} className={`relative`}>
                      <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-start w-full min-h-[220px] py-4 lg:pt-6`}>
                      <p className="text-center leading-[23px] font-bold px-4 lg:px-0 text-4pblack pb-4">{data.title}</p>
                      <p className="text-center leading-[23px] px-4 text-4pblack">{data.text}</p>
                      </div>
                    </div>
                  )
                  })}
                </div>
              </div>
            </div>

            <div className="w-full lg:px-60 lg:order-7 order-7 pt-8 lg:pt-0">
                <p className="leading-[23px] lg:pt-16 text-center">For culinary entrepreneurs looking to expand their customer base with food truck wraps in Maryland, our specialized solutions offer a high-visibility, cost-effective marketing approach. Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a>  to discuss your food truck branding vision today!</p>
            </div>

          </div>
        </div>
      </div>

      {/****************** Map Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-4pgrey rounded-xl lg:p-12 px-6 py-12">
          <h2 className="lg:text-[60px] text-[45px] leading-[50px] lg:px-0 lg:leading-[60px] uppercase font-bold">Wrapping Food Trucks  
          <span className="lg:text-[65px] text-4pblue block">in Maryland Since 2021</span></h2>
          <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-4 lg:w-[50rem]">At 4Print, we have been enhancing culinary vehicles with premium vinyl wraps since we opened our doors. Our team proudly serves Maryland's growing food truck scene, providing custom wraps, menu graphics, and mobile kitchen branding that improves visibility and customer appeal.</p>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-6 lg:pe-8">Based in Glen Burnie, MD, we offer on-site installations within a 50-mile radius, depending on your food truck's size and location. Whether you're an independent food truck entrepreneur or managing a fleet of mobile kitchens, we ensure convenience and exceptional results by bringing our expertise to your commissary or location when needed.</p>
              <p className="text-[22px] font-semibold pb-6 lg:pt-6">MD Counties We Can Travel To</p>
              <ul className="list-disc ps-8">
              {FoodTruckCities.map((data, index) => {
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
          <p className="text-center lg:px-24 leading-[23px] lg:pe-2 pt-8 lg:pt-12 lg:pe-8">If your food truck operates outside these counties or in Washington D.C. or Northern Virginia, we may still be able to accommodate your needs. We welcome culinary entrepreneurs from throughout the DMV area! Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a>  to discuss your food truck project and location.</p>
        </div>
      </div>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap">
          <div className="lg:w-6/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[45px] text-[42px] lg:leading-[55px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why Choose 4Print
            <span className="lg:text-[65px] lg:leading-[65px] text-4pblue block"> for Food Truck Wraps in Maryland?</span></h2>
            <p className="lg:pt-8">At 4Print, we specialize in high-quality food truck wraps that transform ordinary vehicles into memorable culinary destinations. Since 2021, we've helped food entrepreneurs of all specialties stand out with expert designs, precision installations, and food-grade durable materials. Whether you need a single wrap or a full fleet transformation, we deliver appetizing results with meticulous attention to detail.</p>
            <div className="lg:w-8/12 w-[340px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Contact us at (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="ps-6 lg:ps-12 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl pt-8 lg:pt-20">
              {FoodTruckWhyUs.map((data, index) =>{
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
        title1={"Ready to Transform Your Food Truck?"}
        title2={"Get Your Maryland Wrap Today!"}
        text1={"Whether you need complete food truck branding or menu display graphics, 4Print is Maryland's trusted culinary wrap expert."}
        text2={'We proudly serve food truck entrepreneurs throughout Maryland and can assist mobile food businesses in Washington D.C. and Virginia.'} 
      >
        <div className="flex flex-wrap">
          <div className="w-full">Call us today or email to Call us to begin your food truck transformation!</div>
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
          <h3 className="text-white lg:text-[40px] font-semibold">Food Truck Wrapping FAQs</h3>
          <p className="text-white pb-8">Find answers to common questions about food truck wraps in Maryland and learn about durability, cost, maintenance, and considerations specific to mobile food service vehicles.</p>
            <FAQs faqsData={FoodTruckFAQs} />
          </div>
        </div>
      </div>
    </>
  )
};

export default FleeWrapMaryland;
