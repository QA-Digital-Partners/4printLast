import React from "react"
import ContactFormFooter from "@/app/components/ContactFormFooter";
import { MiniMenuCommercialPrintingBottom, MiniMenuCommercialPrintingTop, OurProcessPrinting, StationaryCardInfo, WallWrapImages, WhyChosePrintingPageBottom, WhyChosePrintingPageTop } from "@/app/data/data";
import Button4P from "@/app/components/Button";
import Image from "next/image";
import MiniMenu from "@/app/components/MiniMenu";
import StationaryCardUp from "@/app/components/StationaryCardUp";
import StationaryCardDown from "@/app/components/StationaryCardDown";
import ImageCarousel from "@/app/components/ImageCarousel";

export const metadata = {
  title: "High-Quality Commercial Printing & Custom Apparel - 4Print",
  description: "Get professional printing for banners, business cards, custom apparel, and more. 4Print offers premium materials, expert design support, and fast turnaround. Visit our Glen Burnie location or get a quote today!",
};


const CommercialPrinting = (props) => {
  return (
    <>

      {/******************  Banner Section ****************************/}
      <div className=" bg-gradient-to-b from-[#EFEEEE] from-85% to-whitwe to-85% pt-[190px] pb-16 mt-[-185px] lg:mb-[100px]">
        <div className="container flex flex-wrap px-6 lg:px-0">
          <h1 className="lg:text-[80px] text-[55px] font-bold uppercase lg:leading-[85px] leading-[55px] lg:pb-8 w-9/12 ">Commercial <br />  
                      <span className="text-4pred">Printing</span></h1>
          <div className="w-full lg:ps-48 pb-8">
            <p className="lg:w-[31rem] leading-[23px]">Every business needs professional marketing materials to succeed. Our comprehensive printing services cover all your branding needs, from eye-catching banners to professional business cards and custom apparel.</p>
          </div>
          <div className="lg:w-[535px] w-full relative">
            <Image
              src="/images/another-commercial-priting-banner.webp"
              alt="Banner Image Commercial Printing 2"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/another-commercial-priting-banner.webp 768w, /images/another-commercial-priting-banner.webp 1024w"
              width={535}
              height={263}
              className="lg:w-full lg:max-w-[535px]"
            />
          </div>
          <div className="lg:w-[359px] w-full lg:ps-8 lg:pe-12 px-8 py-8 lg:py-0 bg-4pblue text-white content-center">
            <p className="leading-[23px] font-bold">With state-of-the-art printing technology and premium materials, we ensure consistent quality across all your marketing materials.</p>
          </div>
          <div className="lg:w-3/12 w-full relative">
            <Image
              src="/images/commercial-printing-banner.webp"
              alt="Banner Image Commercial Printing"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/commercial-printing-banner.webp 768w, /images/commercial-printing-banner.webp 1024w"
              width={588}
              height={790}
              className="lg:absolute bottom-0 left-0 lg:w-[35vw] w-full lg:max-w-[588px]"
            />
          </div>
        </div>
      </div>

      {/******************  Minimenu Section ****************************/}
      <div className="container justify-items-center mb-[100px]" id="minimenu">
        <div className="border-2 border-4plight-grey w-fit rounded-lg lg:py-4 pt-4">
          <MiniMenu toMap={MiniMenuCommercialPrintingTop} CP={1}/>
          <div className="w-[90%] h-1 bg-4plight-grey rounded-3xl mx-auto hidden lg:block"></div>
          <MiniMenu toMap={MiniMenuCommercialPrintingBottom} CP={1}/>
        </div>
      </div>

      {/******************  Window Vinyls Section ****************************/}
      <div className="bg-gradient-to-t from-[#EFEEEE] lg:from-[63%] from-[82%] to-whitwe lg:to-[63%] to-[82%] lg:pb-24 pb-16 lg:mb-[100px]" id="windowvinyls">
        <div className="container flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-7/12 w-full lg:pe-2 pe-6 ps-6 lg:ps-0 order-1 lg:order-0">
            <h2 className="lg:text-[70px] text-[45px] uppercase lg:leading-[80px] leading-[50px] font-bold pb-4">Window Vinyls <span className="text-4pred lg:text-[80px] text-[50px]">(perforated and regular)</span></h2>
            <h3 className="text-4pblue lg:text-[28px] text-[22px] leading-[33px] font-bold lg:me-[-20px] pb-6">Transform Your Windows into Marketing Tools!</h3>
            <p className="leading-[23px] pb-8 lg:pe-8">Turn your storefront or office windows into powerful advertising space without sacrificing natural light. Our perforated window vinyls strike the perfect balance, allowing visibility from inside while displaying vibrant graphics outside and keeping spaces bright.
              <br /><br />
              Regular window vinyls provide a complete wrap that transforms your windows into eye-catching displays. Custom designed and professionally installed to enhance your business visibility.</p>
            <div className="grid lg:grid-cols-3 gap-6 lg:pe-16">
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Professional Installation</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Weather- Resistant</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Easy Maintenance</p></div>
            </div>
            <div className="lg:w-7/12 w-[340px] mx-auto lg:mx-0 mt-12 mx-auto lg:mx-0">
              <Button4P buttonText={'Get Your Window Graphics'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
            </div>
          </div>
          <div className="lg:w-6/12 w-full content-end justify-items-end order-0 lg:order-1">
            <Image
              src="/images/window-vynils.webp"
              alt="Window Vinyls Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/window-vynils.webp 768w, /images/window-vynils.webp 1024w"
              width={534}
              height={632}
              className=""
            />
          </div>
        </div>
      </div>

      {/******************  Wall Wrap Service Section ****************************/}
      <div className="container lg:mb-[100px] mb-16 pt-16 lg:pt-0" id="wallwrap">
        <div className="flex flex-wrap px-6 lg:px-0">
          <div className="lg:w-7/12 w-full">
            <h2 className="lg:text-[90px] text-[50px] uppercase lg:leading-[80px] leading-[55px] font-bold">Wall <span className="text-4pblue lg:text-[110px] text-[55px]">Wrap</span></h2>
            <p className="text-4pred lg:text-[28px] text-[22px] py-2 font-bold">Transform Your Walls into Brand Statements!</p>
            <p className="leading-[23px]">Elevate your interior or exterior walls with custom wall wraps that turn blank spaces into bold, branded visuals. Ideal for offices, retail spaces, gyms, and more, our wall wraps create a professional and engaging environment that communicates your brand identity at a glance.</p>
            <p className="leading-[23px] pb-8 ">Crafted with high-quality materials and installed by experts, our wall wraps are designed to make a lasting impression while standing up to daily wear and tear.</p>
            <div className="grid grid-cols-2 gap-6 lg:pe-4">
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Custom Designs</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Durable & Long-Lasting</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Seamless Installation</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Easy to Update or Replace</p></div>
            </div>
            <div className="lg:w-6/12 lg:mt-16 my-8 lg:mb-0 mx-auto lg:mx-0 lg:ps-8">
              <Button4P buttonText={'Start Your Design'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white w-full text-center ms-[-30px]'}/>
             </div>
          </div>
          <div className="lg:w-5/12 w-full lg:ps-4 lg:pt-16">
            <div className="lg:max-w-[460px] mx-auto pb-8">
              <ImageCarousel imageData={WallWrapImages} imageWidth={460} imageHeigh={400} sectionId={'fullToSimple'}/>
            </div>
          </div>
        </div>
      </div>

      {/******************  Banners Service Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16" id="banners">
        <div className="lg:w-5/12 w-full justify-items-end content-end z-10 px-8 lg:px-0">
          <Image
            src="/images/banners-image.webp"
            alt="Banners Image"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/banners-image.webp 768w, /images/banners-image.webp 1024w"
            width={477}
            height={513}
            className=""
          />
        </div>
        <div className="lg:w-9/12 w-full">
          <div className="rectangle-cuted-blue-tl lg:rounded-3xl rounded-xl pb-16 lg:pb-0 lg:ps-40 lg:pe-24 pe-6 ps-6 lg:ms-[-124px] lg:pt-16 pt-[250px] mt-[-220px] lg:mt-0">
            <h2 className="text-white lg:text-[80px] text-[55px] lg:leading-[80px] leading-[50px] font-bold">BANNERS</h2>
            <p className="font-bold lg:text-[28px] text-[22px] py-2">Your Brand Deserves Premium Quality!</p>
            <p className="text-white leading-[23px] pb-12 lg:pe-8">From business essentials to promotional materials, we deliver high-quality printing solutions that make your brand stand out. Our commitment to excellence ensures every piece we produce reflects your professional image.
              <br /><br />
              Visit our Glen Burnie location to explore material samples and discuss your project with our printing experts. We welcome walk-ins during business hours and are conveniently located to serve the entire DMV area.</p>
            <div className="grid lg:grid-cols-3 gap-6 ">
              <div className="bg-white p-6 border-[1px] lg:mb-[-30px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Long-Lasting Materials</p></div>
              <div className="bg-white p-6 border-[1px] lg:mb-[-30px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Premium Materials</p></div>
              <div className="bg-white p-6 border-[1px] lg:mb-[-30px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Convenient Location</p></div>
            </div>
          </div>
          <div className="lg:w-6/12 w-[370px] mx-auto mt-16 mx-auto lg:mx-0 lg:ps-8">
            <Button4P buttonText={'Start Your Project Today'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
        </div>
      </div>

      {/******************  Cut Vinyl Lettering Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="cutvinyl">
        <div className="flex flex-wrap px-6 lg:px-0">
          <div className="lg:w-1/2 w-full">
            <h2 className="lg:text-[70px] text-[50px] uppercase lg:leading-[80px] leading-[55px] font-bold">Cut Vinyl/ <span className="text-4pblue lg:text-[80px] text-[55px] block">Lettering</span></h2>
            <p className="text-4pred lg:text-[28px] text-[22px] py-2 font-bold">Make Your Message Stand Out!</p>
          </div>
          <div className="lg:w-1/2 w-full lg:ps-4">
            <p className="leading-[23px]">Professional vinyl lettering and graphics for any surface. Perfect for business names, store hours, promotional messages, and decorative elements. Our precision-cut vinyl ensures clean, sharp edges and long-lasting durability.</p>
          </div>

        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full content-center pt-8 lg:pt-0 px-6 lg:px-0">
            <div className="grid grid-cols-2 gap-6 lg:pe-4">
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Custom Designs</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Premium</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Expert Installation</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Budget-Friendly</p></div>
            </div>

            <div className="lg:w-6/12 lg:mt-16 my-8 lg:mb-0 mx-auto lg:mx-0 lg:ps-8">
              <Button4P buttonText={'Start Your Design'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white w-full text-center ms-[-30px]'}/>
             </div>
          </div>
          <div className="lg:w-1/2 w-full lg:mt-[-90px] lg:ps-4 px-6 lg:pe-0">
            <Image
              src="/images/cut-vinyls-lettering.webp"
              alt="Cut Vinyls Lettering Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/cut-vinyls-lettering.webp 768w, /images/cut-vinyls-lettering.webp 1024w"
              width={593}
              height={510}
              className=""
            />
          </div>
        </div>
      </div>

      {/******************  Car Magnets Section ****************************/}
      <div className="container bg-4pblack rounded-3xl text-white py-12 lg:mb-[100px] mb-16" id="carmagnets">
        <h2 className="lg:text-[70px] text-[50px] uppercase lg:leading-[80px] leading-[55px] font-bold text-center ">Car <span className="text-4pblue lg:text-[80px] text-[55px]">Magnets</span></h2>
        <p className="text-4pred lg:text-[28px] text-[22px] py-2 font-bold text-center ">Mobile Marketing Made Easy!</p>
        <div className="flex flex-wrap lg:px-16 px-6 lg:pt-12 pt-8">
          <div className="lg:w-5/12 w-full">
            <Image
              src="/images/car-magnets-printing.webp"
              alt="Cut Vinyls Lettering Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/car-magnets-printing.webp 768w, /images/car-magnets-printing.webp 1024w"
              width={432}
              height={452}
              className=""
              />
          </div>
          <div className="lg:w-7/12 w-full lg:px-8 pt-8 lg:pt-0 content-center">
            <p className="leading-[23px]">Transform any vehicle into a marketing tool with our removable car magnets. Perfect for temporary promotions or businesses with personal vehicles. High-quality magnetic materials ensure they stay secure while protecting your vehicle's finish. </p>
            <div className="grid lg:grid-cols-3 gap-6 text-4pblack mt-12">
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual lg:min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Easy to Remove</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual lg:min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Weather-Resistant</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual lg:min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Custom Sizes</p></div>
            </div>
            <div className="lg:w-7/12 w-[370px] mt-12 mx-auto lg:mx-0">
              <Button4P buttonText={'Order Your Car Magnets'} buttonLink={'#contact'} buttonBgAnimation={'btn-white-to-red'} iconOption={3} textColor={'text-white'}/>
            </div>
          </div>
        </div>
      </div>

      {/******************  Yard Signs Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="yardsigns">
        <div className="flex flex-wrap">
          <div className="lg:w-5/12 w-full lg:pe-4 px-6 lg:ps-0 lg:pt-24 ">
            <h2 className="lg:text-[70px] text-[50px] uppercase lg:leading-[80px] leading-[55px] font-bold">Yard <span className="text-4pblue lg:text-[80px] text-[55px] lg:block">Signs</span></h2>
            <p className="text-4pred lg:text-[28px] text-[22px] lg:py-6 py-2 font-bold">Get Noticed in Your Community!</p>
            <p className="leading-[23px]">Make an impact with durable, weather-resistant yard signs perfect for real estate, events, or business promotions. Our signs feature sturdy construction, vibrant colors that resist fading, and stakes included for easy installation. Whether you need one sign or hundreds, we deliver professional quality that gets your message noticed.</p>
          </div>
          <div className="lg:w-7/12 w-full px-6 lg:px-0 justify-items-end pt-8 lg:pt-0">
            <Image
              src="/images/yard-signs-image.webp"
              alt="Cut Vinyls Lettering Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/yard-signs-image.webp 768w, /images/yard-signs-image.webp 1024w"
              width={690}
              height={569}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:mt-[-90px]">
          <div className="lg:w-3/12 w-[370px] mt-12 lg:pe-8 mx-auto lg:mx-0 content-center order-1 lg:order-0">
            <Button4P buttonText={'Order Your Signs'} buttonLink={'#contact'} buttonBgAnimation={'btn-white-to-red'} iconOption={3} textColor={'text-white w-full text-center ms-[-30px]'}/>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 text-4pblack lg:mt-12 mt-6 lg:w-6/12 w-full px-6 lg:px-0 order-0 lg:order-1">
            <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Weather-Proof</p></div>
            <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Double-Sided Options</p></div>
            <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Bulk Orders Available</p></div>
          </div>
        </div>
      </div>

      {/******************  Stickers Die Cut and Full Decals Section ****************************/}
      <div className="lg:bg-gradient-to-l bg-gradient-to-t from-[#EFEEEE] lg:from-75% from-80% to-whitwe lg:to-75% to-80% py-16 lg:mb-[100px] mb-16" id="stickers">
        <div className="container">
          <div className="lg:w-9/12 justify-self-end lg:pb-8 px-6 lg:px-0">
            <h2 className="lg:text-[70px] text-[45px] uppercase lg:leading-[80px] leading-[55px] font-bold">Stickers <span className="text-4pblue lg:text-[80px] text-[55px] block">(Die-cut, Cut Vinyl, and Full Decals)</span></h2>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:w-[540px] w-full lg:me-8 order-1 lg:order-0 px-6 lg:px-0">
              <Image
                src="/images/die-cut-cut-vinyl-full-decals.webp"
                alt="Die cut, Cut vinyl Full Decals"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/die-cut-cut-vinyl-full-decals.webp 768w, /images/die-cut-cut-vinyl-full-decals.webp 1024w"
                width={537}
                height={573}
                className=""
              />
            </div>
            <div className="lg:w-6/12 flex flex-wrap w-full order-0 lg:order-1 px-6 lg:px-0 pb-8 lg:pb-0">
              <div className="order-0 lg:order-0">
                <p className="text-4pred text-[28px] py-6 font-bold">Make Your Brand Stick!</p>
                <p className="leading-[23px]">From die-cut logos to full-color decals, our custom stickers are perfect for product labeling, promotional giveaways, or brand awareness. Choose from various materials and finishes to create the perfect sticker for any application:</p>
                <ul className="list-disc ms-6 mt-4">
                  <li><span className="font-bold text-[25px]">Die-cut:</span> Custom shapes for logos and designs</li>
                  <li><span className="font-bold text-[25px]">Cut Vinyl:</span> Single-color, durable options</li>
                  <li><span className="font-bold text-[25px]">Full Decals:</span> Vibrant, full-color graphics</li>
                </ul>
              </div>
              <div className="lg:w-7/12 w-[370px] mt-8 lg:pe-8 mx-auto lg:mx-0 order-2 lg:order-1">
                <Button4P buttonText={'Order Your Stickers'} buttonLink={'#contact'} buttonBgAnimation={'btn-white-to-red'} iconOption={3} textColor={'text-white w-full text-center ms-[-30px]'}/>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 text-4pblack mt-12 order-1 lg:order-2 w-full">
                <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Indoor/ Outdoor Use</p></div>
                <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Custom Shapes</p></div>
                <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Bulk Options Available</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/******************  Apparel Section ****************************/}
      <div className="lg:mb-[100px] mb-16" id="apparel">
        <div className="container flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-[575px] bg-4pred lg:ps-12 ps-6 pe-6 lg:pe-0 content-center lg:rounded-l-lg pt-8 lg:pt-0 pb-8 lg:pb-0">
            <h2 className="text-white lg:text-[70px] text-[50px] leading-[70px] font-bold uppercase">Apparel</h2>
            <p className="lg:text-[28px] text-[22px] font-bold py-2">Brand Your Team with Style!</p>
            <p className="leading-[23px] text-white">Transform your team's appearance with our custom apparel services. From professional uniforms to promotional wear, we help you create a cohesive brand identity that makes an impact.</p>
          </div>

          <div className="lg:w-[675px] w-[90%]">
            <Image
              src="/images/apparel-image.webp"
              alt="Cut Vinyls Lettering Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/apparel-image.webp 768w, /images/apparel-image.webp 1024w"
              width={675}
              height={401}
              className="lg:rounded-r-xl"
            />
          </div>
        </div>
      </div>

      {/******************  T-Shirts Section ****************************/}
      <div className="container flex flex-wrap lg:mb-[100px] mb-16" id="t-shirts">
        <div className="lg:w-6/12 w-full flex flex-wrap lg:flex-nowrap order-1 lg:order-0">
          <Image
            src="/images/t-shirts-short-and-long-sleeve.webp"
            alt="T-shirts Short and Long Sleeve"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/t-shirts-short-and-long-sleeve.webp 768w, /images/t-shirts-short-and-long-sleeve.webp 1024w"
            width={510}
            height={573}
            className="shadow-usual w-[90%] lg:w-[510px]"
          />
          <div className="grid grid-cols-1 gap-6 text-4pblack h-fit lg:ms-[-140px] w-full px-6 lg:px-0 self-center pt-8 lg:pt-0">
            <div className="bg-white lg:p-6 px-2 border-[1px] border-4plight-grey rounded-xl shadow-usual lg:min-h-[99px] min-h-[75px] lg:max-w-[180px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Premium Quality</p></div>
            <div className="bg-white lg:p-6 px-2 border-[1px] border-4plight-grey rounded-xl shadow-usual lg:min-h-[99px] min-h-[75px] lg:max-w-[180px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Bulk Orders</p></div>
            <div className="bg-white lg:p-6 px-2 border-[1px] border-4plight-grey rounded-xl shadow-usual lg:min-h-[99px] min-h-[75px] lg:max-w-[180px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Long Lasting Prints</p></div>
          </div>
        </div>

        <div className="lg:w-6/12 pt-4 order-0 lg:order-1 px-6 lg:px-0 pb-8 lg:pb-0">
          <h2 className="lg:text-[70px] text-[50px] uppercase lg:leading-[80px] leading-[50px] font-bold">T-shirts<span className="text-4pblue lg:text-[80px] text-[55px] block">(Short and Long Sleeve)</span></h2>
          <p className="text-4pred lg:text-[28px] text-[22px] py-2 font-bold">Comfort Meets Brand Identity!</p>
          <p className="leading-[23px] lg:pe-4">High-quality custom t-shirts perfect for teams, events, or merchandise. Choose from various styles, colors, and printing options to create the perfect look. Available in both short and long sleeve options for year-round wear.</p>
          <div className="lg:w-7/12 w-[370px] mt-12 lg:pe-12 mx-auto lg:mx-0 content-center">
            <Button4P buttonText={'Order Your T-shirts'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white w-full text-center ms-[-30px]'}/>
          </div>
        </div>
      </div>

      {/******************  Polo Shirts Section ****************************/}
      <div className="container lg:mb-[100px] mb-16" id="poloshirt">
        <div className="rectangle-formated-black lg:pt-44 pt-8 lg:ps-24 ps-6 pb-20 lg:pe-16 pe-6 rounded-3xl">
          <div className="flex flex-wrap">
            <div className="lg:w-7/12 w-full">
              <h2 className="lg:text-[70px] text-[45px] text-white uppercase lg:leading-[80px] leading-[50px] font-bold">Polo <span className="text-4pblue lg:text-[80px] text-[50]">Shirts</span></h2>
              <p className="text-4pred lg:text-[28px] text-[22px] font-bold">Professional Look, Custom Style!</p>
            </div>
            <div className="lg:w-5/12 w-full lg:ps-4 pt-4">
              <p className="leading-[23px] text-white">Perfect for business casual environments, customer-facing staff, or corporate events. Professional-grade materials ensure comfort and durability.</p>
            </div>
          </div>

          <div className="flex flex-wrap pt-12">
            <div className="lg:w-5/12 lg:pe-8">
              <div className="lg:w-9/12 w-[370px] lg:pb-12 mx-auto lg:mx-0 content-center">
                <Button4P buttonText={'Order Your Polo Shirts'} buttonLink={'#contact'} buttonBgAnimation={'btn-white-to-red'} iconOption={3} textColor={'text-white w-full text-center ms-[-30px]'}/>
              </div>
              <div className="grid lgLgrid-cols-2 gap-6 text-4pblack mt-12 pb-8 lg:pb-0">
                <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Professional Embroidery</p></div>
                <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Corporate Styling</p></div>
                <div className="lg:col-span-2 lg:w-6/12 mx-auto bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Multiple Colors</p></div>
              </div>
            </div>
            <div className="lg:w-7/12 justify-items-end">
              <Image
                src="/images/polo-shirts-image.webp"
                alt="Polo Shirts"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/polo-shirts-image.webp 768w, /images/polo-shirts-image.webp 1024w"
                width={582}
                height={436}
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/******************  Hoodies Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16" id="hoodies">
        <div className="lg:w-6/12 w-full justify-items-end content-end z-10 lg:pt-32 px-6 lg:px-0 order-1 lg:order-0 hidden md:block">
          <Image
            src="/images/hoodies-image.webp"
            alt="Hoodies Image"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/hoodies-image.webp 768w, /images/hoodies-image.webp 1024w"
            width={582}
            height={651}
            className=""
          />
        </div>
        <div className="lg:w-7/12 w-full lg:pe-16 order-0 lg:order-1">
          <div className="rectangle-cuted-blue-slide rounded-3xl lg:ps-40 ps-8 lg:pe-24 pe-6 lg:pb-24 pb-8 lg:ms-[-124px] pt-16">
            <div className="border-l-[15px] border-white ps-6 lg:max-h-[271px] content-center">
              <h2 className="text-4pred lg:text-[80px] text-[50px] leading-[45px] font-bold ">Hoodies</h2>
              <p className="font-bold lg:text-[28px] text-[22px] py-4">Cozy Corporate Branding! </p>
              <p className="text-white leading-[23px] pb-8">Keep your team warm while promoting your brand. Our custom hoodies combine comfort with style, perfect for staff uniforms, merchandise, or promotional giveaways.</p>
              <div className="lg:w-10/12 mx-auto lg:mx-0">
                <Button4P buttonText={'Order your hoodies today'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
              </div>
            </div>
            <div className="w-full content-end z-10 md:hidden block mt-8">
              <Image
                src="/images/hoodies-image.webp"
                alt="Hoodies Image"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/hoodies-image.webp 768w, /images/hoodies-image.webp 1024w"
                width={582}
                height={651}
                className=""
              />
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:mt-24 mt-8 lg:me-[-150px]">
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Quality Materials</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Custom Designs</p></div>
              <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[99px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Comfortable Fit</p></div>
            </div>
          </div>
        </div>
      </div>

      {/******************  Jackets Section ****************************/}
      <div className="container flex flex-wrap relative lg:mb-[100px] mb-16" id="jackets">
        <div className="rectangle-cuted-red-tl-small rounded-md absolute right-0 top-0 lg:py-8 py-2 px-12">
        <h2 className="lg:text-[70px] text-[50px] uppercase leading-[80px] font-bold text-white">Jackets</h2>
        </div>
        <div className="lg:w-5/12 w-full content-center pt-12 order-2 lg:order-1 px-6 lg:px-0">
          <p className="font-bold lg:text-[28px] text-[22px] py-4">Professional Protection!</p>
          <p className="leading-[23px] pb-8 pe-2">Make an impression with custom branded jackets. Ideal for outdoor teams, corporate events, or promotional wear. Choose from various styles and materials for any season.</p>
          <div className="lg:w-7/12 w-[370px] mx-auto lg:mx-0">
            <Button4P buttonText={'Order your jackets'} buttonLink={'#contact'} buttonBgAnimation={'btn-red-to-blue'} iconOption={3} textColor={'text-white'}/>
          </div>
          <div className="grid grid-cols-2 gap-6 text-4pblack mt-12">
            <div className="bg-white py-4 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[64px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Weather-Resistant</p></div>
            <div className="bg-white py-4 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[64px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Professional Look</p></div>
            <div className="col-span-2 lg:w-6/12 mx-auto bg-white py-4 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[64px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Quality Embroidery</p></div>
          </div>
        </div>
        <div className="lg:w-7/12 w-full lg:ps-12 ps-6 pe-6 lg:pe-0 lg:pt-12 pt-8 order-0 lg:order-1">
          <Image
            src="/images/jackets-image.webp"
            alt="Jackets Image"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet="/images/jackets-image.webp 768w, /images/jackets-image.webp 1024w"
            width={618}
            height={594}
            className="shadow-usual"
          />
        </div>
      </div>

      {/******************  Caps and Winter Hats Section ****************************/}
      <div className="container lg:ps-44 lg:pe-12 lg:mb-[230px] mb-16" id="capshats">
        <div className="flex flex-wrap lg:flex-nowrap rounded-xl bg-4pgrey pt-16 px-6 lg:px-0">
          <div className="lg:w-[435px] w-[75%] lg:ms-[-177px]">
            <Image
              src="/images/caps-image.webp"
              alt="Hoodies Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/caps-image.webp 768w, /images/caps-image.webp 1024w"
              width={435}
              height={579}
              className="shadow-usual"
            />
          </div>
          <div className="lg:w-8/12 w-full flex flex-wrap lg:ps-12">
            <div className="order-1 lg:order-0 pt-8 lg:pt-0">
              <h2 className="lg:text-[70px] text-[50px] uppercase lg:leading-[80px] leading-[55px] font-bold">CAPS & <span className="text-4pblue lg:text-[80px] block">winter hats</span></h2>
              <p className="font-bold lg:text-[28px] text-[22px] py-4 text-4pred">Top Off Your Brand! </p>
              <p className="leading-[23px] pb-8 pe-12">Complete your uniform with custom headwear. From professional caps for daily wear to warm winter beanies, our custom embroidered headwear keeps your brand visible year-round. </p>
              <div className="grid lg:grid-cols-3 gap-6 text-4pblack mt-4 pb-16">
                <div className="bg-white py-4 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[64px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Professional Embroidery</p></div>
                <div className="bg-white py-4 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[64px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>All-Season Options</p></div>
                <div className="bg-white py-4 border-[1px] border-4plight-grey rounded-2xl shadow-usual min-h-[64px] content-center w-full justify-items-center text-center font-bold leading-[23px]"><p>Bulk Available</p></div>
              </div>
            </div>
            <div className="order-0 lg:order-1 w-[65%] lg:w-full flex ms-auto">
              <Image
                src="/images/winter-hats-image.webp"
                alt="Winter Hats Image"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/winter-hats-image.webp 768w, /images/winter-hats-image.webp 1024w"
                width={585}
                height={409}
                className="shadow-usual justify-self-end lg:me-[-115px] lg:mb-[-130px] mt-[-120px] lg:mt-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/******************  Stationary Printing Section ****************************/}
      <div className="container grid lg:grid-cols-2 gap-8 lg:mb-[100px] mb-16">
        <div className=" px-6 lg:px-0">
          <h2 className="lg:text-[70px] text-[50px] uppercase lg:leading-[80px] leading-[55px] font-bold">Stationery <span className="text-4pblue lg:text-[80px] block">Printing</span></h2>
          <p className="font-bold lg:text-[28px] text-[22px] py-4 text-4pred">Essential Marketing Materials for Your Business Success!</p>
          <p className="leading-[23px] pb-8 pe-12">Create a professional image with our high-quality printing services. From business cards to brochures, we ensure every piece reflects your brand's excellence.</p>

          <div className="grid grid-col-1 gap-8">
            <StationaryCardUp {...StationaryCardInfo[0]} id='businesscards'/>
            <StationaryCardDown {...StationaryCardInfo[1]} id='carbonlessforms'/>
            <StationaryCardDown {...StationaryCardInfo[2]} id='brochures'/>
          </div>
        </div>
        <div className="px-6 lg:px-0">
          <div className="grid grid-col-1 gap-8">
            <StationaryCardUp {...StationaryCardInfo[3]} id='postcards'/>
            <StationaryCardDown {...StationaryCardInfo[4]} id='flyers'/>
            <StationaryCardUp {...StationaryCardInfo[5]} id='doorhangers'/>
            <Image
              src="/images/logo-grey.svg"
              alt="Hoodies Image"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/logo-grey.svg 768w, /images/logo-grey.svg 1024w"
              width={588}
              height={443}
              className="w-full lg:w-[588px]"
            />
          </div>
        </div>
      </div>

      {/******************  Why Choose Us Section ****************************/}
      <div className="container flex flex-wrap lg:flex-nowrap lg:mb-[100px] mb-16 px-6 lg:px-0">
        <div className="lg:w-4/12 w-full content-center">
          <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[52px] leading-[45px] uppercase mb-8 lg:mb-0">Why <span className="text-4pblue">Choose </span></h2>
          <p className="text-[14px] leading-[22px] pt-4 pe-6">Showcase your products or services with professional brochures. Available in various fold options and sizes to present your information beautifully. Premium paper stocks and finishes available. </p>
        </div>

        <div className="lg:w-8/12 w-full">
          <div className="flex flex-wrap lg:flex-nowrap justify-center  lg:ps-16">
            {WhyChosePrintingPageTop.map((data, index) => {
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
            {WhyChosePrintingPageBottom.map((data, index) => {
              return(
              <div key={index} className="lg:w-2/12 flex lg:block w-full border-[1px] border-4plight-grey rounded-lg lg:mx-4 lg:min-w-[180px] justify-items-center px-6 lg:py-8 py-4 shadow-usual bg-white mb-4 lg:mb-0">
                <img src={`/images/${data.image}`} width={83} height={70} className="me-4 lg:me-0" />
                <p className="text-center text-[20px] font-bold pt-2 leading-[23px]">{data.title}</p>
              </div>
              )
            })}

            <div className="w-6/12 my-8 mx-auto lg:mx-0 lg:hidden block">
              <Button4P buttonText={'Call Us'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue click_call_body'} iconOption={0} textColor={'text-white'}/>
            </div>
          </div>

        </div>

      </div>

      {/******************  Our Process Section ****************************/}
        <div className="container lg:mb-[100px] mb-16">
          <h2 className="font-bold lg:text-[60px] lg:leading-[60px] text-[52px] leading-[45px] mb-8 lg:mb-0 text-center">OUR <span className="lg:text-[80px] text-4pblue">PROCESS </span></h2>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:px-16 lg:mt-16 px-8">
            {OurProcessPrinting.map((data, index) => {
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

      {/****************** Take First Step Section ****************************/}
      <div className="container lg:mb-[100px] mb-16">
        <div className="custom-path lg:min-h-[400px] lg:h-[400px]">
          <div className="back-red-wrapping-page min-h-[400px] lg:rounded-r-xl lg:ps-[389px] pe-8 ps-8 content-center text-white py-8 lg:py-0">
            <h2 className="lg:text-start text-center font-bold text-[60px] leading-[60px] uppercase">Take The <span className="text-4pblack">First Step</span></h2>
            <h3 className="lg:text-start text-center text-[30px] uppercase font-bold lg:w-[35rem] leading-[35px] lg:pt-8">Transform Your Brand Today</h3>
            <p className="lg:text-start text-center leading-[23px] lg:w-[36rem] py-6">Connect with our printing experts to discuss your project and receive a personalized quote.</p>
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

export default CommercialPrinting;
