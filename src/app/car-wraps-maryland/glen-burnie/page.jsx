import Button4P from "@/app/components/Button";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import FAQs from "@/app/components/FAQS";
import ReviewSection from "@/app/components/ReviewSection";
import { CWGBWhyUs, CWMFAQs, CWMServicesOptionsCommercial1, CWMServicesOptionsCommercial2, CWMServicesOptionsPersonal1, CWMServicesOptionsPersonal2 } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Quality Car Wraps in Glen Burnie, MD - 4Print",
  description: "Get high-quality car wraps & graphics in Glen Burnie with 4Print. Custom vehicle wraps, fleet graphics, and branding solutions for all businesses!",
};

const CarWrapsGlenBurnie = (props) => {
  return (
    <>
      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap lg:flex-nowrap z-10">
          <div className="lg:w-7/12 w-full relative lg:z-20 px-6 lg:px-0 lg:pt-20">
            <h1 className="lg:text-[60pxpx] text-[45px] font-bold uppercase lg:leading-[60px] leading-[45px] lg:pb-8 lg:me-[-250px]">Car Wraps in Glen Burnie, MD <br /> 
                <span className="lg:text-[80px] text-4pblue">Transform Your Vehicle</span> <br /> 
                <span className="lg:text-[72px] text-4pred"> with Vinyl Wraps</span></h1>
            <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0">Looking for high-quality car wraps in Glen Burnie, MD? At 4Print, we specialize in custom vehicle wraps that enhance the look of your car, truck, or business fleet. Whether you’re a car enthusiast wanting a fresh new look or a business owner looking to advertise on the road, we provide top-tier vinyl wraps that are durable, eye-catching, and professionally installed.</p>
          </div>
          <div className="lg:w-6/12 mt-8 lg:mt-0 w-full justify-items-end">
          <div className="absolute lg:w-[25vw] bg-4pred top-0 right-0 lg:min-h-[52vh] z-[3]"></div>
            <Image
              src="/images/custom-car-wrap-banner.webp"
              alt="Banner Image Commercial Wrapping"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/custom-car-wrap-banner.webp 768w, /images/custom-car-wrap-banner.webp 1024w"
              width={536}
              height={652}
              className="z-10 relative"
            />
          </div>
        </div>
        <div className="container z-[10] lg:mt-[-90px] relative">
          <div className="flex flex-wrap">
            <div className="lg:w-8/12 w-full flex flex-wrap">
              <div className="lg:w-2/12 w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-6 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">Expert Installation</p>  
              </div>
              <div className="lg:w-2/12 w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-6 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">High-Quality Vinyl</p>  
              </div>
              <div className="lg:w-2/12 w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-6 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">Custom Designs</p>
              </div>
              <div className="lg:w-2/12 w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-6 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-12">Fast Turnaround</p>
              </div>
              <div className="lg:w-2/12 w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-6 me-2">
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-12">Local Maryland Experts</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:w-3/12 w-[370px] mx-auto lg:mx-0 mt-4 lg:mt-6 ">
              <Button4P buttonText={'Call (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue me-4'} iconOption={5} textColor={'text-white ps-3'}/>
            </div>
            <div className="lg:w-4/12 w-[370px] mx-auto lg:mx-0 mt-6 lg:mt-6">
              <Button4P buttonText={'Email sales@4printus.com'} buttonLink={'mailto:sales@4printus.com'} buttonBgAnimation={'btn-blue-to-red lg:ms-4'} iconOption={8} textColor={'text-white ps-3'}/>
            </div>
          </div>
        </div>
      </div>

      {/****************** Services & Options  Section ****************************/}
      <div className="lg:mb-8 mb-16 pb-0 lg:pb-0">
        <div className="container lg:pb-16 pt-4 pt-24">
          <h2 className="lg:text-[70px] text-[45px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Our Glen Burnie Car Wrap 
          <span className="lg:text-[80px] text-4pblue block">Services & Options</span></h2>

          <div className="flex flex-wrap lg:pt-16 px-6 lg:px-0">
            <div className="lg:w-1/2 w-full">
              <p className="leading-[23px]">At 4Print, we offer a variety of car wrap solutions to fit your needs. From full-color changes to business branding, our custom vinyl wraps deliver outstanding results.</p>
            </div>

            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <div className="lg:w-8/12 mx-auto">
                <Button4P buttonText={'Personal Vehicles Wraps & Services'} buttonLink={'#personal'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ps-3'}/>
              </div>
              <div className="lg:w-8/12 mt-12 mx-auto">
                <Button4P buttonText={'Commercial Vehicle Wraps & Services'} buttonLink={'#commercial'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ps-3'}/>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0 pt-12 lg:pt-0" >
            <div className="lg:w-7/12 w-full pb-2 lg:pb-0 lg:pt-16 lg:pe-8 lg:order-1 order-1" id="personal">
              <p className="text-4pred font-bold text-[35px] leading-[35px] py-4">Services for Personal Vehicle Owners</p>
              <p className="leading-[23px] ">For personal vehicle owners, our wraps focus on style, customization, and paint protection. Whether you want to completely change the look of your car or add subtle accents, we offer high-quality solutions tailored to your vision.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12 pt-8">
                {CWMServicesOptionsPersonal1.map((data, index) => {
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
            <div className="lg:w-5/12 lg:pt-32 lg:order-2 order-3">
                <Image
                src="/images/personal-services-cwm.webp"
                alt="Banner Image Commercial Wrapping"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/personal-services-cwm.webp 768w, /images/personal-services-cwm.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:ms-[-120px] lg:w-[536px] lg:min-w-[630px]"
                />
            </div>

            <div className="w-12/12 pt-4 lg:pt-0 lg:order-3 order-2" >
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:pt-6">
                {CWMServicesOptionsPersonal2.map((data, index) => {
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


            <div className="lg:w-5/12 lg:pt-36 lg:order-4 order-6">
                <Image
                src="/images/commercial-services-crm.webp"
                alt="Banner Image Commercial Wrapping"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/commercial-services-crm.webp 768w, /images/commercial-services-crm.webp 1024w"
                width={536}
                height={652}
                className="z-0 relative lg:ms-[-15px] lg:me-[-120px] lg:w-[536px] lg:min-w-[620px]"
                />
            </div>

            <div className="lg:w-7/12 w-full pb-6 lg:pb-0 lg:pt-16 pt-6 lg:ps-8 lg:order-5 order-4" id="commercial">
              <p className="text-4pred font-bold text-[35px] py-4 leading-[35px]">Services for Commercial Vehicle Owners</p>
              <p className="leading-[23px] pb-8 lg:pb-0">For businesses, our wraps are designed to increase brand visibility, attract customers, and protect fleet vehicles. Whether you need a single branded car or an entire fleet wrapped, we provide professional, durable solutions for long-lasting results.</p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-12">
                {CWMServicesOptionsCommercial1.map((data, index) => {
                    return (
                        <div key={index} className={`relative`}>
                    <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full min-h-[180px] py-4`}>
                    <p className="text-center leading-[23px] font-bold px-4 text-4pblack">{data.title}</p>
                    <p className="text-center leading-[23px] px-4 text-4pblack">{data.text}</p>
                    </div>
                  </div>
                )
            })}
              </div>
            </div>
            <div className="w-12/12 lg:order-6 order-5 pb-8 lg:pb-0" >
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:pt-6">
                {CWMServicesOptionsCommercial2.map((data, index) => {
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

            <div className="w-full lg:px-60 lg:order-7 order-7 pt-8 lg:pt-0">
                <p className="leading-[23px] lg:pt-16 text-center">For businesses looking to expand their mobile advertising reach, our commercial wraps provide a cost-effective and high-impact marketing solution. Contact us at <a href="tel+14439981717" className="underline text-4pred">(443) 998-1717</a> for a consultation on your custom vehicle wrap project.</p>
            </div>

          </div>
        </div>
      </div>

      {/****************** Map Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="bg-4pgrey rounded-xl p-12">
          <h2 className="lg:text-[60px] text-[45px] leading-[50px] lg:px-0 lg:leading-[60px] uppercase font-bold">Serving Glen Burnie,  
          <span className="lg:text-[65px] text-4pblue block"> Maryland Since 2001</span></h2>
          <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0 lg:pt-4 lg:w-[50rem]">At 4Print, we have been transforming vehicles with high-quality vinyl wraps for over two decades. Our team has proudly served customers throughout Maryland, providing expert car wraps, fleet graphics, and custom vehicle wraps that enhance aesthetics and branding.</p>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full lg:pt-8 pt-24">
              <Image
                src="/images/Map-glen-burnie.webp"
                alt="Banner Image Commercial Wrapping"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/Map-glen-burnie.webp 768w, /images/Map-glen-burnie.webp 1024w"
                width={552}
                height={730}
                className="z-0 relative rounded-xl shadow-usual"
              />
            </div>
            <div className="lg:w-6/12 w-full">
              <p className="leading-[23px] lg:ps-12 lg:pe-0 pt-4 lg:pt-0 lg:pt-6 lg:pe-8">We are based in Glen Burnie, MD, and depending on the job, our team can travel to clients within a 50-mile radius for on-site installations. Whether you're a personal vehicle owner or a business with a fleet, we bring our expertise to your location when needed, ensuring convenience and professional results.</p>
              <div className="px-8 lg:pt-6 lg:pb-8 bg-white lg:mt-6 lg:ms-12 lg:me-0 rounded-xl shadow-usual">
                <p className="text-[22px] font-semibold pb-4"> Contact us Today!</p>
                <ContactForm />
              </div>
            </div>
          </div>
          <p className="text-center lg:px-24 leading-[23px] lg:pe-2 pt-8 lg:pt-12 lg:pe-8">If you are outside of Glen Burnie but within Washington D.C. or Northern Virginia, we may still be able to assist you. All customers are welcome to our installations from anywhere in the DMV area! Contact us at <a href="tel+14439981717" className="underline text-4pred">(443) 998-1717</a> to discuss your project and location.</p>
        </div>
      </div>

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap">
          <div className="lg:w-6/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[45px] text-[45px] lg:leading-[55px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why Choose 4Print 
            <span className="lg:text-[70px] lg:leading-[70px] text-4pblue block">for Car Wraps in Glen Burnie, MD?</span></h2>
            <p className="lg:pt-8">At 4Print, we specialize in high-quality <b>car wraps in Glen Burnie, MD</b> that turn cars, trucks, and fleets into powerful marketing tools. Since 2021, we’ve helped businesses of all sizes stand out on the road with expert design, precision installation, and durable materials. Whether you need a single wrap or a full fleet transformation, we deliver impactful results with unmatched attention to detail.</p>
            <div className="lg:w-8/12 w-[380px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Contact us at (443) 998-1717'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="ps-12 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl pt-20">
              {CWGBWhyUs.map((data, index) =>{
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

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/****************** Contact Form  Section ****************************/}
      <ContactFormFooter
        title1={"Ready to Transform Your Vehicle?"}
        title2={"Get Your Glen Burnie Car Wrap Today!"}
        text1={"Whether you need a personal car wrap or a fleet wrap for your business, 4Print is Glen Burnie’s trusted vinyl wrap expert."}
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
        <div className="flex flex-wrap bg-4pblack rounded-2xl lg:pt-16 lg:pb-20 lg:min-h-[910px] lg:h-[710px]">
          <div className="lg:w-4/12 w-full justify-items-center content-top lg:pt-32">
            <h2 className="text-transparent stroke-[2px] stroke-white font-black lg:text-[178px] text-[105px] lg:transform lg:-rotate-180 stroke4p italic tracking-tighter ">FAQ's</h2>
          </div>

          <div className="lg:w-8/12 w-full lg:pe-24 px-8 py-8 lg:py-0 ">
            <p className="text-white pb-8">Get answers to common questions about car wraps in Glen Burnie, MD. Learn about durability, cost, maintenance, and the benefits of vinyl wraps.</p>
            <FAQs faqsData={CWMFAQs} />
          </div>
        </div>
      </div>
    </>
  )
};

export default CarWrapsGlenBurnie;
