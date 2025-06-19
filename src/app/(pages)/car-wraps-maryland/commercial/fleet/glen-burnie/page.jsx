import Button4P from "@/app/components/Button";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import FAQs from "@/app/components/FAQS";
import FAQSchema from "@/app/components/FAQSChema";
import ReviewSection from "@/app/components/ReviewSection";
import {  FleetWrapGlenBurnie1, FleetWrapGlenBurnie2, FleetWrapGlenBurnieFAQs, FleetWrapGlenBurnieWhy } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Quality Fleet Wraps in Glen Burnie, MD - 4Print",
  description: "Get noticed. We offer high-quality fleet wraps in Glen Burnie, MD. Contact us today and experience the 4Print difference.",
};


const FleeWrapGlenBurnie = (props) => {
  return (
    <>
      {/******************  FAQ Schema ****************************/}
      <FAQSchema faqs={FleetWrapGlenBurnieFAQs} />

      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap z-10">
          <div className="lg:w-6/12 w-full relative lg:z-20 px-6 lg:px-0 lg:pt-4">
            <h1 className="lg:text-[40px] text-[45px] font-bold uppercase lg:leading-[60px] leading-[45px] lg:pb-2 lg:me-[-600px]">Fleet Wraps inGlen Burnie, MD<br /> 
                <span className="lg:text-[80px] text-4pblue">Your Business Visibility </span> <br /> 
                <span className="lg:text-[72px] text-4pred"> on Maryland Roads</span></h1>

            <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-8">Need fleet wraps in Glen Burnie, MD to boost your company's mobile marketing presence? 4Print delivers exceptional commercial vehicle graphics that convert your business fleet into dynamic advertising platforms. From small local businesses to extensive commercial operations, our high-grade vinyl wrapping solutions provide outstanding longevity, brilliant colors, and expert application services.</p>
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
          <h2 className="lg:text-[65px] text-[45px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Professional Fleet Wrap Services & Corporate
          <span className="lg:text-[80px] text-4pblue block"> Vehicle Branding</span></h2>

          <div className="flex flex-wrap lg:pt-4 px-6 lg:px-0">
            <div className="lg:w-5/12"></div>
            <div className="lg:w-7/12 w-full lg:ps-8">
              <p className="leading-[23px]">4Print provides comprehensive fleet wrap services designed to help Glen Burnie businesses maximize road visibility and create a distinguished professional appearance. From complete vehicle transformations to targeted decal applications, we produce striking visual results that create memorable brand impressions.</p>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0 pt-12 lg:pt-0" >

            <div className="lg:w-5/12 lg:pt-32 lg:order-1 order-3">
                <Image
                src="/images/commercial-fleet-wrap.webp"
                alt="Commercial fleet wrap in Glen Burnie"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/commercial-fleet-wrap.webp 768w, /images/commercial-fleet-wrap.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:mt-[-160px] lg:w-[536px] lg:min-w-[400px]"
                />
            </div>

            <div className="lg:w-7/12 w-full pb-2 lg:pb-0 lg:pt-4 lg:ps-8 lg:order-2 order-1" id="personal">
              <p className="text-4pred font-bold text-[35px] leading-[35px] py-4">Commercial Fleet Graphics & Vehicle Branding Solutions</p>
              <p className="leading-[23px] ">Businesses throughout Glen Burnie benefit from our fleet wrapping services as an economical method to advertise services while safeguarding vehicle paint. Whether branding a single delivery truck or outfitting an entire commercial fleet, we guarantee premium graphics that perfectly complement your corporate identity.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 pt-8">
                {FleetWrapGlenBurnie1.map((data, index) => {
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
                  {FleetWrapGlenBurnie2.map((data, index) => {
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
                <p className="leading-[23px] lg:pt-16 text-center">Glen Burnie businesses seeking expanded market reach through fleet wraps benefit from our commercial solutions offering high-impact, budget-friendly marketing approaches. Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a> to explore your fleet branding opportunities today!</p>
            </div>

          </div>
        </div>
      </div>

      {/****************** Map Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-4pgrey rounded-xl lg:p-12 p-6">
          <h2 className="lg:text-[60px] text-[45px] leading-[50px] lg:px-0 lg:leading-[60px] uppercase font-bold">Serving Glen Burnie,  
          <span className="lg:text-[65px] text-4pblue block"> Maryland Since 2021</span></h2>
          <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-4 lg:w-[50rem]">4Print has delivered superior vinyl wrap solutions for Glen Burnie vehicles since 2021. Our experienced team serves the Glen Burnie community with custom vehicle graphics, fleet branding, and commercial vehicle wraps that enhance visual appeal and brand recognition.</p>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full lg:pt-8 pt-8 pb-4 lg:pb-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus" width="550" height="730" style={{border:0}} allowFullScreen="" className="rounded-xl shadow-usual lg:w-[550px] w-[340px] lg:h-[730px] h-[550px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="lg:w-6/12 w-full">
              <p className="leading-[23px] lg:ps-12 lg:pe-0 pt-4 lg:pt-0 lg:pt-6 lg:pe-8 pb-8 lg:pb-0">Operating from our Glen Burnie, MD headquarters, we provide mobile installation services throughout a 50-mile service area, project permitting. Whether you own personal vehicles or oversee business fleets, we guarantee convenience and professional outcomes by delivering our specialized services directly to your preferred location.</p>
              <div className="px-8 lg:pt-6 lg:pb-8 bg-white lg:mt-6 lg:ms-12 lg:me-0 rounded-xl shadow-usual">
                <p className="text-[22px] font-semibold pb-4"> Contact us Today!</p>
                <ContactForm />
              </div>
            </div>
          </div>
          <p className="text-center lg:px-24 leading-[23px] lg:pe-2 pt-8 lg:pt-12 lg:pe-8">Customers located beyond these counties or in Washington D.C. and Northern Virginia may still receive our services. We enthusiastically welcome clients throughout the greater DMV region!  Contact us at <a href="tel:+14439981717" className="underline text-4pred">(443) 998-1717</a> to discuss your project requirements and location logistics.</p>
        </div>
      </div>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap">
          <div className="lg:w-6/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[45px] text-[45px] lg:leading-[55px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why Select 4Print 
            <span className="lg:text-[70px] lg:leading-[70px] text-4pblue block"> for Fleet Wraps in Glen Burnie, MD?</span></h2>
            <p className="lg:pt-8">4Print specializes in premium fleet wraps that convert vehicles into effective branding assets. Since 2021, we've assisted Glen Burnie businesses of every scale in achieving standout results through expert design work, precise installations, and superior materials. Whether requiring individual wraps or complete fleet makeovers, we produce impressive outcomes with exceptional attention to craftsmanship.</p>
            <div className="lg:w-8/12 w-[34 0px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Contact us at (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="lg:ps-12 ps-6 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl lg:pt-20 pt-8">
              {FleetWrapGlenBurnieWhy.map((data, index) =>{
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
        title1={"Ready to Upgrade Your Fleet?"}
        title2={"Secure Your Glen Burnie Wrap Installation Today!"}
        text1={"Whether requiring fleet branding or individual vehicle wraps, 4Print stands as Glen Burnie's most trusted specialist."}
        text2={'We proudly serve Glen Burnie and surrounding Maryland communities, plus clients in Washington D.C. and Virginia.'} 
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
          <h3 className="text-white lg:text-[40px] font-semibold">Fleet Wrapping Frequently Asked Questions</h3>
          <p className="text-white pb-8">Discover answers to popular questions about fleet wraps in Glen Burnie, MD and learn about longevity, pricing, care requirements, and additional details.</p>
            <FAQs faqsData={FleetWrapGlenBurnieFAQs} />
          </div>
        </div>
      </div>
    </>
  )
};

export default FleeWrapGlenBurnie;
