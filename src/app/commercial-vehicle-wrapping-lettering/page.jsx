import React from "react"
import ContactFormFooter from "../components/ContactFormFooter";
import Button4P from "../components/Button";
import { Certifications120, FAQsWrap, FeaturesFullWrap, FeaturesMHIC, FeaturesPartialWrap, FeaturesSpecialtyWrap, FeaturesUSDOTS, FeaturesUSDOTSLettering, FullCoverImages, MHICImages, OurProcessWrap, USDOTImages, WhyChoseWrappingPageBottom, WhyChoseWrappingPageTop } from "../data/data";
import Image from "next/image";
import ImageCarousel from "../components/ImageCarousel";
import FAQs from "../components/FAQS";

export const metadata = {
  title: "4Print - Commercial Vehicle Wraps & Fleet Lettering | 3M Certified Wrapping",
  description: "Custom commercial vehicle wraps & lettering with premium 3M materials. Full wraps, USDOT & MHIC compliance. Fast installation from $50! Serving MD, VA, DC.",
};

const CommercialWrap = (props) => {
  return (
    <>
      {/******************  Banner Section ****************************/}
      <div className=" lg:bg-gradient-to-r bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] pb-16 mt-[-185px] lg:mb-[180px] mb-6">
        <div className="container flex flex-wrap lg:px-0 lg:pt-0">
          <h1 className="lg:text-[80px] text-[55px] font-bold uppercase lg:leading-[85px] leading-[55px] pb-8 lg:w-9/12 w-full relative lg:z-20 order-1 lg:order-0 px-6 lg:px-0">Transform <br /> 
                      <span className="text-4pblue">Your Fleet into</span> <br /> 
                      <span className="text-4pred">Mobile Billboards</span></h1>
          <div className="lg:w-3/12 w-full lg:order-1 order-3 justify-items-end">
            <Image
              src="/images/banner-image-commercial-wrap-1.webp"
              alt="Banner Image Commercial Wrapping"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/banner-image-commercial-wrap-1.webp 768w, /images/banner-image-commercial-wrap-1.webp 1024w"
              width={486}
              height={688}
              className="lg:absolute lg:top-0 top-[40px] right-0 lg:w-[27vw] w-[75vw] max-w-[489px]"
            />
          </div>
          <div className="lg:w-3/12 w-full relative lg:order-2 order-4 lg:mt-0 mt-[-120px]">
            <Image
              src="/images/banner-image-commercial-wrap-2.webp"
              alt="Banner Image Commercial Wrapping"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/banner-image-commercial-wrap-2.webp 768w, /images/banner-image-commercial-wrap-2.webp 1024w"
              width={486}
              height={688}
              className="lg:absolute top-0 right-10 lg:w-[35vw] w-[70vw] min-w-[27vw] max-w-[480px]"
            />
          </div>
          <div className="lg:w-5/12 w-full pe-8 order-2 px-6 lg:px-0">
            <p className="leading-[23px]">Turn your vehicles into powerful mobile advertising with professional vehicle wraps. Our expert team uses premium materials to create high-impact designs that capture attention and drive results</p>
            <div className="lg:w-9/12 w-full my-8">
            <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white ps-3'}/>
          </div>
          </div>
        </div>

      </div>

      {/******************  Certifications Section ****************************/}
      <div className="container lg:pe-20 mb-[100px]">
        <div className="bg-4pgrey rounded-xl flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-7/12 w-full pt-16 lg:ps-20 lg:pe-0 ps-6 pe-6 lg:pb-20 pb-4">
          <h2 className="font-bold lg:text-[60px] text-[45px] lg:leading-[60px] leading-[45px]">OUR <span className="text-4pblue">CERTIFICATIONS</span></h2>
          <div className="grid grid-cols-2 gap-4 lg:pe-16 pt-8 lg:pt-0">
            {Certifications120.map((data, index) => {
              return(
                <div key={index} className="border-[1px] border-4plight-grey rounded-lg shadow-usual bg-white p-4 content-center justify-items-center">
                  <Image
                  src={`/images/${data.image}`}
                  alt={`${data.title}`}
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet={`/images/${data.image} 768w, /images/${data.image} 1024w`}
                  width={218}
                  height={164}
                  className=""
                />
                <p className="text-4pblue font-bold pt-4 text-center lg:text-start leading-[23px]">{data.title}</p>
                </div>
              )
            })}
            
          </div>
        </div>

        <div className="lg:w-5/12 w-full lg:mt-16 mt-6">
          <div className="rectangle-cuted-black items-center content-center lg:py-16 pt-8 pb-16 lg:ps-28 ps-20 rounded-3xl lg:me-[-64px]">
            <p className="text-white uppercase text-white text-[35px] font-bold leading-[70px]">
              <span className="text-4pred italic lg:text-[100px] text-[80px] font-black leading-[90px]">120+</span>
              <Image
                src={`/images/stars.svg`}
                alt={`5 Stars`}
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet={`/images/stars.svg 768w, /images/stars.svg 1024w`}
                width={293}
                height={54}
                className=""
              />
              Google Reviews
            </p>
            <div className="lg:w-8/12 w-10/12">
            <Button4P buttonText={'View all reviews'} self="_blank" buttonLink={'https://www.google.com/search?client=opera-gx&q=4printus&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0x89b7fdc1332cd389:0x1dee4584e17b5c5e,1,,,,'} buttonBgAnimation={'btn-red-to-blue'} iconOption={2} textColor={'text-white ps-3'}/>
            </div>
          </div>
        </div>
        </div>

      </div>

      {/******************  Commercial Vehicle Wrap Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <h2 className="font-bold lg:text-[60px] text-[40px] lg:leading-[60px] leading-[40px] uppercase text-center lg:px-44">Commercial Vehicle <span className=" block text-4pblue">Wrapping / Fleet Wrapping</span></h2>

        {/*********** Full Wrap ***********/}
        <div className="grid grid-cols-12 gap-5 bg-commercial-full lg:h-[80vh] mt-8">
          <div className="lg:col-span-7 col-span-12 lg:w-[90%] w-full rounded-3xl bg-white lg:pt-16 pt-4 lg:pe-12 pe-6 ps-6 lg:ps-0 pb-8 lg:pb-0 h-fit self-end order-1 lg:order-0 shadow-usual lg:shadow-none mt-4 lg:mt-0">
            <h3 className="text-4pred lg:text-[50px] text-[45px] leading-[55px] text-center lg:text-start lg:leading-[60px] font-bold pb-4">Full Vehicle Wraps</h3>
            <p className="leading-[23px]">Complete transformation of your vehicle's exterior for maximum brand visibility
              <br /><br />
              <b>Best for:</b> Businesses wanting maximum impact and brand recognition 
            </p>
            <p className="text-4pblue lg:text-[35px] text-[26px] py-4 font-bold">Features</p>
            <div className="grid lg:grid-cols-3 gap-5">
              {FeaturesFullWrap.map((data, index) => (
                <div key={index} className="border-1 border-4plight-grey rounded-xl px-4 text-[20px] font-bold text-center shadow-usual leading-[23px] lg:py-8 py-4 min-h-[70px] content-center">
                  {data}
                </div>
              ))}
            </div>
            <div className="lg:w-8/12 w-[370px] mx-auto lg:mx-0 mt-8">
            <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white ps-3'}/>
            </div>
          </div>

          <div className="lg:col-span-5 col-span-12 w-[80%] lg:w-full mx-auto order-0 lg:order-1">
            <Image
              src={`/images/commercial-flee-full-wrap-image.webp`}
              alt={`5 Stars`}
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet={`/images/commercial-flee-full-wrap-image.webp 768w, /images/commercial-flee-full-wrap-image.webp 1024w`}
              width={485}
              height={623}
              className="rounded-xl"
            />
          </div>
        </div>

        {/*********** Partial Wrap ********/}
        <div className="grid grid-cols-12 gap-5 bg-commercial-partial lg:h-[81vh] mt-16">
          <div className="lg:col-span-5 col-span-12 w-[80%] lg:w-full mx-auto self-end">
            <Image
              src={`/images/commercial-flee-partial-wrap-image.webp`}
              alt={`5 Stars`}
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet={`/images/commercial-flee-partial-wrap-image.webp 768w, /images/commercial-flee-partial-wrap-image.webp 1024w`}
              width={485}
              height={623}
              className="rounded-xl"
            />
          </div>


          <div className="lg:col-span-7 col-span-12 lg:w-[90%] rounded-3xl bg-white pe-4 h-fit lg:ps-12 ps-6 lg:ms-4 pt-8 lg:pt-0 pb-12 mt-8 lg:mt-0 shadow-usual lg:shadow-none">
            <h3 className="text-4pblue lg:text-[50px] text-[45px] text-center lg:text-start leading-[50px] font-bold">Partial Vehicle Wraps</h3>
            <p className="leading-[23px] pt-6">Strategic coverage of specific vehicle areas for cost-effective branding.
            <br /><br />
              <b>Best for:</b> Businesses with limited budgets or specific branding needs.
            </p>
            <p className="text-4pblack lg:text-[35px] text-[26px] py-6 font-bold">Features</p>
            <div className="grid lg:grid-cols-3 gap-5">
              {FeaturesPartialWrap.map((data, index) => (
                <div key={index} className="border-1 border-4plight-grey rounded-xl px-2 text-[20px] font-bold text-center shadow-usual leading-[23px] py-3 content-center min-h-[70px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="lg:w-8/12 w-[370px] mx-auto lg:mx-0 mt-8">
            <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-blue-to-red'} iconOption={7} textColor={'text-white ps-3'}/>
            </div>
          </div>
        </div>

        {/*********** Specialty Wrap ******/}
        <div className="grid grid-cols-12 gap-5 bg-specialty-wrap lg:h-[80vh] mt-16">
          <div className="lg:col-span-7 col-span-12 rounded-3xl bg-white lg:pt-12 pt-8 lg:pe-12 ps-6 lg:ps-0 pe-6 h-fit self-end order-1 lg:order-0 shadow-usual lg:shadow-none pb-12 lg:pb-0">
            <h3 className="text-4pblack lg:text-[50px] text-[45px] font-bold leading-[50px] text-center lg:text-start">SPECIALTY WRAP (MATTE, GLOSS & SATIN)</h3>
            <p className="leading-[23px] pt-8">Premium finishes including matte, gloss, satin and textured materials.
              <br /><br />
              <b>Best for:</b> Businesses wanting a unique, premium look
            </p>
            <p className="text-4pred lg:text-[35px] text-[26px] font-bold py-4">Features</p>
            <div className="grid lg:grid-cols-3 gap-5">
              {FeaturesSpecialtyWrap.map((data, index) => (
                <div key={index} className="border-1 border-4plight-grey rounded-xl px-4 text-[20px] font-bold text-center shadow-usual leading-[23px] lg:py-8 py-4 content-center min-h-[70px]">
                  {data}
                </div>
              ))}
            </div>
            <div className="lg:w-8/12 w-[370px] mx-auto lg:mx-0 mt-8">
            <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-black-to-red'} iconOption={7} textColor={'text-white ps-3'}/>
            </div>
          </div>

          <div className="lg:col-span-5 col-span-12 w-[80%] mx-auto lg:w-full order-0 lg:order-1">
            <Image
              src={`/images/specialty-wrap-image.webp`}
              alt={`5 Stars`}
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet={`/images/specialty-wrap-image.webp 768w, /images/specialty-wrap-image.webp 1024w`}
              width={485}
              height={623}
              className="rounded-xl"
            />
          </div>
        </div>
        
      </div>

      {/******************  Commercial Lettering Section ****************************/}
      <div className="bg-4pblack lg:pt-20 pt-12 pb-16 lg:mb-[100px] mb-16" id="commercialLettering">
        <div className="container flex flex-wrap px-6 lg:px-0">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4pred text-[50px] leading-[55px] font-bold uppercase">FROM FULL WRAPS TO SIMPLE LETTERING <span className="text-4pblue text-[80px] leading-[80px] block py-8">We've Got You Covered</span></h2>
            <p className="text-white leading-[23px] lg:w-[85%]">Maximize your brand's visibility with our comprehensive vehicle wrapping solutions. Every day, your vehicles travel through the DMV area, presenting countless opportunities to reach potential customers. </p>
            <br />
            <p className="text-white leading-[23px] lg:w-[85%]">Whether you need a complete fleet transformation or simple DOT numbers, our certified installers ensure professional results that make your business stand out. With premium materials and expert installation, we deliver durable, head-turning vehicle graphics that help drive your business forward.</p>

            <div className="grid lg:grid-cols-3 gap-5 mt-16">
            {FeaturesUSDOTSLettering.map((data, index) => {
              return(
              <div key={index} className=" border-[1px] border-4plight-grey rounded-lg min-w-[180px] justify-items-center px-4 py-4 shadow-usual bg-white content-center">
                <img src={`/images/${data.image}`} width={68} height={68} />
                <p className="text-center text-[20px] font-bold pt-2 leading-[23px]">{data.title}</p>
              </div>
              )
            })}
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:ps-8 pt-16 lg:pt-0">
          <div className="lg:max-w-[460px] mx-auto pb-8">
            <ImageCarousel imageData={FullCoverImages} imageWidth={460} imageHeigh={400} sectionId={'fullToSimple'}/>
          </div>
            <h2 className="text-4pred text-[50px] leading-[55px] font-bold uppercase pe-8">Commercial Vehicle Lettering, USDOT & MHIC</h2>
            <p className="text-white leading-[23px] lg:w-[85%]">Commercial Lettering Wrapping: Professional vinyl lettering and decals to display your business information on any vehicle surface. Perfect for company names, contact information, and branding elements on cars, trucks, vans, and fleet vehicles.</p>
            <br />
            <p className="text-white"><b>Best for: Essential business identification and contact information</b></p>
          </div>
        </div>
      </div>

      {/******************  USDOT Section ******************************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="flex flex-wrap px-6 lg:px-0">
          <div className="lg:w-5/12 w-full">
              <h2 className="lg:text-[70px] text-[50px] lg:leading-[70px] leading-[50px] font-bold">USDOT <span className="text-4pblue lg:text-[80px] block">NUMBERS</span></h2>
          </div>

          <div className="lg:w-7/12 w-full pb-12 lg:pb-0">
            <p className="leading-[23px] pb-8 pt-8 lg:pt-0 lg:ps-12">Federal law requires commercial vehicles operating across state lines to display their Department of Transportation number. Our professional USDOT number installation ensures your fleet meets all DOT regulations with durable vinyl lettering that withstands weather and frequent washing. We handle correct sizing, spacing, and placement according to federal guidelines, keeping your business compliant while maintaining a professional appearance.</p>
            <div className="grid grid-cols-12 lg:ps-12 gap-y-6">
              <div className="lg:col-span-4 col-span-12">
                <p className="font-bold">Best for: <br/>DOT compliance</p>
              </div>
              <div className="lg:col-span-8 col-span-12">
                <p className="font-bold">Features: <br />Weather-resistant materials, correct formatting</p>
              </div>
            </div>          
          </div>
        </div>

        <div className="flex flex-wrap lg:mt-[-110px]">
          <div className="lg:w-5/12 w-full pb-6 lg:pb-0">
            <div className="lg:mt-[73px]">
              <ImageCarousel imageData={USDOTImages} imageWidth={510} imageHeigh={466} sectionId={'USDOT'}/>
            </div>
          </div>

          <div className="lg:w-7/12 w-full content-end lg:pb-[59px]">
            <div className="red-frame text-white lg:pt-12 pt-8 lg:ps-12 ps-6 pe-8 lg:pe-0 lg:pb-20 pb-12 lg:mt-12 h-fit">
              <p className="font-bold text-[26px] lg:text-[18px] pb-4 lg:px-0">Key Features:</p>
              <ul className="list-disc lg:ms-8 ms-6">
              {FeaturesUSDOTS.map((data, index) => {
                return (
                  <li key={index}>{data}</li>
                )
              })}
              </ul>
              <div className="lg:w-7/12 w-[370px] mx-auto lg:mx-0 mt-12">
              <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-blue-to-white'} iconOption={7} textColor={'text-white ps-3'}/>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/******************  MHIC Section ******************************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="flex items-center flex-wrap">
          <div className="lg:w-1/2 w-full lg:pe-12 pe-8 lg:mt-24">
            <h2 className="lg:ps-12 ps-6 pt-4 pb-8 rectangle-cuted-blue font-bold lg:text-[70px] text-[50px] leading-[50px] lg:leading-[60px] text-4pred">MHIC <span className="block lg:text-[80px] lg:leading-[85px] text-white">NUMBERS</span></h2>
          </div>

          <div className="lg:w-5/12 w-full hidden md:block">
            <ImageCarousel imageData={MHICImages} imageWidth={510} imageHeigh={420} sectionId={'MHIC'}/>
          </div>
        </div>

        <div className="flex flex-wrap bg-4pgrey rounded-t-xl lg:pt-48 lg:mt-[-230px] lg:pb-16">
          <div className="lg:w-1/2 w-full px-6 lg:px-0 pt-8 lg:pt-0">
            <p className="leading-[23px] lg:pb-8 lg:ps-12">The Maryland Home Improvement Commission (MHIC) requires licensed contractors to display their license number on vehicles and marketing materials. Our professional MHIC number installation ensures compliance with state regulations while maintaining your vehicle's professional appearance.
              <br /><br />
              We use high-quality vinyl that resists fading and peeling, properly sized and positioned according to state requirements.</p>
            <div className="lg:w-10/12 w-[370px] mx-auto lg:mx-0 lg:px-12 my-8 lg:my-0">
              <Button4P buttonText={'Start Your Project from $50'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={7} textColor={'text-white ps-3'}/>
            </div>
          </div>

          <div className="lg:w-5/12 w-full md:hidden block">
            <ImageCarousel imageData={MHICImages} imageWidth={510} imageHeigh={420} sectionId={'MHIC-resp'}/>
          </div>

          <div className="lg:w-5/12 w-full lg:mt-16 mt-8 px-6 lg:px-0">
            <p className="font-bold pb-4">Key Features:</p>
            <ul className="list-disc lg:ms-8 ms-6 pb-8 lg:pb-0">
            {FeaturesMHIC.map((data, index) => {
              return (
                <li key={index}>{data}</li>
              )
            })}
            </ul>
            <div className="grid grid-cols-12 lg:pt-6">
            <div className="lg:col-span-6 col-span-12 pb-8 lg:pb-0">
              <p className="font-bold">Best for:</p>
              <p>Contractor compliance</p>
            </div>
            <div className="lg:col-span-6 col-span-12 pb-8 lg:pb-0">
              <p className="font-bold">Features:</p>
              <p>Professional installation, durable materials</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/******************  Why Choose Us Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16 px-6 lg:px-0" >
        <div className="lg:w-4/12 w-full content-center">
          <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[52px] leading-[45px] uppercase mb-8 lg:mb-0">Why <span className="text-4pblue">Choose </span></h2>
          <div className="w-7/12 my-8 mx-auto lg:mx-0 hidden lg:block">
            <Button4P buttonText={'Schedule now'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white'}/>
          </div>
        </div>

        <div className="lg:w-8/12 w-full">
          <div className="flex flex-wrap lg:flex-nowrap justify-center  lg:ps-16">
            {WhyChoseWrappingPageTop.map((data, index) => {
              return(
              <div key={index} className="lg:w-2/12 w-full flex lg:block items-center border-[1px] border-4plight-grey rounded-lg lg:mx-4 min-w-[180px] justify-items-center px-8 lg:py-8 py-4 shadow-usual bg-white mb-4 lg:mb-0">
                <img src={`/images/${data.image}`} width={83} height={70} className="me-4 lg:me-0" />
                <p className="text-center text-[20px] font-bold leading-[23px] pt-2">{data.title}</p>
              </div>
              )
            })}
          </div>

          <div className="lg:min-h-[32vh] lg:mt-[-130px] lg:mb-[-130px] bg-why-choose-blue rounded-3xl"></div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:ps-16">
            {WhyChoseWrappingPageBottom.map((data, index) => {
              return(
              <div key={index} className="lg:w-2/12 flex lg:block w-full border-[1px] border-4plight-grey rounded-lg lg:mx-4 lg:min-w-[180px] justify-items-center px-8 lg:py-8 py-4 shadow-usual bg-white mb-4 lg:mb-0">
                <img src={`/images/${data.image}`} width={83} height={70} className="me-4 lg:me-0" />
                <p className="text-center text-[20px] font-bold pt-2 leading-[23px]">{data.title}</p>
              </div>
              )
            })}

            <div className="lg:w-6/12 w-[250px] my-8 mx-auto lg:mx-0 lg:hidden block">
              <Button4P buttonText={'Schedule now'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue'} iconOption={0} textColor={'text-white'}/>
            </div>
          </div>

        </div>

      </div>

      {/******************  Our Process Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[52px] leading-[45px] mb-8 lg:mb-0 text-center">OUR <span className="lg:text-[80px] text-4pblue">PROCESS </span></h2>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:px-16 lg:mt-16 px-8">
          {OurProcessWrap.map((data, index) => {
            return(
              <div key={index} className="relative lg:col-span-4 col-span-1">
                <div className="absolute top-[-12px] left-[-17px] lg:w-[176px] w-[120px] lg:h-[90px] h-[60px] bg-4pred rounded-tl-2xl"></div>
                <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual min-h-[105px] content-center w-full">
                  <p className="text-[154px] leading-[100px] italic font-black text-[#3149BC33] absolute top-0 right-[25px]">{index+1}</p>
                  <p className="text-center text-lg font-semibold px-8">{data}</p>
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
            <FAQs faqsData={FAQsWrap} />
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
              <div className="lg:w-4/12 w-[250px] mx-auto lg:mx-0 content-center">
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

export default CommercialWrap;
