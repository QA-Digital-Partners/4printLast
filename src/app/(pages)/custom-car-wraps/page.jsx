export const metadata = {
    title: "Custom Car Wraps | Transform Your Vehicle with 3M Vinyl Wraps in 4Print",
    description: "Custom car wraps with premium 3M vinyl for a flawless, paint-protected finish. Color changes, racing stripes & textured wraps. Get started for $50!",
  };

import React from "react"
import { CustomDesignStripesImages, CustomFullChangeImages, CustomFullVehicleFeatures, CustomGraphicStripesFeatures, CustomTextureSpecial, CustomTextureSpecialLeft, CustomWhyUs, FAQsCustomWrap, MiniMenuCustomWrap, OurProcessCustomWrap } from "@/app/data/data";
import FAQs from "@/app/components/FAQS";
import Button4P from "@/app/components/Button";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import Image from "next/image";
import MiniMenu from "@/app/components/MiniMenu";
import ImageCarousel from "@/app/components/ImageCarousel";
import FAQSchema from "@/app/components/FAQSChema";

const CustomCarWrap = (props) => {
  return (
    <>
      {/******************  FAQ Schema ****************************/}
      <FAQSchema faqs={FAQsCustomWrap} />

      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] mt-[-185px] lg:mb-[100px] mb-16">
        <div className="container flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-7/12 w-full relative lg:z-20 px-6 lg:px-0">
            <h1 className="lg:text-[100px] text-[45px] font-bold uppercase lg:leading-[85px] leading-[55px] lg:pb-8 lg:me-[-250px]">Transform <br /> 
                <span className="lg:text-[80px] text-4pblue">Your Vehicle's </span> <br /> 
                <span className="lg:text-[72px] text-4pred">Look Without Paint</span></h1>
            <p className="leading-[23px] lg:pe-2 pt-4 lg:pt-0">Give your vehicle a stunning new appearance with our premium car wrap services. From complete color transformations to racing stripes and textured finishes, our expert installation using advanced premium materials delivers flawless results that protect your original paint while bringing your vision to life.</p>
            <div className="lg:w-7/12 w-[370px] mx-auto lg:mx-0 my-8">
              <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ps-3'}/>
            </div>

            <div className="flex flex-wrap">
              <div className="lg:w-3/12 w-full content-center pb-6 lg:pb-0">
                <p className="text-[35px] text-4pblue font-bold leading-[35px]">Trust badges</p>
              </div>
              <div className="lg:w-4/12 w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6 lg:me-6 me-2">
                <img src={`/images/3m-only.svg`} width={91} height={48} className="" />
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">3M Certified Installers</p>
              </div>
              <div className="lg:w-4/12 w-[48%] items-center border-[1px] border-4plight-grey rounded-lg bg-white justify-items-center content-center shadow-usual py-6">
                <img src={`/images/100+.svg`} width={122} height={37} className="" />
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2 px-12">5-Star Reviews</p>
              </div>
            </div>
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

      </div>

      {/******************  MiniMenu Section ****************************/}
      <div className="container justify-items-center lg:mb-[100px] mb-16 px-6 lg:px-0">
        <div className="border-2 border-4plight-grey w-fit rounded-lg lg:py-4 pt-4">
          <MiniMenu toMap={MiniMenuCustomWrap}/>
        </div>
      </div>

      {/******************  Classic to Custom Section ****************************/}
      <div className="lg:bg-gradient-to-r bg-gradient-to-t from-white lg:from-30% from-20% to-4pgrey lg:to-30% to-20% lg:mb-[100px] mb-16" id="classic">
        <div className="container flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-5/12 w-full lg:pt-[140px] pt-4 justify-evenly order-1 lg:order-0">
          <Image 
            src="/images/classic-to-custom.webp"
            alt="Who we are image 1"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/classic-to-custom.webp 768w, /images/classic-to-custom.webp 1024w"
            width={463}
            height={575}
            className="self-start lg:w-[463px] w-full" />
          </div>
          
          <div className="lg:w-7/12 w-full lg:ps-0 ps-6 pe-6 lg:pe-0 content-center lg:pt-[83px] pt-8 lg:pb-16 order-0 lg:order-1">
            <h2 className="font-bold lg:text-[70px] text-[45px] leading-[45px] lg:leading-[80px] z-10 relative uppercase">From Classic to Custom - Choose<span className="text-4pblue lg:text-[80px] block">Your Perfect Finish</span></h2>
            <p className="lg:w-[35rem] w-full leading-[23px] pt-8 relative z-10">Whether you're looking for a complete color transformation, eye-catching racing stripes, or premium textured and chrome finishes, our custom car wraps offer endless possibilities for personalizing your vehicle.
              <br /><br />
              Our certified installers ensure a perfect application that looks factory-fresh, with added protection and the flexibility to change your vehicle’s appearance in the future.</p>
              <div className="flex flex-wrap lg:flex-nowrap pt-6 gap-6 items-center ">
                <p className="font-bold lg:w-3/12 w-full leading-[16px]">Check Our available colors</p>
                <a href="https://multimedia.3m.com/mws/media/1783349O/3m-wrap-film-2080-series-color-palette.pdf" className="w-5/12 lg:w-3/12" target="_blank">
                <Image 
                  src="/images/3M-179-color.svg"
                  alt="Who we are image 1"
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/classic-to-custom.webp 768w, /images/classic-to-custom.webp 1024w"
                  width={179}
                  height={60}
                  className="self-start lg:w-[179px] w-full hover:scale-105 ease-is-out transition-all" />
                </a>
                <a href="https://graphics.averydennison.com/content/dam/averydennison/graphics/na/en/documents/sell-sheets-and-brochures/color-guide/na-swf-color-card-en.pdf" className="w-5/12 lg:w-3/12" target="_blank">
                <Image 
                  src="/images/avery-179-color.svg"
                  alt="Who we are image 1"
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/classic-to-custom.webp 768w, /images/classic-to-custom.webp 1024w"
                  width={179}
                  height={60}
                  className="self-start lg:w-[179px] w-full hover:scale-105 ease-is-out transition-all" 
                   />
                   </a>
              </div>
              <div className="lg:w-7/12 w-[370px] mc-auto lg:mx-0 my-8">
                <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ps-3'}/>
              </div>
          </div>
        </div>
      </div>

      {/******************  Full Vehicle Section ****************************/}
      <div className="container flex flex-wrap lg:mb-[100px] mb-16" id="coloChange">
        <div className="lg:w-5/12 w-full lg:pe-6 lg:ps-6 lg:ps-0 order-1 lg:order-0">
          <h2 className="font-bold lg:text-[70px] text-[45px] leading-[45px] lg:leading-[80px] z-10 relative lg:me-[-50px] uppercase hidden md:block">Full Vehicle
            <span className="text-4pblue lg:text-[80px] block">Color Change</span></h2>
          <ImageCarousel imageData={CustomFullChangeImages} imageWidth={486} imageHeigh={496} sectionId={'customFull'}/>
        </div>
        
        <div className="lg:w-7/12 w-full lg:ps-4 lg:pt-6 order-0 lg:order-1 px-6 lg:px-0">
          <h2 className="font-bold lg:text-[70px] text-[45px] leading-[45px] lg:leading-[80px] z-10 relative lg:me-[-20px] uppercase block md:hidden">Full Vehicle
            <span className="text-4pblue lg:text-[80px] ">Color Change</span></h2>
          <p className="leading-[23px] lg:ps-6 lg:pb-6 py-6 lg:py-0">Transform your vehicle's exterior with our premium solid color wrap service. Unlike paint, our vinyl wraps provide a reversible solution that protects your original paint while allowing you to reinvent your vehicle's appearance completely.
          Whether you're looking for classic solid colors or contemporary shades, our professional installation delivers a factory-quality finish that makes your vehicle stand out.</p>
          <p className="leading-[23px] lg:ps-6"><span className="font-bold">Best for:</span> Vehicle enthusiasts wanting a complete color transformation without permanent paint</p>
          <p className="text-4pblue lg:text-[35px] text-[26px] font-bold lg:ps-6 pt-6 pb-2 lg:pb-0">Features</p>
          <div className="rectangle-cuted-red-ur rounded-3xl grid lg:grid-cols-3 grid-cols-1 gap-6 px-6 lg:my-16 py-12 lg:py-0">
            {CustomFullVehicleFeatures.map((data, index) => {
              let classes = '';
              let divHeight = 'lg:min-h-[99px] min-h-[75px]'
              if(index === CustomFullVehicleFeatures.length-1) {
                classes = 'lg:col-span-3 lg:w-[67%] mx-auto lg:mb-[-30px]'
                divHeight = 'lg:min-h-[77px] min-h-[75px]'
              }
              if(index === 0 || index === 1 || index === 2) {
                classes = 'lg:mt-[-30px]'
              }
              return (
                <div key={index} className={`relative ${classes}`}>
                  <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full ${divHeight}`}>
                    <p className="text-center leading-[23px] font-bold px-4 text-[20px]">{data}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="lg:w-7/12 w-[370px] mx-auto lg:mx-0 lg:mt-20 mt-8 mb-8">
            <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-blue-to-red'} iconOption={7} textColor={'text-white ps-3'}/>
          </div>
        </div>
      </div>

      {/******************  Graphic Design Racing Section ****************************/}
      <div className="bg-4pblack lg:mb-[100px] mb-16 pb-16 lg:pb-0" id="graphicDesign">
        <div className="container text-white lg:pb-16 pt-12 pt-24">
          <h2 className="lg:text-[70px] text-[45px] leading-[50px] px-6 lg:px-0 lg:leading-[70px] uppercase font-bold">Graphic Design and
          <span className="lg:text-[80px] text-4pblue block">Racing Stripes</span></h2>

          <div className="flex flex-wrap lg:pt-16 px-6 lg:px-0">
            <div className="lg:w-1/2 w-full">
              <p className="leading-[23px]">Our custom graphics and racing stripes add a dynamic and sporty touch to your vehicle. From classic dual racing stripes to modern graphic designs, we create eye-catching patterns that enhance your vehicle's personality. </p>
            </div>

            <div className="lg:w-1/2 w-full lg:ps-6 pt-6 lg:pt-0">
              <p className="leading-[23px] lg:ps-12">Our precision installation ensures perfect symmetry and clean lines, delivering professional motorsport-inspired looks that make your vehicle stand out.</p>
              <p className="leading-[23px] lg:ps-12 mt-6"><span className="font-bold">Best for:</span> Sports car enthusiasts, racing fans, and drivers wanting to add distinctive design elements to their vehicles</p>
            </div>
          </div>
          <div className="flex flex-wrap px-6 lg:px-0">
            <div className="lg:w-1/2 w-full lg:mt-[-30px] pb-16 lg:pb-0">
              <p className="text-4pred font-bold text-[35px] py-4">Features</p>
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
                {CustomGraphicStripesFeatures.map((data, index) => {
                let classes = '';
                if(index === 1) {
                  classes = 'lg:mt-16'
                }
                if(index === 2) {
                  classes = 'lg:mt-24'
                }
                if(index === 3 || index === 6) {
                  classes = 'lg:mt-[-96px]'
                }
                if(index === 4 || index === 7) {
                  classes = 'lg:mt-[-28px]'
                }
                return (
                  <div key={index} className={`relative ${classes}`}>
                    <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full min-h-[99px]`}>
                      <p className="text-center leading-[23px] font-bold px-4 text-4pblack">{data}</p>
                    </div>
                  </div>
                )
                })}
              </div>
              <div className="lg:w-7/12 mt-12 mx-auto">
                <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ps-3'}/>
              </div>
            </div>

            <div className="lg:w-[460px] w-full mx-auto lg:pt-16">
              <ImageCarousel imageData={CustomDesignStripesImages} imageWidth={460} imageHeigh={458} sectionId={'graphic'}/>
            </div>

          </div>
        </div>
      </div>

      {/******************  Texture Chrome and Special Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="textured">
        <h2 className="lg:text-[70px] text-[45px] lg:leading-[70px] leading-[50px] uppercase font-bold text-center">Textured, Chrome,
        <span className="lg:text-[80px] text-4pblue block">And Special Vinyl</span></h2>
        <p className=" text-center lg:px-20 px-6 pt-8">Take your vehicle's appearance to the next level with our premium specialty wraps. From eye-catching chrome finishes that demand attention to sophisticated textured materials that add depth and character to unique special vinyl effects that create unforgettable impressions, each specialty material is carefully selected from our premium material  collection, offering extraordinary visual and tactile experiences impossible to achieve with traditional methods.</p>
        <p className=" text-center lg:w-[60%] w-full px-6 lg:px-0 mx-auto font-bold pt-4 lg:pt-0">Transform your vehicle into a masterpiece with finishes combining innovative materials and stunning aesthetics.</p>

        <div className="flex flex-wrap lg:flex-nowrap pt-8">
          <div className="lg:w-4/12 w-full content-center">
            <p className="text-4pblue text-[35px] font-bold ps-6 lg:ps-0">Features</p>
            <div className="grid grid-cols-2 gap-6 lg:pe-8 ps-6 lg:ps-0 pe-6 mt-4 mb-8 lg:mb-0">
              {CustomTextureSpecialLeft.map((data, index) => {
                return (
                  <div key={index} className={`relative`}>
                    <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full min-h-[99px]`}>
                      <p className="text-center leading-[23px] font-bold px-4 text-4pblack">{data}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="lg:w-[486px] w-full px-6 lg:px-0 mb-8 lg:mb-0">
            <ImageCarousel imageData={CustomTextureSpecial} imageWidth={486} imageHeigh={426} sectionId={'texturedSpecial'}/>
          </div>
          <div className="lg:w-4/12 w-full content-center">
            <div className="grid grid-cols-2 gap-6 lg:ps-8 ps-6 pe-6 lg:ps-0 lg:mt-40">
              {CustomTextureSpecialLeft.map((data, index) => {
                return (
                  <div key={index} className={`relative`}>
                    <div className={`bg-white border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual content-center w-full min-h-[99px]`}>
                      <p className="text-center leading-[23px] font-bold px-4 text-4pblack">{data}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="lg:w-full w-[370px] mx-auto lg:mx-0 mt-12 lg:ps-8">
              <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white lg:ms-[-20px]'}/>
            </div>
          </div>
        </div>
      </div>

      {/******************  Why Choos Us Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="whyus">
        <div className="bg-4pgrey rounded-3xl flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-7/12 w-full lg:ps-16 ps-6 pe-6 lg:pe-0 lg:py-16 py-8">
            <h2 className="lg:text-[70px] text-[45px] lg:leading-[70px] leading-[50px] uppercase font-bold pb-4 lg:pb-0">Why
            <span className="lg:text-[80px] text-4pblue block">Choose Us</span></h2>
            <p className="">Experience and expertise make all the difference when transforming your vehicle's appearance. At 4Print, we've built our reputation on delivering exceptional vehicle transformations that exceed expectations. 
              <br /><br />
              From complete color changes to racing stripes and specialty finishes, our commitment to quality begins with our choice of premium materials and extends through our meticulous installation process. Every project receives the dedicated attention of our certified installers, who combine technical expertise with an artistic eye to ensure your vehicle's new look is nothing short of perfection.</p>
            <div className="lg:w-8/12 w-[380px] ms-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Get Your Free Design consultation'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ms-[-20px] lg:ms-0'}/>
            </div>
          </div>

          <div className="lg:w-6/12 lg:ps-8 text-white content-end">
            <div className="ps-12 pe-4 pb-12 rectangle-cuted-red-tl rounded-br-3xl pt-20">
              {CustomWhyUs.map((data, index) =>{
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

      {/******************  Our Process Section ****************************/}
        <div className="container lg:mb-[100px] mb-16">
          <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[52px] leading-[45px] mb-8 lg:mb-0 text-center">OUR <span className="lg:text-[80px] text-4pblue">PROCESS </span></h2>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:px-16 lg:mt-16 px-8">
            {OurProcessCustomWrap.map((data, index) => {
              return(
                <div key={index} className="relative lg:col-span-4 col-span-1">
                  <div className="absolute top-[-12px] left-[-17px] lg:w-[176px] w-[120px] lg:h-[90px] h-[60px] bg-4pred rounded-tl-2xl"></div>
                  <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual min-h-[105px] content-center w-full">
                    <p className="text-[154px] leading-[100px] italic font-black text-[#3149BC33] absolute top-0 right-[25px]">{index+1}</p>
                    <p className="text-center text-lg font-bold px-8">{data}</p>
                  </div>
                </div>
                )
            })}
            </div>      
        </div>
      
      {/******************  FAQs Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="flex flex-wrap bg-4pblack rounded-2xl lg:pt-16 lg:pb-20 lg:min-h-[850px] lg:h-[710px]">
          <div className="lg:w-4/12 w-full justify-items-center content-top lg:pt-32">
            <h2 className="text-transparent stroke-[2px] stroke-white font-black lg:text-[178px] text-[105px] lg:transform lg:-rotate-180 stroke4p italic tracking-tighter ">FAQ's</h2>
          </div>

          <div className="lg:w-8/12 w-full lg:pe-24 px-8 py-8 lg:py-0 ">
            <FAQs faqsData={FAQsCustomWrap} />
          </div>
        </div>
      </div>

      {/****************** Take First Step Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="custom-path lg:min-h-[400px] lg:h-[400px]">
          <div className="back-red-wrapping-page min-h-[400px] lg:rounded-r-xl lg:ps-[389px] pe-8 ps-8 content-center text-white py-8 lg:py-0">
            <h2 className="lg:text-start text-center font-bold text-[60px] leading-[60px] uppercase">Take The <span className="text-4pblack">First Step</span></h2>
            <h3 className="lg:text-start text-center text-[30px] uppercase font-bold lg:w-[35rem] leading-[35px]">Transform Your Business Today, Get Started for Just $50.</h3>
            <p className="lg:text-start text-center leading-[23px] lg:w-[36rem] py-5">Schedule Your Free Consultation Connect with our wrap experts to discuss your project and receive a personalized quote. Serving Maryland, Virginia, and DC area.</p>
            <div className="lg:w-4/12 w-8/12 mx-auto lg:mx-0 content-center">
              <Button4P buttonText={'Schedule Now'} buttonLink={'#contact'} buttonBgAnimation={'btn-blue-to-white'} iconOption={6} textColor={'text-white'}/>
            </div>
          </div>
        </div>
      </div>

      {/******************  Contact Form Section ****************************/}
      <ContactFormFooter />
    </>
  )
};

export default CustomCarWrap;
