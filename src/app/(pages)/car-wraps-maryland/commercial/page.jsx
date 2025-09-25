import Button4P from "@/app/components/Button";
import CitiesOnMapSEO from "@/app/components/CitiesOnMap";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import FAQs from "@/app/components/FAQS";
import FAQSchema from "@/app/components/FAQSChema";
import ReviewSection from "@/app/components/ReviewSection";
import { CommercialMapCitiesCommercial, CommercialServices1, CommercialServices2, CommercialWhyUs, CommercialFAQs } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Get Noticed - Commercial Vehicle Wraps in Maryland",
  description: "Get noticed on the road with high-quality commercial vehicle wraps in Maryland. Custom designs, fast turnaround, and expert installation by 4Print.",
};


const Commercial = (props) => {
  return (
    <>
      {/******************  FAQ Schema ****************************/}
      <FAQSchema faqs={CommercialFAQs} />

      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap z-10">
          <div className="lg:w-6/12 w-full relative lg:z-20 px-6 lg:px-0 lg:pt-4">
            <h1 className="lg:text-[40px] text-[30px] font-bold uppercase lg:leading-[60px] leading-[35px] lg:pb-8 lg:me-[-450px]">Commercial Vehicle Wraps in Maryland:  <br /> 
                <span className="lg:text-[80px] text-[50px] text-4pblue">Transform Your </span> <br /> 
                <span className="lg:text-[72px] text-[50px] text-4pred">Business Fleet into Mobile Billboards</span></h1>

            <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pb-8">Looking to boost your business visibility throughout Maryland? At 4Print, we specialize in premium commercial vehicle wraps that convert your company vehicles into powerful advertising assets. Our custom graphics solutions serve businesses of all sizes, from small local companies to large enterprises with extensive commercial fleets. Our professional-grade vinyl wraps deliver exceptional durability, vibrant color reproduction, and expert installation.</p>
            
            <div className="flex flex-wrap gap-4 justify-center py-4 lg:py-0">
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

            <div className="flex flex-wrap pb-8 lg:pb-0">
              <div className="lg:w-5/12 w-[370px] mx-auto lg:mx-0 mt-4 lg:mt-6 ">
                <Button4P buttonText={'Call (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-blue-to-red me-4'} iconOption={7} textColor={'text-white ps-3'}/>
              </div>
              <div className="lg:w-7/12 w-[370px] mx-auto lg:mx-0 mt-6 lg:mt-6">
                <Button4P buttonText={'Email sales@4printus.com'} buttonLink={'mailto:sales@4printus.com'} buttonBgAnimation={'btn-blue-to-red lg:ms-4'} iconOption={7} textColor={'text-white ps-3'}/>
              </div>
            </div>
          </div>

          <div className="lg:w-6/12 w-full justify-items-end">
            <Image
              src="/images/Commercial Vehicle Wraps in Maryland.webp"
              alt="Commercial Vehicle Wraps in Maryland"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/Commercial Vehicle Wraps in Maryland.webp 768w, /images/Commercial Vehicle Wraps in Maryland.webp 1024w"
              width={450}
              height={652}
              className="z-0 relative lg:mt-32 lg:w-[450px] lg:min-w-[400px]"
            />
          </div>
        </div>
      </div>

      {/****************** Services & Options  Section ****************************/}
      <div className="lg:mb-8 mb-16 pb-0 lg:pb-0">
        <div className="container lg:pb-4 pt-4 pt-24">
          <h2 className="lg:text-[55px] text-[44px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Commercial Vehicle Wrap Solutions &   
          <span className="lg:text-[77px] text-4pblue block">Business Branding Options</span></h2>

          <div className="flex flex-wrap lg:pt-4 px-6 lg:px-0">
            <div className="lg:w-5/12"></div>
            <div className="lg:w-7/12 w-full lg:ps-8">
              <p className="leading-[23px]">At 4Print, we deliver customized commercial vehicle wrap solutions designed to maximize your business visibility and establish a professional image. From complete vehicle transformations to strategic placement of brand elements, we create eye-catching commercial wraps that leave lasting impressions.</p>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0 pt-12 lg:pt-0" >

            <div className="lg:w-5/12 lg:pt-32 lg:order-1 order-3">
                <Image
                src="/images/Commercial-Vehicle-Wraps.webp"
                alt="Commercial Vehicle Wraps"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/Commercial-Vehicle-Wraps.webp 768w, /images/Commercial-Vehicle-Wraps.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:mt-[-160px] lg:w-[536px] lg:min-w-[400px]"
                />
            </div>

            <div className="lg:w-7/12 w-full pb-2 lg:pb-0 lg:pt-4 lg:ps-8 lg:order-2 order-1" id="personal">
              <p className="text-4pred font-bold text-[35px] leading-[35px] py-4">Commercial Vehicle Wraps & Graphics for Maryland Businesses</p>
              <p className="leading-[23px] ">Businesses throughout Maryland benefit from our <b>commercial vehicle wraps</b> as a cost-effective marketing strategy while simultaneously protecting vehicle surfaces. Whether you require branding for a single commercial van or your entire business fleet, we ensure premium-quality graphics that perfectly represent your brand identity.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 pt-8">
                {CommercialServices1.map((data, index) => {
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
                  {CommercialServices2.map((data, index) => {
                  return (
                    <div key={index} className={`relative`}>
                      <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full min-h-[220px] py-4 `}>
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
                <p className="leading-[23px] lg:pt-16 text-center">For Maryland businesses seeking to expand their reach with commercial vehicle wraps, our solutions offer a high-visibility, economical marketing approach. Contact us at <a href="tel:+14439981717" className="underline text-4pred hover:text-4pblue">(443) 998-1717</a> to discuss your commercial fleet branding requirements today!</p>
            </div>

          </div>
        </div>
      </div>

      {/****************** Map Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-4pgrey rounded-xl p-6 lg:p-12">
          <h2 className="lg:text-[55px] text-[45px] leading-[50px] lg:px-0 lg:leading-[60px] uppercase font-bold">Serving Maryland Commercial   
          <span className="lg:text-[63px] text-4pblue block">Vehicle Wrap Needs Since 2021</span></h2>
          <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-4 lg:w-[50rem]">At 4Print, we've been enhancing commercial vehicles with superior vinyl wraps since 2021. Our team proudly serves Maryland businesses, providing custom commercial wraps, fleet graphics, and business vehicle branding that enhance visibility and professional appearance.</p>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-6 lg:pe-8">Based in Glen Burnie, MD, we provide on-location installations within a 50-mile radius, depending on project requirements. Whether you're an individual business owner or managing a commercial fleet, we ensure convenience and professional results by bringing our expertise directly to your location when needed.</p>
              <p className="text-[22px] font-semibold pb-6 lg:pt-6">Maryland Counties We Service</p>
              <CitiesOnMapSEO cities={CommercialMapCitiesCommercial} />
              
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus" width="550" height="730" style={{border:0}} allowFullScreen="" className="rounded-xl shadow-usual lg:w-[550px] w-[340px] lg:h-[710px] h-[550px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <p className="text-center lg:px-24 leading-[23px] lg:pe-2 pt-8 lg:pt-12 lg:pe-8">If your business is located outside these counties or in Washington, D.C., or Northern Virginia, we may still be able to accommodate your commercial vehicle wrap needs. We welcome all clients throughout the DMV region! Contact us at <a href="tel:+14439981717" className="underline text-4pred hover:text-4pblue">(443) 998-1717</a> to discuss your commercial vehicle project and location.</p>
        </div>
      </div>


      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap">
          <div className="lg:w-6/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[40px] text-[45px] lg:leading-[55px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why Select 4Print for
            <span className="lg:text-[70px] lg:leading-[70px] text-4pblue block"> Commercial Vehicle Wraps in Maryland?</span></h2>
            <p className="lg:pt-8">At 4Print, we specialize in high-quality commercial vehicle wraps that transform business vehicles into effective marketing tools. Since 2021, we've assisted businesses of all sizes in standing out with expert designs, precision installations, and durable materials. Whether you need a single commercial wrap or a complete fleet transformation, we deliver impactful results with unmatched attention to detail.</p>
            <div className="lg:w-8/12 w-[380px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Contact us at (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="ps-12 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl pt-32 mt-[-40px]">
              {CommercialWhyUs.map((data, index) =>{
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
        title1={"Ready to Transform Your Commercial Fleet?"}
        title2={"Get Your Maryland Vehicle Wrap Today!"}
        text1={"Whether you need comprehensive fleet branding or individual commercial vehicle wraps, 4Print is Maryland's trusted commercial vehicle wrap expert."}
        text2={'We proudly serve businesses throughout Maryland and can assist commercial clients in Washington, D.C., and Virginia.'} 
      >
        <div className="flex flex-wrap">
          <div className="w-full">Call us today or email us to get started!</div>
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
          <h3 className="text-white lg:text-[40px] font-semibold">Commercial Vehicle Wrapping FAQs</h3>
          <p className="text-white pb-8">Find answers to common questions about commercial vehicle wraps in Maryland and learn about durability, cost, maintenance, and more.</p>
            <FAQs faqsData={CommercialFAQs} />
          </div>
        </div>
      </div>
    </>
  )
};

export default Commercial;
