import Button4P from "@/app/components/Button";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import FAQs from "@/app/components/FAQS";
import FAQSchema from "@/app/components/FAQSChema";
import ReviewSection from "@/app/components/ReviewSection";
import { FoodTruckGlenBurnieFAQs, FoodTruckGlenBurnieWhyUs, FoodTruckOptGlenBurnie1, FoodTruckOptGlenBurnie2 } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Eye-Catching Food Truck Wraps in Baltimore, MD - 4Print",
  description: "Get a professional, eye-catching, and irresistible graphic wrap for your food truck in Baltimore, MD. We work fast. Contact us today and get notices on MD roads.",
};


const FoodWrapGlenBuenie = (props) => {
  return (
    <>
      {/******************  FAQ Schema ****************************/}
      <FAQSchema faqs={FoodTruckGlenBurnieFAQs} />

      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap z-10 gap-8 lg:gap-0">
          <div className="lg:w-6/12 w-full relative lg:z-20 px-6 lg:px-0 lg:pt-4 lg:pb-8">
            <h1 className="lg:text-[40px] text-[45px] font-bold uppercase lg:leading-[60px] leading-[45px] lg:pb-8 lg:me-[-450px]">Food Truck Wraps in Glen Burnie, MD <br /> 
                <span className="lg:text-[80px] text-4pblue">Elevate Your </span> <br /> 
                <span className="lg:text-[72px] text-4pred"> Mobile Food Business</span></h1>

            <p className="leading-[23px] lg:pe-2 pt-4 ">Searching for professional food truck wraps in Glen Burnie, MD to boost your mobile restaurant venture? At 4Print, we create exceptional custom food truck graphics that convert your vehicle into a captivating mobile eatery that draws crowds.</p>
            <p className="leading-[23px] lg:pe-2 pt-4 ">Whether you run one specialty food truck or oversee multiple mobile restaurants, our high-grade vinyl wrapping provides exceptional longevity, eye-catching culinary designs, and professional application.</p>
            <div className="flex flex-wrap gap-4 justify-center py-4 lg:pt-4">  
              <div className="lg:w-[30%] w-[45%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-0 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-8">Quick delivery</p>
              </div>
              <div className="lg:w-[30%] w-[45%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-0 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">Professional Installation</p>
              </div>
              <div className="lg:w-[30%] w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-12">Tailored Graphics</p>
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
          <h2 className="lg:text-[65px] text-[45px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Food Truck Wrapping Services    
          <span className="lg:text-[80px] text-4pblue block">& Mobile Restaurant Branding</span></h2>

          <div className="flex flex-wrap lg:pt-4 px-6 lg:px-0">
            <div className="lg:w-5/12"></div>
            <div className="lg:w-7/12 w-full lg:ps-8">
              <p className="leading-[23px]">At 4Print, we offer specialized food truck wrap services to help mobile food businesses enhance roadside recognition and build a distinctive brand presence. From complete vehicle transformations to targeted menu displays, we create mouth-watering visuals that generate memorable customer experiences.</p>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0 pt-12 lg:pt-0" >

            <div className="lg:w-5/12 lg:pt-32 lg:order-1 order-3">
                <Image
                src="/images/foodtruck-wrap-glen-burnie.webp"
                alt="Food Truck Wrap in Maryland"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/foodtruck-wrap-maryland.webp 768w, /images/foodtruck-wrap-maryland.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:mt-[-160px] lg:w-[536px] lg:min-w-[400px]"
                />
            </div>

            <div className="lg:w-7/12 w-full pb-2 lg:pb-0 lg:pt-4 lg:ps-8 lg:order-2 order-1" id="personal">
              <p className="text-4pred font-bold text-[35px] leading-[35px] py-4">Food Truck Wraps & Graphics for Mobile Food Ventures</p>
              <p className="leading-[23px] ">For culinary professionals across all niches, our food truck wraps in Glen Burnie, MD provide an affordable method to showcase your menu items while safeguarding your vehicle's exterior. Whether you require graphics for one food truck or multiple mobile dining units, we guarantee superior-quality designs that accurately reflect your culinary brand.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 pt-8">
                {FoodTruckOptGlenBurnie1.map((data, index) => {
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
                  {FoodTruckOptGlenBurnie2.map((data, index) => {
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
                <p className="leading-[23px] lg:pt-16 text-center">For mobile food entrepreneurs seeking to grow their clientele with food truck wraps in Glen Burnie, MD, our targeted solutions provide a prominent, budget-friendly promotional strategy. Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a> to explore your food truck branding concepts today!</p>
            </div>
          </div>
        </div>
      </div>

      {/****************** Map Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-4pgrey rounded-xl lg:p-12 p-6">
          <h2 className="lg:text-[60px] text-[45px] leading-[50px] lg:px-0 lg:leading-[60px] uppercase font-bold">Serving Glen Burnie   
          <span className="lg:text-[65px] text-4pblue block"> Food Trucks Since 2021</span></h2>
          <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-4 lg:w-[50rem]">At 4Print, we have been transforming mobile food vehicles with premium vinyl applications since our establishment. Our crew enthusiastically supports Glen Burnie's thriving food truck community, delivering custom wraps, menu displays, and mobile restaurant branding that enhances recognition and customer attraction.</p>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full lg:pt-8 pt-8 pb-4 lg:pb-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus" width="550" height="780" style={{border:0}} allowFullScreen="" className="rounded-xl shadow-usual lg:w-[550px] w-[340px] lg:h-[780px] h-[550px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="lg:w-6/12 w-full">
              <p className="leading-[23px] lg:ps-12 lg:pe-0 pt-4 lg:pt-0 lg:pt-6 lg:pe-8 pb-8 lg:pb-0">Located in Glen Burnie, MD, we provide mobile installations within a 50-mile service area, based on your food truck's dimensions and position. Whether you're a solo food truck operator or coordinating multiple mobile restaurants, we guarantee convenience and outstanding outcomes by delivering our services to your commissary or preferred location as required.</p>
              <div className="px-8 lg:pt-6 lg:pb-8 bg-white lg:mt-6 lg:ms-12 lg:me-0 rounded-xl shadow-usual">
                <p className="text-[22px] font-semibold pb-4"> Contact us Today!</p>
                <ContactForm />
              </div>
            </div>
          </div>
          <p className="text-center lg:px-24 leading-[23px] lg:pe-2 pt-8 lg:pt-12 lg:pe-8">If your food truck functions beyond these regions or in Washington D.C. or Northern Virginia, we might still accommodate your requirements. We invite mobile food operators from across the DMV region! Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a> to discuss your food truck venture and service area.</p>
        </div>
      </div>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap">
          <div className="lg:w-6/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[45px] text-[42px] lg:leading-[55px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why Select 4Print 
            <span className="lg:text-[65px] lg:leading-[65px] text-4pblue block"> for Food Truck Wraps in Maryland?</span></h2>
            <p className="lg:pt-8">At 4Print, we focus on premium food truck wraps that convert standard vehicles into unforgettable culinary attractions. Since 2021, we've assisted mobile food operators across all specialties distinguish themselves with professional designs, accurate installations, and commercial-grade durable materials. Whether you require one wrap or complete fleet branding, we provide appetizing outcomes with careful attention to craftsmanship.</p>
            <div className="lg:w-8/12 w-[340px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Contact us at (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="ps-6 lg:ps-12 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl pt-8 lg:pt-20">
              {FoodTruckGlenBurnieWhyUs.map((data, index) =>{
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
        title1={"Ready to Upgrade Your Food Truck?"}
        title2={"Secure Your Glen Burnie Wrap Today!"}
        text1={"Whether you need comprehensive food truck branding or menu presentation graphics, 4Print represents Glen Burnie's reliable mobile food wrap specialist."}
        text2={'We proudly serve mobile food entrepreneurs throughout Glen Burnie and can support food truck businesses in Washington D.C. and Virginia.'} 
      >
        <div className="flex flex-wrap">
          <div className="w-full">Call us today or email us to start your food truck makeover!</div>
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
        <div className="flex flex-wrap bg-4pblack rounded-2xl lg:pt-16 lg:pb-20 lg:min-h-[1300px] lg:h-[910px] ">
          <div className="lg:w-4/12 w-full justify-items-center content-top lg:pt-32">
            <h2 className="text-transparent stroke-[2px] stroke-white font-black lg:text-[178px] text-[105px] lg:transform lg:-rotate-180 stroke4p italic tracking-tighter ">FAQ's</h2>
          </div>

          <div className="lg:w-8/12 w-full lg:pe-24 px-8 py-8 lg:py-0 ">
          <h3 className="text-white lg:text-[40px] font-semibold">Food Truck Wrapping Frequently Asked Questions</h3>
          <p className="text-white pb-8">Discover answers to typical inquiries about food truck wraps in Glen Burnie, MD and understand longevity, pricing, upkeep, and factors unique to mobile food service operations.</p>
            <FAQs faqsData={FoodTruckGlenBurnieFAQs} />
          </div>
        </div>
      </div>
    </>
  )
};

export default FoodWrapGlenBuenie;
