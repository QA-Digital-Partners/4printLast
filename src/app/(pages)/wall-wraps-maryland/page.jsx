import Button4P from "@/app/components/Button";
import CitiesOnMapSEO from "@/app/components/CitiesOnMap";
import ContactForm from "@/app/components/ContactForm";
import ContactFormFooter from "@/app/components/ContactFormFooter";
import ImageCarousel from "@/app/components/ImageCarousel";
import MiniMenu from "@/app/components/MiniMenu";
import ReviewSection from "@/app/components/ReviewSection";
import { MiniMenuWallWrap, OurProcessWallWarp, WallImpact, WallWrapCountriesLeft, WallWrapCountriesright, WallWrapGalery } from "@/app/data/data";
import Image from "next/image";
import React from "react"

const WallWraps = (props) => {
  return (
    <>
      {/****************** Banner Secion ****************************/}
      <section className="wall-wrap lg:pt-64 lg:-mt-64 lg:pb-24 pb-44 -mt-32 pt-44">
        <div className="container flex flex-wrap px-6 lg:px-0">
          <div className="lg:w-6/12">
            <h1 className="lg:text-[95px] text-[50px] font-bold uppercase lg:leading-[85px] leading-[55px] pb-8 w-full relative lg:z-20 order-1 lg:order-0 text-white">WALL WRAP <br /> 
                        <span className="text-4pred">Services in Maryland</span></h1>
            <p className="text-white text-[18px] lg:pb-4 pb-12 lg:mt-6 lg:pe-8 ">At 4Print, we specialize in turning ordinary walls into powerful branding and design opportunities. Our wall wrap services in Maryland help businesses of all sizes create bold, professional environments that make a lasting impression on clients, customers, and employees. Whether it’s a retail storefront, corporate office, restaurant, school, airport, or healthcare facility, our custom wall graphics transform blank spaces into visually engaging statements that reflect your brand’s personality and values.</p>

            <div className="bg-4pblue flex flex-wrap gap-2 justify-center py-4 lg:py-0 text-white rounded-xl lg:max-w-[550px] mb-12 lg:mb-0">
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

          <div className="lg:w-6/12 content-end ">
            <div className="bg-white rounded-lg lg:p-4 p-6">
              <p className="text-[#121212] text-[18px] pb-4">While our main focus is on commercial projects, we also provide wall wrap solutions for homeowners looking to add creativity and style to their living spaces. From accent walls to custom murals, our team can bring your vision to life with the same premium materials and attention to detail trusted by businesses across the DMV area.</p>
              <p className="text-[#121212] font-bold leading-[25px] text-[18px]">Backed by certified installers, industry-leading technology, and a reputation for delivering exceptional results, 4Print ensures every wall wrap is durable, visually striking, and tailored to your goals. If you’re ready to reimagine your space with a design that truly stands out, our team is here to help, from concept to flawless installation.</p>
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
      <section className="container lg:mb-[100px] px-4 mb-12">
        <div className="border-2 border-4plight-grey rounded-lg lg:py-4 pt-4 lg:mx-[-30px]">
          <MiniMenu toMap={MiniMenuWallWrap}/>
        </div>
      </section>

      {/****************** Commercial Wall Secion ****************************/}
      <section id="commercial" className="lg:mb-[100px] mb-[60px] px-6 lg:px-0">
        <div className="container lg:pb-6 lg:pb-0 pb-6">
          <h2 className="lg:text-[70px] text-[45px] text-center font-bold uppercase lg:leading-[70px] leading-[45px] pb-8 w-full relative lg:z-20 order-1 lg:order-0">Commercial Wall 
                        <span className="text-4pred lg:block lg:text-[80px]"> Wrap Applications</span></h2>
          <p className="text-[18px] leading-[25px] pb-4 text-center lg:px-28">In today’s competitive market, businesses need every advantage to capture attention and leave a lasting impression. Wall wraps are one of the most effective ways to transform plain walls into dynamic marketing tools. At 4Print, we design and install commercial wall wraps that help brands stand out, communicate their message, and create memorable experiences for anyone who steps inside your space.</p>
        </div>

        <div className="bg-4pgrey rounded-lg lg:pb-16 p-6">
          <div className="container flex flex-wrap lg:pt-16">
            <div className="lg:w-7/12">
              <p className="text-4pblue text-[28px] leading-[28px] font-bold lg:pb-8 pb-6">Where Wall Wraps Make the Biggest Impact</p>
              <ul className="list-disc">
                {WallImpact.map((data, index) => (
                  <li key={index} className="ms-6 pe-4 leading-[25px] text-[18px] pb-2"><b>{data.title}</b> {data.desc}</li>
                ))}
              </ul>
            </div>

            <div className="lg:w-5/12 w-full lg:pt-16">
              <ImageCarousel imageData={WallWrapGalery} imageWidth={486} imageHeigh={516} sectionId={'wallwrapmaryland'}/>
            </div>

            <div className="lg:w-7/12 lg:pt-12" id="whywall">
              <p className="text-4pblue text-[28px] leading-[28px] font-bold pb-8 pt-8 lg:pt-0 ">Why Businesses Choose Wall Wraps</p>
              <p className="lg:pb-4">Commercial wall wraps do more than decorate. They:</p>
              <ol className="list-decimal text-[18px]">
                <li className="ms-6 pe-4 leading-[25px] text-[18px]">Create a professional atmosphere that reflects your brand identity.</li>
                <li className="ms-6 pe-4 leading-[25px] text-[18px]">Make use of underutilized wall space for advertising and storytelling.</li>
                <li className="ms-6 pe-4 leading-[25px] text-[18px]">Provide a cost-effective alternative to traditional décor or remodeling.</li>
                <li className="ms-6 pe-4 leading-[25px] text-[18px]">Offer durable, long-lasting visuals that can be easily updated when needed</li>
              </ol>
            </div>
            <div className="lg:w-5/12 w-full lg:pt-32 pt-6">
              <p className="text-[18px] font-bold">At 4Print, we partner with businesses across Maryland to create wall wrap solutions that are as strategic as they are eye-catching. Every project is tailored to your space, your goals, and your brand identity, ensuring your walls work as hard as you do.</p>
              <div className="lg:w-10/12 w-[280px] mx-auto lg:mx-0 mt-4 lg:mt-6">
                <Button4P buttonText={'Get a free estimate and consultation'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue me-0'} iconOption={3} textColor={'text-white'}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/******************  Review Section ****************************/}
      <ReviewSection />

      {/****************** Residencial and Personal Secion ****************************/}
      <section className="lg:mb-[100px] mb-[60px]" id="personal">
        <div className="flex flex-wrap lg:flex-nowrap container relative px-6 lg:px-0">
          <div className="lg:w-5/12 w-full z-10 content-center justify-center flex lg:block order-1 lg:order-0" >
            <Image 
              src="/images/residential-wall-wrap.webp"
              alt="Residential and personal wall wraps example"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/imagesresidential-wall-wrap.webp 768w, /images/residential-wall-wrap.webp 1024w"
              width={477}
              height={630}
              className="max-w-[320px] lg:max-w-[477px] rounded-lg"/>
          </div>
          <div className="lg:w-9/12 lg:-ms-24 lg:ps-36 ps-6 pe-6 lg:pt-16 pt-8 res-wall text-white lg:pe-12 lg:pb-16 pb-64 rounded-3xl order-0 lg:order-1 -mb-52 lg:mb-0">
            <h2 className="lg:text-[80px] text-[40px] leading-[40px] lg:leading-[80px] font-bold lg:leading-[80px] uppercase lg:pb-8 pb-4">Residential and Personal Wall Wraps</h2>
            <p className="pb-4">While our specialty lies in commercial projects, 4Print also provides wall wrap solutions for homeowners who want to bring creativity and personality into their living spaces. Wall wraps are a modern alternative to paint or wallpaper, allowing you to add unique designs without the long-term commitment of traditional décor.</p>
            <p className="font-bold pb-6">Popular uses for personal wall wraps include:</p>
            <ul className="list-disc ms-4 pb-6">
              <li>Custom murals for living rooms and bedrooms</li>
              <li>Themed designs for children’s playrooms</li>
              <li>Accent walls that showcase artwork, photography, or personal branding</li>
              <li>Home gyms or entertainment areas with bold, motivational visuals</li>

            </ul>
            <p>Every residential project is treated with the same professionalism and premium materials that businesses across Maryland rely on. Whether you’re looking to make a subtle statement or a dramatic transformation, our wall wrap services help turn your vision into reality.</p>
          </div>
        </div>
      </section>

      {/****************** CTA Secion ****************************/}
      <section className="container lg:mb-[100px] mb-16" id="contact">
        <div className="bg-contact-form-black lg:px-32 px-8 pt-16 text-white rounded-lg pb-32">
            <h2 className="lg:text-[70px] lg:leading-[80px] text-[28px] leading-[35px] font-bold uppercase text-center">Get Maryland’s Top Wall Wrap Installers<span className="lg:text-[80px] leading-[62px] lg:leading-[80px] text-[55px] block"></span></h2>
            <p className="lg:w-[35rem] leading-[23px] py-4 text-center mx-auto">Bring your vision to life with custom wall wrap services designed to impress. Whether you’re looking to elevate your business environment or add a creative touch to your personal space, 4Print delivers results you can trust.</p>
            <p className="font-bold text-[20px]"></p>
            
        </div>

        <div className="lg:mx-[78px] mx-8 bg-white rounded-lg border-[1px] border-4plight-grey flex flex-wrap lg:flex-nowrap mt-[-95px]">
            <div className="lg:w-[612px] p-8">
              <ContactForm orientation=""/>
            </div>
            <div className="lg:w-[432px] w-full flex justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592031.5746029995!2d-78.55608340956393!3d38.79954670463624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64debe9f190df%3A0xf2af37657655f6b1!2sMaryland%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1759264248408!5m2!1ses!2sco" 
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
            <h2 className="lg:w-7/12 font-bold lg:text-[80px] lg:leading-[80px] text-[55px] leading-[55px] mb-8 lg:mb-0">OUR WALL<span className="lg:text-[80px] text-4pblue block">WRAP PROCESS </span></h2>
            <p className="lg:w-5/12">At 4Print, we believe the best results come from a clear, proven process. From the first consultation to the final installation, our team guides you through every step, ensuring your wall wrap is customized, durable, and impactful.</p>
          </div>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:px-16 lg:mt-16 px-8">
            {OurProcessWallWarp.map((data, index) => {
              return(
                <div key={index} className="relative lg:col-span-6 col-span-1">
                  <div className="absolute top-[-12px] left-[-17px] lg:w-[176px] w-[120px] lg:h-[90px] h-[60px] bg-4pred rounded-tl-2xl"></div>
                  <div className="bg-white p-6 border-[1px] border-4plight-grey rounded-2xl relative z-10 shadow-usual min-h-[105px] lg:min-h-[280px] content-center w-full ">
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
      <section className="container lg:ps-12 lg:mb-[100px] mb-[60px]" id="why4print">
        <div className="bg-4pgrey rounded-xl pt-12 lg:ps-16 ps-6 lg:pe-16 pe-6 pb-16">
          <h2 className="lg:text-[70px] text-[46px] font-bold uppercase lg:leading-[80px] leading-[45px] lg:w-10/12 lg:-mb-8 -mb-4">
             Why Choose 
            <span className="text-4pred"> 4Print</span>
            <span className="text-4pblue block">for Wall Wrap Services  </span> <br /> 
            </h2>
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 order-2 lg:order-1 pb-6 lg:pb-0">
              <Image 
              src="/images/why-choose-4Print-for-wall-wrap-services.webp"
              alt="Why choose 4Print for Wall Wrap"
              sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
              srcSet="/images/why-choose-4Print-for-wall-wrap-services.webp 768w, /images/why-choose-4Print-for-wall-wrap-services.webp 1024w"
              width={588}
              height={479}
              className="lg:-ms-28 lg:min-w-[588px]"/>
            </div>
            <div className="lg:w-1/2 leading-[25px] order-1 lg:order-2 pb-6 lg:pb-0">
              <p className="leading-[25px] pb-8 ">Choosing the right partner for your wall wrap project is about more than just graphics on a wall, it’s about ensuring quality, durability, and a professional finish that elevates your space. At 4Print, we bring a combination of expertise, certifications, and customer-focused service that sets us apart.</p>
              <p className="font-bold">Proven Process & Quality Control</p>
              <p className="pb-8">Every project follows a streamlined process, from consultation and design to printing, installation, and final inspection. Nothing leaves our hands until it meets the highest standards of quality.</p>

              <p className="font-bold">Local Experience in Maryland</p>
              <p>Since 2021, we’ve helped businesses across the DMV area bring their spaces to life. Whether in Glen Burnie, Baltimore, or beyond, we understand the needs of local businesses and deliver solutions tailored to your environment.</p>
            </div>
            <div className="lg:w-1/2 lg:pt-8 lg:pe-6 order-3 lg:order-3 pb-6 lg:pb-0">
              <p className="font-bold">Certified Expertise </p>
              <p className="pb-8">Our installers are professionally trained and certified in advanced techniques from industry leaders like 3M and Geek Wraps. From handling premium materials to mastering complex applications, our team delivers precision and long-lasting results on every project.</p>

              <p className="font-bold">Premium Materials & Technology </p>
              <p>We use only high-quality vinyl and printing technology to ensure your wall wrap looks sharp and vibrant for years to come. By partnering with trusted brands, we provide durability you can count on, even in high-traffic areas.</p>
            </div>
            <div className="lg:w-1/2 w-full lg:pt-8 order-4 lg:order-4">
              <p className="font-bold">A Partner You Can Rely On </p>
              <p>We don’t just install wall wraps, we build lasting partnerships. Our team takes the time to understand your goals, provide creative input, and make the process as simple as possible. From first call to final reveal, you can expect clear communication, professional service, and results that speak for themselves.</p>

              <div className="lg:w-10/12 max-w-[370px] mx-auto lg:mx-0 mt-4 lg:mt-6">
                <Button4P buttonText={'Get a free estimate and consultation'} buttonLink={'tel:+14439981717'} buttonBgAnimation={'btn-red-to-blue me-0'} iconOption={3} textColor={'text-white'}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/****************** Wall Wrap Services Secion ****************************/}
      <section className="container lg:mb-[100px] mb-16">
        <div className="rectangle-formated-black-wall lg:pt-20 pt-8 lg:ps-24 ps-6 pb-20 lg:pe-16 pe-6 rounded-3xl text-white">
          <h2 className="lg:text-[70px] text-[45px] uppercase lg:leading-[80px] leading-[50px] font-bold">Wall Wrap Services <span className="text-4pblue lg:text-[80px] text-[50]">Across Maryland</span></h2>

          <div className="flex flex-wrap lg:pt-12">
            <div className="lg:w-6/12 lg:pe-8">
              <p className="pt-8 lg:pt-0">At 4Print, we’ve been helping businesses and organizations transform their spaces with high-quality wall wraps since 2021. From offices and retail stores to restaurants, gyms, and schools, our team has worked across Maryland to deliver professional designs and flawless installations that make a lasting impact.
                <br /><br/>
                We are based in Glen Burnie, MD, and depending on the project, our team can travel within a 50-mile radius for on-site wall wrap installations. Whether you need to elevate a single wall or transform an entire facility, we bring our expertise to your location when needed, ensuring convenience and reliable results.</p>
              <p className="text-4pred font-bold text-[28px] leading-[28px] lg:py-4 py-6">Maryland Counties We Serve</p>
              <div className="flex flex-wrap">
                <div className="lg:w-1/2">
                  <CitiesOnMapSEO cities={WallWrapCountriesLeft} citiesRow={1}/>
                </div>
                <div className="lg:w-1/2 pb-8 lg:pb-0">
                  <CitiesOnMapSEO cities={WallWrapCountriesright} />
                </div>
              </div>
            </div>

            <div className="lg:w-6/12 w-full lg:pe-6 justify-center flex flex-wrap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.081852085099!2d-76.6217046!3d39.1728599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7fdc1332cd389%3A0x1dee4584e17b5c5e!2s4%20Print%20Commercial%20Wraps!5e0!3m2!1sen!2sus!4v1749139923049!5m2!1sen!2sus" 
              width="550" 
              height="730" 
              style={{border:0}} 
              allowFullScreen="" 
              className="rounded-xl shadow-usual lg:w-[520px] w-[340px] lg:h-[520px] h-[550px] mb-8" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" />
              <p>If you’re outside of these counties or located in Washington, D.C. or Northern Virginia, we may still be able to assist you. All customers are welcome to schedule their wall wrap projects with us,  no matter where you’re coming from in the DMV area. <b>Contact us at <a href="tel:+14439981717" className="text-4pred hover:text-4pblue underline">(443) 998-1717</a> to discuss your project and location.</b></p>
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
      >
        <div className="flex flex-wrap">
          <h2 className="text-center font-bold lg:px-24 lg:text-[80px] text-[55px] leading-[60px] lg:leading-[80px] uppercase lg:leading-[80px] pb-6">Let’s Bring Your Walls to Life</h2>
          <div className="lg:w-1/2 lg:pe-4 ">Your walls are more than just surfaces, they’re opportunities to showcase your brand, tell your story, and create memorable experiences. At 4Print, we specialize in delivering wall wrap services in Maryland that combine premium materials, certified installation, and creative design to make your vision a reality.</div>
          <div className="lg:w-1/2">Whether you need to transform a single office wall, brand an entire retail space, or create high-impact graphics for a gym, school, or event venue, our team is ready to help.</div>
          <div className="lg:w-full text-center font-bold lg:px-36 lg:pt-4">Don’t wait to make your space unforgettable. Contact us today to schedule a consultation and receive a free personalized quote.</div>
        </div>
      </ContactFormFooter>
    </>
  )
};

export default WallWraps;
