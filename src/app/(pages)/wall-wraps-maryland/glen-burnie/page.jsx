import Button4P from "@/app/components/Button";
import CitiesOnMapSEO from "@/app/components/CitiesOnMap";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import ImageCarousel from "@/app/components/ImageCarousel";
import MiniMenu from "@/app/components/MiniMenu";
import ReviewSection from "@/app/components/ReviewSection";
import { MiniMenuWWGlenBurnie, OurProcessWWGlenBurnie, WallWrapGalery, WallWrapImpactGlenBurnie, WWCitiesLeftGlenBurnie, WWCitiesRightGlenBurnie } from "@/app/data/data";
import Image from "next/image";
import React from "react"

export const metadata = {
  title: "Wall Wrap Services in Glen Burnie, MD - 4Print",
  description: "Commercial wall wrap services in Glen Burnie, MD. 4Print transforms walls with premium materials, custom designs, & expert installation.",
};

const WallWraps = (props) => {
  return (
    <>
      {/****************** Banner Secion ****************************/}
      <section className="bg-4pgrey lg:pt-64 lg:-mt-64 lg:pb-24 pb-44 -mt-32 pt-44">
        <div className="container flex flex-wrap px-6 lg:px-0">
          <h1 className="lg:text-[95px] text-[45px] font-bold uppercase lg:leading-[85px] leading-[45px] pb-8 w-full relative lg:z-20">WALL WRAP SERVICES <br /> 
                        <span className="text-4pred">in Glen Burnie, MD</span></h1>
          <div className="lg:w-7/12">
            <p className="text-[18px] lg:pb-8 pb-12 lg:mt-6 lg:pe-8 ">At 4Print, we transform plain walls into dynamic branding opportunities through our professional wall wrap services in Glen Burnie, MD. Our expert team helps local businesses create impactful visual environments that captivate clients, inspire employees, and strengthen brand recognition. From retail establishments and corporate headquarters to dining venues, educational institutions, medical facilities, and transportation centers, our custom wall graphics convert empty surfaces into compelling brand statements that communicate your company's mission and character.</p>
            <div className="bg-4pblue min-h-[32px] w-[20rem] justify-self-end me-6 lg:block hidden"></div>
            <div className="bg-4pblue p-10 lg:me-6 text-white">
              <p>Beyond our primary focus on business applications, we also deliver wall wrap services in Glen Burnie, MD for residential clients seeking to infuse their homes with personalized style and creative flair. Whether creating feature walls or designing custom artwork displays, our professionals apply the same premium materials and meticulous craftsmanship that Glen Burnie businesses have trusted throughout the region.</p>
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
              <p className="text-[#121212] text-[18px] pb-4 font-medium pt-6">Supported by professionally certified technicians, cutting-edge equipment, and a proven track record of outstanding outcomes, 4Print guarantees every wall wrap installation is long-lasting, visually impressive, and perfectly aligned with your objectives. When you're prepared to transform your Glen Burnie space with distinctive design elements, our experienced team stands ready to assist from initial planning through expert installation.</p>
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
          <MiniMenu toMap={MiniMenuWWGlenBurnie} CP={2}/>
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
            <h2 className="uppercase lg:text-[60px] text-[45px] font-bold leading-[45px]">Business <span className="text-4pblue">Wall Wrap Solutions</span></h2>
            <p>In Glen Burnie's dynamic business landscape, companies require innovative approaches to attract customers and create memorable brand experiences. Wall wraps represent one of the most powerful methods for converting ordinary surfaces into effective marketing assets. At 4Print, we create and install business wall wraps that enable Glen Burnie brands to differentiate themselves, deliver clear messaging, and generate unforgettable impressions for everyone entering your establishment.</p>
          </div>

          <div className="w-full py-4">
            <p className="text-4pred text-center text-[28px] leading-[28px] font-bold">Optimal Applications for Wall Wrap Services in Glen Burnie, MD</p>
          </div>

          <div className="lg:w-1/2 lg:pt-6">
            <ul className="list-disc">
              {WallWrapImpactGlenBurnie.map((data, index) => (
                <li key={index} className="ms-6 pe-4 leading-[25px] text-[18px] pb-2"><b>{data.title}</b> {data.desc}</li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full lg:pt-16 px-0">
            <ImageCarousel imageData={WallWrapGalery} imageWidth={486} imageHeigh={515} sectionId={'wallwrapgalery'}/>
          </div>

          <div className="lg:w-7/12 lg:pt-12 lg:pe-8" id="whywall">
            <p className="text-4pblue text-[28px] leading-[28px] font-bold pb-8 pt-8 lg:pt-0 ">Benefits of Professional Wall Wrap Services</p>
            <p className="lg:pb-4">Business wall wraps in Glen Burnie, MD accomplish more than aesthetic enhancement. They:</p>
            <ol className="list-decimal text-[18px]">
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Establish professional environments that communicate your brand essence</li>
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Maximize unused wall areas for promotional messaging and narrative building</li>
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Deliver economical alternatives to conventional decoration or renovation projects</li>
              <li className="ms-6 pe-4 leading-[25px] text-[18px]">Supply resilient, enduring graphics that allow simple updates as requirements change</li>
            </ol>
          </div>

          <div className="lg:w-5/12 lg:pt-32 pt-6">
            <p className="text-[18px] font-bold">At 4Print, we collaborate with Glen Burnie businesses to develop wall wrap solutions that balance strategic thinking with visual appeal. Each installation is customized to your facility, objectives, and brand characteristics, ensuring your walls contribute meaningfully to your success.</p>
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
          <h2 className="lg:text-[70px] text-[40px] leading-[40px] lg:leading-[70px] font-bold uppercase lg:pb-8 pb-4 text-center w-full">Personal and Home
              <span className="text-4pblue block lg:text-[80px] "> Wall Wrap Options</span></h2>
          
          <div className="lg:w-6/12 lg:ps-0 pe-0 lg:pt-8 pt-4 lg:pe-12 lg:pb-16 pb-64 rounded-3xl -mb-52 lg:mb-0">
            <p className="pb-4">While we excel in commercial applications, 4Print also offers wall wrap services in Glen Burnie, MD for homeowners wanting to introduce originality and character into their residential environments. Wall wraps serve as contemporary alternatives to traditional paint or wallpaper, enabling distinctive designs without the permanent commitment of standard decorating approaches.</p>
            <p className="font-bold pb-6 text-[28px] leading-[28px] text-4pred">Common residential wall wrap applications include:</p>
            <ul className="list-disc ms-4 pb-6">
              <li>Personalized artwork for family rooms and sleeping areas</li>
              <li>Creative themes for children's activity spaces</li>
              <li>Statement walls featuring photography, art collections, or personal branding elements</li>
              <li>Home fitness or recreational areas with energizing, motivational graphics</li>

            </ul>
            <p>Each residential project receives identical professionalism and superior materials that Glen Burnie businesses depend on throughout Maryland. Whether pursuing subtle enhancement or dramatic renovation, our wall wrap services help realize your creative vision.</p>
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
            <h2 className="lg:text-[65px] lg:leading-[70px] text-[28px] leading-[35px] font-bold uppercase text-center">Expert Wall Wrap Installers Serving Glen Burnie</h2>
            <p className="lg:w-[37rem] leading-[23px] py-4 text-center mx-auto">Transform your space with professional wall wrap services in Glen Burnie, MD designed to create lasting impressions. Whether enhancing your business atmosphere or adding creative elements to your home, 4Print provides dependable results you can trust.</p>
            <p className="font-bold text-[20px]"></p>
            
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
            <h2 className="lg:w-7/12 font-bold lg:text-[80px] lg:leading-[80px] text-[65px] leading-[65px] mb-8 lg:mb-0">OUR WALL<span className="lg:text-[80px] text-4pblue block">WRAP PROCESS </span></h2>
            <p className="lg:w-5/12">At 4Print, we believe the best results come from a clear, proven process. From the first consultation to the final installation, our team guides you through every step, ensuring your wall wrap is customized, durable, and impactful.</p>
          </div>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:px-16 lg:mt-16 px-8">
            {OurProcessWWGlenBurnie.map((data, index) => {
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
             Why Select 
            <span className="text-4pred"> 4Print</span>
            <span className="text-4pblue"> for Wall Wrap Services in Glen Burnie, MD</span> <br /> 
            </h2>
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 order-2 lg:order-1 pb-6 lg:pb-0 lg:pe-4">
              <p className="leading-[25px] pb-8 ">Selecting the ideal partner for your Glen Burnie wall wrap project involves more than applying graphics to surfaces—it requires ensuring quality, longevity, and professional execution that enhances your environment. At 4Print, we combine specialized knowledge, industry certifications, and customer-centered service that distinguishes our offerings.</p>
              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Professional Certifications</p>
                <p className="pb-4">Our installation specialists receive comprehensive training and certification in advanced methods from industry authorities including 3M and Geek Wraps. From managing premium materials to executing complex applications, our team provides precision and lasting results on every Glen Burnie project.</p>
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
                <p className="font-bold text-4pred text-[20px]">Professional CertSuperior Materials & Equipmentifications</p>
                <p>We exclusively utilize top-grade vinyl and printing technology ensuring your wall wrap maintains sharp, vibrant appearance for years. Through partnerships with established manufacturers, we guarantee durability even in high-activity environments.</p>
              </div>

              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Systematic Process & Quality Standards</p>
                <p className="pb-8">Every project follows organized procedures from consultation and design through production, installation, and final inspection. No work leaves our facility until meeting the highest quality standards.</p>
              </div>

            </div>

            <div className="lg:w-1/2 lg:pt-6 order-4 lg:order-4">
              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] mb-6 lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Glen Burnie Area Expertise</p>
                <p>Since 2021, we've assisted businesses throughout the Glen Burnie region in bringing their spaces to life. Whether in Anne Arundel County, Baltimore, or surrounding areas, we understand local business requirements and provide solutions matched to your specific environment.</p>
              </div>

              <div className="bg-white rounded-lg py-4 px-4 shadow-usual border-4plight-grey border-[1px] mb-6 lg:min-h-[230px]">
                <p className="font-bold text-4pred text-[20px]">Premium Materials & Technology </p>
                <p>We use only high-quality vinyl and printing technology to ensure your wall wrap looks sharp and vibrant for years to come. By partnering with trusted brands, we provide durability you can count on, even in high-traffic areas.</p>

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
          <h2 className="lg:text-[70px] text-[45px] uppercase lg:leading-[80px] leading-[50px] font-bold">Wall Wrap Services <span className="text-4pblue lg:text-[80px] text-[50]">Throughout Glen Burnie and Maryland </span></h2>

          <div className="flex flex-wrap lg:pt-12">
            <div className="lg:w-6/12 lg:pe-8">
              <p className="pt-8 lg:pt-0">At 4Print, we've assisted Glen Burnie businesses and organizations in transforming their facilities with premium wall wraps since 2021. From offices and retail locations to restaurants, fitness centers, and schools, our team has operated across Maryland delivering professional designs and precise installations creating lasting impact.
                <br /><br/>
                We maintain our base in Glen Burnie, MD, and depending on project requirements, our crew travels within a 50-mile service area for on-location wall wrap installations. Whether you need single wall enhancement or complete facility transformation, we bring our expertise directly to your Glen Burnie location, ensuring convenience and reliable outcomes.</p>
              <p className="text-4pred font-bold text-[28px] leading-[28px] lg:py-4 py-6">Maryland Counties We Serve</p>
              <div className="flex flex-wrap">
                <div className="lg:w-1/2">
                  <CitiesOnMapSEO cities={WWCitiesLeftGlenBurnie} citiesRow={1}/>
                </div>
                <div className="lg:w-1/2 pb-8 lg:pb-0">
                  <CitiesOnMapSEO cities={WWCitiesRightGlenBurnie} />
                </div>
              </div>
            </div>

            <div className="lg:w-6/12 lg:pe-6 justify-center flex flex-wrap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus" 
              width="550" 
              height="730" 
              style={{border:0}} 
              allowFullScreen="" 
              className="rounded-xl shadow-usual lg:w-[520px] w-[340px] lg:h-[520px] h-[550px] mb-8" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" />
              <p>f you're located beyond these counties or situated in Washington, D.C. or Northern Virginia, we may still accommodate your needs. All customers are welcome to arrange wall wrap services with us, regardless of location throughout the DMV region. <b>Contact us at <a href="tel:+14439981717" className="text-4pred hover:text-4pblue underline">(443) 998-1717</a> to discuss your project and location.</b></p>
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
      >
        <div className="flex flex-wrap">
          <h2 className="text-center font-bold lg:px-0 lg:text-[70px] text-[45px] leading-[45px] lg:leading-[70px] uppercase lg:leading-[80px] pb-6">Transform Your Glen Burnie Walls Today</h2>
          <div className="lg:w-1/2 lg:pe-4 pb-8 lg:pb-0">Your walls represent more than structural elements, they're opportunities to display your brand, share your message, and generate memorable experiences. At 4Print, we specialize in providing wall wrap services in Glen Burnie, MD that blend premium materials, certified installation, and innovative design to bring your vision to reality.</div>
          <div className="lg:w-1/2 pb-4 lg:pb-0">Whether you need to renovate a single office wall, brand an entire retail location, or develop high-impact graphics for fitness facilities, schools, or event spaces, our Glen Burnie team is prepared to assist.</div>
          <div className="lg:w-full text-center font-bold lg:px-36 lg:pt-4">Don't delay making your space extraordinary. Contact us today to arrange a consultation and receive your free customized quote.</div>
        </div>
      </ContactFormFooter>
    </>
  )
};

export default WallWraps;
