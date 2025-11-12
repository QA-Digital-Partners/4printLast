import Button4P from "@/app/components/Button";
import CitiesOnMapSEO from "@/app/components/CitiesOnMap";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import FAQs from "@/app/components/FAQS";
import FAQSchema from "@/app/components/FAQSChema";
import ReviewSection from "@/app/components/ReviewSection";
import { CWMMapCitiesDecals, CWMServicesOptionsDecals1, CWMServicesOptionsDecals2, CWMWhyUsDecals, DecalsWrapFAQs, OurProcessDecalsWarp} from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Commercial Vehicle Lettering & Decals in MD - 4Print",
  description: "Get high-quality commercial vehicle lettering & decals in Maryland. Expert design, certified installation & fast service from 4Print. Contact us today!",
};


const VansWrapMaryland = (props) => {
  return (
    <>

      {/******************  FAQ Schema ****************************/}
      <FAQSchema faqs={DecalsWrapFAQs} />

      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap z-10">
          <div className="lg:w-6/12 w-full relative lg:z-20 px-6 lg:px-0 lg:pt-4">
            <h1 className="lg:text-[35px] text-[45px] font-bold uppercase lg:leading-[60px] leading-[45px] lg:pb-8 lg:me-[-450px]">Commercial Vehicle Lettering & Decals in Maryland<br /> 
                <span className="lg:text-[78px] text-4pblue">Professional Branding</span> <br /> 
                <span className="lg:text-[82px] text-4pred"> for Your Fleet</span></h1>

            <p className="leading-[23px] lg:pe-0 pt-4 lg:pt-0">Looking for commercial vehicle lettering & decals in Maryland to enhance your business presence on the road? At 4Print, we specialize in custom vehicle lettering and professional decal applications that transform your fleet into effective mobile advertising platforms.</p>
            <p className="leading-[23px] lg:pe-2 pt-4 ">Whether you operate a single commercial vehicle or manage an entire fleet, our premium vinyl lettering and decals deliver exceptional durability, professional business-focused designs, and expert installation services.</p>

            <div className="flex flex-wrap gap-4 justify-center py-4 lg:pt-4">  
              <div className="lg:w-[30%] w-[45%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-0 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-8">Fast Production</p>
              </div>
              <div className="lg:w-[30%] w-[45%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-0 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">Expert Application </p>
              </div>
              <div className="lg:w-[30%] w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-12">Custom Lettering</p>
              </div>
            </div>
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
        <div className="w-full hero-banner-lettering-decals-wrap lg:h-[425px] h-2/6 lg:mt-[-150px]"></div>
        </div>
      </div>

      {/****************** Services & Options  Section ****************************/}
      <div className="lg:mb-8 mb-16 pb-0 lg:pb-0">
        <div className="container lg:pb-4 pt-4 pt-24">
          <h2 className="lg:text-[65px] text-[45px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Commercial Vehicle Lettering  
          <span className="lg:text-[80px] text-4pblue block">& Decal Services for Business Branding</span></h2>

          <div className="flex flex-wrap lg:pt-4 px-6 lg:px-0">
            <div className="lg:w-5/12"></div>
            <div className="lg:w-7/12 w-full lg:ps-8">
              <p className="leading-[23px]">At 4Print, we provide comprehensive commercial vehicle lettering and decal solutions to help businesses maximize road visibility and create a memorable brand presence. From complete vehicle lettering packages to strategically designed company decals, we deliver professional graphics that make lasting customer impressions.</p>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0 pt-12 lg:pt-0" >

            <div className="lg:w-5/12 lg:pt-32 lg:order-1 order-3">
                <Image
                src="/images/lettering-decals-wrap.webp"
                alt="Commercial Lettering and Decals wrap in maryland"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/lettering-decals-wrap.webp 768w, /images/lettering-decals-wrap.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:mt-[-160px] lg:w-[536px] lg:min-w-[400px]"
                />
            </div>

            <div className="lg:w-7/12 w-full pb-2 lg:pb-0 lg:pt-4 lg:ps-8 lg:order-2 order-1" id="personal">
              <p className="text-4pred font-bold text-[35px] leading-[35px] py-4">Commercial Vehicle Lettering & Decals for Business Operations</p>
              <p className="leading-[23px] ">For business owners across all industries, our commercial vehicle lettering and decals offer a cost-effective approach to promote your services while maintaining a professional appearance. Whether you need lettering for a single commercial vehicle or decals for an entire fleet, we ensure high-quality graphics that perfectly represent your business identity.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 pt-8">
                {CWMServicesOptionsDecals1.map((data, index) => {
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
                  {CWMServicesOptionsDecals2.map((data, index) => {
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
                <p className="leading-[23px] lg:pt-16 text-center">For business owners looking to expand their customer reach with commercial vehicle lettering & decals in Maryland, our specialized solutions offer a high-visibility, cost-effective marketing approach. Contact us at <a href="tel:+14439981717" className="underline text-4pred hover:text-4pblue">(443) 998-1717</a>  to discuss your commercial vehicle branding vision today!</p>
            </div>

          </div>
        </div>
      </div>

      {/****************** Our Commercial Wrap Process Secion ****************************/}
      <section className="">
        <div className="container lg:mb-[100px] mb-16">
          <div className="flex flex-wrap px-4 lg:px-0 pb-12 lg:pb-0">
            <h2 className="lg:w-7/12 font-bold lg:text-[55px] lg:leading-[80px] text-[55px] leading-[65px] mb-8 lg:mb-0">OUR COMMERCIAL <span className="lg:text-[80px] text-4pblue block">VEHICLE LETTERING & DECAL PROCESS </span></h2>
            <p className="lg:w-5/12">At 4Print, we believe the best results come from a clear, proven process. From the first consultation to the final installation, our team guides you through every step, ensuring your commercial vehicle lettering and decals are customized, durable, and impactful.</p>
          </div>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:px-16 lg:mt-16 px-8">
            {OurProcessDecalsWarp.map((data, index) => {
              return(
                <div key={index} className="relative lg:col-span-6 col-span-1 lg:min-h-[]">
                  <div className="absolute top-[-12px] left-[-17px] lg:w-[176px] w-[120px] lg:h-[90px] h-[60px] bg-4pred rounded-tl-2xl"></div>
                  <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual min-h-[105px] lg:min-h-[280px] content-center w-full">
                    <p className="text-[22px] font-semibold text-4pblue">{data.title}</p>
                    <p className="">{data.desc}</p>
                    <p className="text-[250px] leading-[100px] italic font-black text-[#3149BC33] absolute bottom-[38px] right-[25px]">{index+1}</p>
                  </div>
                </div>
                )
            })}
            </div>      
        </div>
      </section>

      {/****************** Map Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-4pgrey rounded-xl lg:p-12 p-8">
          <h2 className="lg:text-[60px] text-[45px] leading-[50px] lg:px-0 lg:leading-[60px] uppercase font-bold">Providing Commercial Vehicle Lettering & Decals  
          <span className="lg:text-[65px] text-4pblue block">in Maryland Since 2021</span></h2>
          <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-4 lg:w-[50rem]">At 4Print, we have been enhancing commercial vehicles with premium vinyl lettering and decals since we opened our doors. Our team proudly serves Maryland's diverse business community, providing custom lettering, company decals, and mobile business branding that improve visibility and customer appeal.</p>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-6 lg:pe-8">Based in Glen Burnie, MD, we offer on-site installations within a 50-mile radius, depending on your commercial vehicle's size and location. Whether you're an independent contractor or managing a fleet of commercial vehicles, we ensure convenience and exceptional results by bringing our expertise to your facility or location when needed.</p>
              <p className="text-[22px] font-semibold pb-6 lg:pt-6">MD Counties We Can Travel To</p>
              <CitiesOnMapSEO cities={CWMMapCitiesDecals}/>
              
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus" width="550" height="730" style={{border:0}} allowFullScreen="" className="rounded-xl shadow-usual lg:w-[550px] w-[340px] lg:h-[730px] h-[550px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <p className="text-center lg:px-24 leading-[23px] lg:pe-2 pt-8 lg:pt-12 lg:pe-8">If your commercial vehicle operates outside these counties or in Washington D.C. or Northern Virginia, we may still be able to accommodate your needs. We welcome business owners from throughout the DMV area! Contact us at <a href="tel:+14439981717" className="underline text-4pred hover:text-4pblue">(443) 998-1717</a>  to discuss your commercial vehicle lettering and decal project and location.</p>
        </div>
      </div>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap">
          <div className="lg:w-6/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[45px] text-[45px] lg:leading-[55px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why Choose 4Print
            <span className="lg:text-[70px] lg:leading-[70px] text-4pblue block"> for Commercial Vehicle Lettering & Decals in Maryland?</span></h2>
            <p className="lg:pt-8">At 4Print, we specialize in high-quality commercial vehicle lettering and decals that transform ordinary vehicles into memorable business assets. Since 2021, we've helped business owners of all industries stand out with expert designs, precision installations, and commercial-grade, durable materials. Whether you need a single vehicle lettered or a full fleet transformation, we deliver professional results with meticulous attention to detail.</p>
            <div className="lg:w-8/12 w-[34 0px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Contact us at (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="lg:ps-12 ps-6 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl lg:pt-20 pt-8">
              {CWMWhyUsDecals.map((data, index) =>{
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
        title1={"Ready to Transform Your Commercial Vehicle?"}
        title2={"Get Your Maryland Lettering & Decals Today!"}
        text1={"Whether you need complete commercial vehicle lettering or company decal graphics, 4Print is Maryland's trusted business graphics expert."}
        text2={'We proudly serve business owners throughout Maryland and can assist commercial operations in Washington, D.C., and Virginia.'} 
      >
        <div className="flex flex-wrap">
          <div className="w-full">Call us today or email us to begin your commercial vehicle transformation!</div>
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
        <div className="flex flex-wrap bg-4pblack rounded-2xl lg:pt-16 lg:pb-20 lg:min-h-[1200px] lg:h-[710px]">
          <div className="lg:w-4/12 w-full justify-items-center content-top lg:pt-32">
            <h2 className="text-transparent stroke-[2px] stroke-white font-black lg:text-[178px] text-[105px] lg:transform lg:-rotate-180 stroke4p italic tracking-tighter ">FAQ's</h2>
          </div>

          <div className="lg:w-8/12 w-full lg:pe-24 px-8 py-8 lg:py-0 ">
          <h3 className="text-white lg:text-[40px] font-semibold">Commercial Vehicle Lettering & Decal FAQs</h3>
          <p className="text-white pb-8">Find answers to common questions about commercial vehicle lettering & decals in Maryland and learn about durability, cost, maintenance, and considerations specific to commercial vehicle applications.</p>
            <FAQs faqsData={DecalsWrapFAQs} />
          </div>
        </div>
      </div>
    </>
  )
};

export default VansWrapMaryland;
