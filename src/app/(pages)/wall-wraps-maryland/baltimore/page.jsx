import Button4P from "@/app/components/Button";
import CitiesOnMapSEO from "@/app/components/CitiesOnMap";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import ImageCarousel from "@/app/components/ImageCarousel";
import MiniMenu from "@/app/components/MiniMenu";
import ReviewSection from "@/app/components/ReviewSection";
import { MiniMenuWallWrapBaltimore, OurProcessWWBaltimore, WallWrapGalery, WallWrapImpactBaltimore, WWCitiesLeftBaltimore, WWCitiesLeftGlenBurnie, WWCitiesRightBaltimore, WWCitiesRightGlenBurnie } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Wall Wrap Services in Baltimore, MD - 4Print",
  description: "Commercial wall wrap services in Baltimore, MD. 4Print transforms walls with premium materials, custom designs, & expert installation",
};

const WallWraps = (props) => {
  return (
    <>
      {/****************** Banner Secion ****************************/}
      <section className="bg-4pgrey lg:pt-64 lg:-mt-64 lg:pb-24 pb-44 -mt-32 pt-44">
        <div className="container flex flex-wrap px-6 lg:px-0">
          <h1 className="lg:text-[95px] text-[45px] font-bold uppercase lg:leading-[85px] leading-[45px] pb-8 w-full relative lg:z-20">WALL WRAP SERVICES <br /> 
                        <span className="text-4pred">in Baltimore, MD</span></h1>
          <div className="lg:w-7/12">
            <p className="text-[18px] lg:pb-8 pb-12 lg:mt-6 lg:pe-8 ">At 4Print, we convert ordinary walls into powerful branding tools through our specialized wall wraps services in Baltimore, MD. Our skilled professionals assist Baltimore businesses in developing striking visual spaces that engage customers, motivate staff members, and elevate brand presence. From commercial storefronts and office environments to restaurants, schools, healthcare clinics, and transit hubs, our tailored wall graphics turn blank surfaces into persuasive brand messages that reflect your organization's values and identity.</p>
            <div className="bg-4pblue min-h-[32px] w-[20rem] justify-self-end me-6 lg:block hidden"></div>
            <div className="bg-4pblue p-10 lg:me-6 text-white">
              <p>In addition to our core commercial focus, we provide wall wraps services in Baltimore, MD for homeowners looking to add unique personality and artistic expression to their living spaces. From accent walls to bespoke art installations, our technicians deliver the same high-quality materials and precise workmanship that Baltimore companies have valued across the metropolitan area.</p>
            </div>
            <div className="bg-4pblue flex flex-wrap gap-2 justify-center py-4 lg:py-0 text-white lg:max-w-[550px] mb-12 lg:mb-0">
              <div className="lg:w-[30%] w-[45%] items-center justify-items-center content-center py-6 lg:me-0 me-2">
                <Image 
                  src="/images/3m-white.svg"
                  alt=""
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/3m-white.svg 768w, /images/3m-white.svg 1024w"
                  width={78}
                  height={47}
                  className=""
                />
                <p className="text-center text-[18px] font-bold leading-[23px] pt-2">3M Certified Installers</p>
              </div>
              <div className="lg:w-[30%] w-[45%] items-center justify-items-center content-center py-6 lg:me-0 me-2">
                <Image 
                  src="/images/fast-turnaround-white.svg"
                  alt=""
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/fast-turnaround-white.svg 768w, /images/fast-turnaround-white.svg 1024w"
                  width={78}
                  height={47}
                  className=""
                />
                <p className="text-center text-[18px] font-bold leading-[23px] pt-2 lg:px-8">Fast Turnaround</p>
              </div>
              <div className="lg:w-[30%] w-[48%] items-center justify-items-center content-center py-6">
                <Image 
                  src="/images/award-winning-white.svg"
                  alt=""
                  sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                  srcSet="/images/award-winning-white.svg 768w, /images/award-winning-white.svg 1024w"
                  width={78}
                  height={47}
                  className=""
                />
                <p className="text-center text-[18px] font-bold leading-[23px] pt-2 px-0">Award-winning Customer Service</p>
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 content-end ">
            <div className="lg:p-4">
                <Image 
                src="/images/wall-wrap-services-in-glen-burnie.webp"
                alt="Wall Wrap services in Glen Burnie "
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/wall-wrap-services-in-glen-burnie.webp 768w, /images/wall-wrap-services-in-glen-burnie.webp 1024w"
                width={486}
                height={425}
                className=""
                />
              <p className="text-[#121212] text-[18px] pb-4 font-medium pt-6">Backed by certified installation experts, state-of-the-art technology, and a consistent record of exceptional results, 4Print ensures each wall wrap project is durable, aesthetically striking, and perfectly suited to your requirements. When you're ready to elevate your Baltimore property with unique visual elements, our qualified team is prepared to guide you from concept development through professional execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/****************** Contact Form Secion ****************************/}
      <section className="container lg:-mt-12 -mt-32 mb-16 px-6 lg:px-0 ">
        <div className="bg-white rounded-xl shadow-usual py-6 px-10">
          <ContactForm orientation="horizontal"/>
        </div>
      </section>

      {/****************** Mini Menu Secion ****************************/}
      <section className="container lg:mb-[164px] px-4 mb-12">
        <div className="border-2 border-4plight-grey rounded-lg lg:py-4 pt-4 lg:mx-[-30px]">
          <MiniMenu toMap={MiniMenuWallWrapBaltimore} CP={2}/>
        </div>
      </section>

      {/****************** Business Solutions Secion ****************************/}
      <section id="business" className="container lg:mb-[100px]">
        <div className="border-[2px] rounded-lg border-4pgrey lg:px-10 px-6 flex flex-wrap lg:pb-10 pb-16">
          <div className="lg:w-[48%] lg:-mt-16">
            <Image 
              src="/images/business-wall-wrap-solutions.webp"
              alt="Business wall wrap solutions"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/business-wall-wrap-solutions.webp 768w, /images/business-wall-wrap-solutions.webp 1024w"
              width={486}
              height={485}
              className=""
            />
          </div>

          <div className="lg:w-[52%] lg:pt-16 pt-8">
            <h2 className="uppercase lg:text-[60px] text-[45px] font-bold leading-[45px]">Commercial <span className="text-4pblue">Wall Wrap Applications</span></h2>
            <p>In Baltimore's competitive business environment, organizations need creative strategies to draw clientele and build lasting brand memories. Wall wraps stand among the most effective tools for transforming standard surfaces into valuable marketing platforms. At 4Print, we design and install commercial wall wraps that help Baltimore businesses stand apart, communicate clear messages, and create lasting impressions for all who visit your location.</p>
          </div>

          <div className="w-full py-4">
            <p className="text-4pred text-center text-[28px] leading-[28px] font-bold">Ideal Uses for Wall Wraps Services in Baltimore, MD</p>
          </div>

          <div className="lg:w-1/2 lg:pt-6">
            <ul className="list-disc">
              {WallWrapImpactBaltimore.map((data, index) => (
                <li key={index} className="ms-6 pe-4 leading-[25px] text-[18px] pb-2"><b>{data.title}</b> {data.desc}</li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full lg:pt-16 px-0">
            <ImageCarousel imageData={WallWrapGalery} imageWidth={486} imageHeigh={515} sectionId={'wallwrapgalery'}/>
          </div>

          <div className="lg:w-7/12 lg:pt-12 lg:pe-8" id="whywall">
            <p className="text-4pblue text-[28px] leading-[28px] font-bold pb-8 pt-8 lg:pt-0 ">Advantages of Professional Wall Wrap Solutions</p>
            <p className="lg:pb-4">Commercial wall wraps in Baltimore, MD provide more than visual improvement. They:</p>
            <ol className="list-decimal text-[18px]">
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Create polished spaces that convey your brand identity</li>
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Utilize underutilized wall space for advertising messages and storytelling</li>
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Offer cost-effective substitutes to traditional painting or remodeling efforts</li>
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Provide durable, long-lasting visuals that permit easy refreshes as needs evolve</li>
            </ol>
          </div>

          <div className="lg:w-5/12 lg:pt-32 pt-6">
            <p className="text-[18px] font-bold">At 4Print, we partner with Baltimore organizations to create wall wrap solutions that merge strategic planning with artistic design. Every installation is tailored to your space, goals, and brand personality, ensuring your walls actively contribute to your business success.</p>
            <div className="lg:w-10/12 w-[340px] mx-auto lg:mx-0 mt-4 lg:mt-6">
              <Button4P buttonText={'Get a free estimate and consultation'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue me-0'} iconOption={3} textColor={'text-white'}/>
            </div>
          </div>
        </div>
      </section>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/****************** Residencial and Personal Secion ****************************/}
      <section className="lg:mb-[100px] mb-[60px]" id="options">
        <div className="flex flex-wrap container relative px-6 lg:px-0">
          <h2 className="lg:text-[70px] text-[40px] leading-[40px] lg:leading-[70px] font-bold uppercase lg:pb-8 pb-4 text-center w-full">Residential and Personal
              <span className="text-4pblue block lg:text-[80px] "> Wall Wrap Services</span></h2>
          
          <div className="lg:w-6/12 lg:ps-0 pe-0 lg:pt-8 pt-4 lg:pe-12 lg:pb-16 pb-64 rounded-3xl -mb-52 lg:mb-0">
            <p className="pb-4">While we specialize in business installations, 4Print also delivers wall wraps services in Baltimore, MD for residents seeking to bring creativity and personality into their home environments. Wall wraps function as modern substitutes for conventional paint or wallpaper, allowing unique designs without the permanence of traditional decorating methods.</p>
            <p className="font-bold pb-6 text-[28px] leading-[28px] text-4pred">Popular home wall wrap uses include:</p>
            <ul className="list-disc ms-4 pb-6">
              <li>Custom graphics for living rooms and bedrooms</li>
              <li>Imaginative designs for children's playrooms</li>
              <li>Feature walls displaying photographs, art pieces, or personal brand imagery</li>
              <li>Home gym or entertainment spaces with inspiring, motivational visuals</li>

            </ul>
            <p>Every residential installation receives the same professionalism and premium materials that Baltimore businesses rely on throughout the region. Whether seeking subtle refinement or bold transformation, our wall wrap solutions help achieve your design aspirations.</p>
          </div>
          <div className="lg:w-6/12 w-full z-10 content-center justify-center flex lg:block" >
            <Image 
              src="/images/personal-and-home-wall-wrap-options.webp"
              alt="personal and home wall wrap options"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/personal-and-home-wall-wrap-options.webp 768w, /images/personal-and-home-wall-wrap-options.webp 1024w"
              width={588}
              height={632}
              className="max-w-[320px] lg:max-w-[588px] rounded-lg"/>
          </div>
        </div>
      </section>

      {/****************** CTA Secion ****************************/}
      <section className="container lg:mb-[100px] mb-16" id="contact">
        <div className="bg-contact-form lg:px-12 px-8 pt-16 text-white rounded-lg pb-32">
            <h2 className="lg:text-[65px] lg:leading-[70px] text-[28px] leading-[35px] font-bold uppercase text-center">Professional Wall Wrap Contractors in Baltimore</h2>
            <p className="lg:w-[42rem] leading-[23px] py-4 text-center mx-auto">Upgrade your environment with expert wall wraps services in Baltimore, MD built to make powerful impressions. Whether improving your commercial setting or incorporating artistic touches into your residence, 4Print delivers consistent results you can count on.</p>
            <p className="font-bold text-[20px] lg:text-center">Request Your Free Consultation Today</p>
        </div>

        <div className="lg:mx-[78px] mx-8 bg-white rounded-lg border-[1px] border-4plight-grey flex flex-wrap lg:flex-nowrap mt-[-95px]">
            <div className="lg:w-[612px] p-8">
              <ContactForm orientation=""/>
            </div>
            <div className="lg:w-[432px] w-full flex justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus" 
                width="200" 
                height="400" 
                style={{border:0}} 
                allowFullScreen="" 
                className="rounded-xl shadow-usual lg:w-[431px] w-[360px] lg:h-[590px] h-[400px]" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
      </section>

      {/****************** Our Wall Process Secion ****************************/}
      <section className="" id="process">
        <div className="container lg:mb-[100px] mb-16">
          <div className="flex flex-wrap px-4 lg:px-0 pb-12 lg:pb-0">
            <h2 className="lg:w-8/12 font-bold lg:text-[60px] lg:leading-[60px] text-[65px] leading-[65px] mb-8 lg:mb-0">OUR COMPREHENSIVE WALL <span className="lg:text-[60px] text-4pblue">WRAP INSTALLATION METHOD </span></h2>
            <p className="lg:w-4/12">At 4Print, we recognize excellent results come from methodical, proven approaches. From first consultation through final application, our Baltimore professionals assist you through every stage, ensuring your wall wrap is customized, long-lasting, and impactful.</p>
          </div>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:px-16 lg:mt-16 px-8">
            {OurProcessWWBaltimore.map((data, index) => {
              return(
                <div key={index} className="relative lg:col-span-6 col-span-1">
                  <div className="absolute top-[-12px] left-[-17px] lg:w-[176px] w-[120px] lg:h-[90px] h-[60px] bg-4pred rounded-tl-2xl"></div>
                  <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual min-h-[105px] lg:min-h-[300px] content-center w-full ">
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

      {/****************** Why Choose Secion ****************************/}
      <section className=" lg:ps-12 lg:mb-[100px] mb-[60px] bg-4pgrey" id="why4print">
        <div className=" container  rounded-xl pt-12 lg:ps-0 ps-6 lg:pe-16 pe-6 pb-16">
          <h2 className="lg:text-[60px] text-[46px] font-bold uppercase lg:leading-[65px] leading-[45px] text-center pb-16">
             Why Choose 
            <span className="text-4pred"> 4Print</span>
            <span className="text-4pblue"> Wall Wraps Services in Baltimore, MD</span> <br /> 
            </h2>
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 order-2 lg:order-1 pb-6 lg:pb-0 lg:pe-4">
              <p className="leading-[25px] pb-8 ">Choosing the right provider for your Baltimore wall wrap installation means more than placing graphics on walls—it requires ensuring quality, durability, and professional implementation that transforms your space. At 4Print, we deliver specialized expertise, industry credentials, and client-focused service that sets our work apart.</p>
              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Industry Certifications</p>
                <p className="pb-4">Our installation professionals receive extensive training and certification in advanced techniques from industry leaders such as 3M and Geek Wraps. From handling premium materials to performing intricate installations, our team delivers accuracy and enduring results on every Baltimore assignment.</p>
              </div>              
            </div>

            <div className="lg:w-1/2 leading-[25px] order-1 lg:order-2 pt-6 lg:pb-0">
              <Image 
                src="/images/wgy-select-4print.webp"
                alt="Business wall wrap solutions"
                sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                srcSet="/images/wgy-select-4print.webp 768w, /images/wgy-select-4print.webp 1024w"
                width={588}
                height={409}
                className=""
              />
            </div>

            <div className="lg:w-1/2 lg:pt-6 lg:pe-4 order-3 lg:order-3 pb-6 lg:pb-0">
              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] mb-6 lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Premium Materials & Technology</p>
                <p>We exclusively work with top-tier vinyl and printing systems ensuring your wall wrap retains its crisp, brilliant appearance for years. Through relationships with trusted manufacturers, we ensure longevity even in high-traffic settings.</p>
              </div>

              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Structured Process & Quality Control</p>
                <p className="pb-8">Each project follows organized workflows from consultation and design through manufacturing, installation, and final review. No project is considered complete until it satisfies the highest quality expectations.</p>
              </div>

            </div>

            <div className="lg:w-1/2 lg:pt-6 order-4 lg:order-4">
              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] mb-6 lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Baltimore Regional Knowledge</p>
                <p>Since 2021, we've helped businesses across the Baltimore area in transforming their environments. Whether in Baltimore City, Baltimore County, or neighboring communities, we understand regional business needs and deliver solutions adapted to your unique space.</p>
              </div>

              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] mb-6 lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Reliable Partnership Philosophy</p>
                <p>We don't just install wall wraps—we establish lasting partnerships. Our professionals take time learning your objectives, providing creative recommendations, and streamlining the complete process. From first inquiry to final application, expect clear communication, professional conduct, and results that surpass expectations.</p>
              </div>

            </div>
            <div className="w-full order-5 lg:order-5 flex justify-center">
              <div className="lg:w-5/12 w-[370px] mx-auto lg:mx-0 mt-4 lg:mt-6 ">
                <Button4P buttonText={'Get a free estimate and consultation'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue me-0'} iconOption={3} textColor={'text-white'}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/****************** Wall Wrap Services Secion ****************************/}
      <section className="container lg:mb-[100px] mb-16">
        <div className="rectangle-formated-black-wall lg:pt-20 pt-8 lg:ps-24 ps-6 pb-20 lg:pe-16 pe-6 rounded-3xl text-white">
          <h2 className="lg:text-[70px] text-[45px] uppercase lg:leading-[80px] leading-[50px] font-bold">Wall Wrap Services <span className="text-4pblue lg:text-[80px] text-[50]">Across Baltimore and Maryland </span></h2>

          <div className="flex flex-wrap lg:pt-12">
            <div className="lg:w-6/12 lg:pe-8">
              <p className="pt-8 lg:pt-0">At 4Print, we've helped Baltimore businesses and institutions in enhancing their spaces with premium wall wraps since 2021. From corporate settings and retail shops to dining establishments, gyms, and educational facilities, our team has worked throughout Maryland providing professional designs and accurate installations that create powerful impact.
                <br /><br/>
                We operate from our base in Glen Burnie, MD, and based on project specifications, our team travels within a 50-mile coverage zone for on-site wall wrap installations. Whether you require a single wall upgrade or complete facility branding, we bring our capabilities directly to your Baltimore location, providing convenience and dependable results.</p>
              <p className="text-4pred font-bold text-[28px] leading-[28px] lg:py-4 py-6">Maryland Coverage Areas</p>
              <div className="flex flex-wrap">
                <div className="lg:w-1/2">
                  <CitiesOnMapSEO cities={WWCitiesLeftBaltimore} citiesRow={1}/>
                </div>
                <div className="lg:w-1/2 pb-8 lg:pb-0">
                  <CitiesOnMapSEO cities={WWCitiesRightBaltimore} />
                </div>
              </div>
            </div>

            <div className="lg:w-6/12 lg:pe-6 justify-center flex flex-wrap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98820.85419710532!2d-76.70288652403198!3d39.28481023352079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x44896a84223e758!2sBaltimore%2C%20Maryland%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1760374887373!5m2!1ses!2sco" 
              width="550" 
              height="730" 
              style={{border:0}} 
              allowFullScreen="" 
              className="rounded-xl shadow-usual lg:w-[520px] w-[340px] lg:h-[520px] h-[550px] mb-8" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" />
              <p>If you're positioned outside these counties or located in Washington, D.C. or Northern Virginia, we may still serve your requirements. All clients are welcome to schedule wall wraps services with us, regardless of location across the DMV area. <b>Contact us at <a href="tel:+14439981717" className="text-4pred hover:text-4pblue underline">(443) 998-1717</a> to discuss your project needs and location information.</b></p>
            </div>
          </div>
        </div>
      </section>

      {/****************** Contact Form Section ****************************/}
      <ContactFormFooter
        title1={" "}
        title2={" "}
        text1={" "}
        text2={' '}
        bgColor={'-red'}
        mapHeight={600}
      >
        <div className="flex flex-wrap">
          <h2 className="text-center font-bold lg:px-0 lg:text-[70px] text-[45px] leading-[45px] lg:leading-[70px] uppercase lg:leading-[80px] pb-6">Transform Your Baltimore Walls Today</h2>
          <div className="lg:w-1/2 lg:pe-4 pb-8 lg:pb-0">Your walls represent more than physical boundaries—they're platforms to showcase your brand, communicate your story, and create unforgettable experiences. At 4Print, we focus on delivering wall wraps services in Baltimore, MD that combine superior materials, certified application, and creative design to transform your vision into reality.</div>
          <div className="lg:w-1/2 pb-4 lg:pb-0">Whether you need to refresh a single conference room wall, brand an entire commercial space, or produce high-impact graphics for gyms, schools, or event venues, our Baltimore professionals are ready to help.</div>
          <div className="lg:w-full text-center font-bold lg:px-36 lg:pt-4">Don't wait to make your space remarkable. Reach out today to schedule a consultation and obtain your free personalized quote.</div>
        </div>
      </ContactFormFooter>
    </>
  )
};

export default WallWraps;
