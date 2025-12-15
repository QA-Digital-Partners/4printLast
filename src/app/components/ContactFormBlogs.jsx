'use client'
import Image from "next/image";
import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactFormBlog = ({orientation = "vertical", ...props}) => {

    const { executeRecaptcha } = useGoogleReCaptcha();
    const servicesOptions = ['Commercial Vehicle Wrapping', 'Commercial Vehicle Lettering', 'Custom Car Wraps', 'Wall Wraps', 'Commercial Printing', 'Apparel', 'Stationery Printing']

    let formClass = false;
    const form = useRef();
    const phone = useRef();
    const [loading, setLoading] = useState(false);
    const statusRef = useRef(null);
    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const [token, setToken] = useState(null);
  


    const handleChange = (phoneRef) => {
        const input = phoneRef.current;
        // Clear any old status
        input.setCustomValidity('');
      };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const input = phone.current;
    input.setCustomValidity("");

    // Validar teléfono
    if (!pattern.test(input.value)) {
      input.setCustomValidity("Please enter a valid phone number");
      input.reportValidity();
      setLoading(false);
      return;
    }

    if (!executeRecaptcha) {
      console.warn("Recaptcha not yet available");
      setLoading(false);
      return;
    }

    try {
      // ✅ Ejecuta el reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha("contact_form");
      setToken(recaptchaToken);

      // Añadir la URL actual
      form.current.current_url.value = window.location.href;

      // Enviar el formulario con EmailJS
      await emailjs.sendForm("service_iyjzik5", "4print_temp", form.current, {
        publicKey: "25bO-dCc3QTCgWjyH",
      });

      statusRef.current.innerHTML = "Submission sent successfully!";
      form.current.reset();
    } catch (err) {
      console.error("Error submitting:", err);
      statusRef.current.innerHTML = "There was an error. Please try again.";
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="">
                  {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
                      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                  )}
                  <div className="lg:w-full">
                      <form className="pt-3 custom-form" ref={form} onSubmit={(e) => handleSubmit(e, form, phone, statusRef)}>
                      <div className={`gap-3 ${ orientation?.trim().toLowerCase() === 'horizontal' ? 'grid lg:grid-cols-6 grid-cols-1' : 'grid grid-cols-1'}`}>
                      <div>
                              <input type="hidden" name="current_url" />
                              <input type="hidden" name="recaptcha_token" value={token || ""} />
                              <input  type="text" 
                                  className={`form-control px-2 border rounded-md w-full bg-4pgrey min-h-[35px] h-[35px]`} 
                                  id="name"  
                                  placeholder="Name"
                                  name="name"
                                  required
                                  />
                      </div>
                      <div>
                              <input type="text"
                              className={`form-control px-2 border rounded-md w-full bg-4pgrey min-h-[35px] h-[35px]`}
                              id="phone"
                              aria-describedby="emailHelp" 
                              placeholder="Phone"
                              name="phone"
                              ref={phone}
                              onChange={() => handleChange(phone)}
                              required
                              />
                      </div>
                      <div>
                              <input type="email" 
                              className={`form-control px-2 border rounded-md w-full bg-4pgrey min-h-[35px] h-[35px]`}
                              id="email" 
                              placeholder="Email"
                              name="email"
                              required/>
                      </div>
                      <div>
                              <label htmlFor="service"></label>
                              <select 
                              name="service"
                              id="service"
                              className={`form-control px-2 rounded-md w-full bg-4pgrey  min-h-[35px] h-[35px]`}>
                                   <option value="" disabled defaultValue={''}>Choose a service</option>
                                  {servicesOptions.map((data, index) => (
                                      <option key={index} value={data} label={data}>{data}</option>
                                  ))}
                              </select>
                      </div>
                      <div>
                              <textarea rows={` ${orientation === 'horizontal' ? "1" : "3"}`}
                              type="" 
                              className={`form-control px-2 border rounded-md w-full bg-4pgrey`}
                              id="comment" 
                              placeholder="Tell us about your business!"
                              name="comment"/>
                      </div>
                        <div className={` ${ orientation === 'horizontal' ? '' : 'col-span lg:pt-0'}`} >
                        <div className="w-full text-center">
                            <button className={`flex rounded-lg items-center font-bold shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)] btn-animation btn-red-to-blue w-full text-center text-white`}>
                                    <Image
                                        src={`/images/ib-link-blue-white.svg`} 
                                        alt="Button Icon"
                                        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                                        srcSet={`/images/ib-link-blue-white.svg 768w, /images/ib-link-blue-white.svg 1024w`}
                                        width={44}
                                        height={46}
                                    />
                                    <p className={` w-full text-center`}>SEND</p>            
                            </button>
                        </div>
                        <p ref={statusRef} className={formClass ? "text-green-600 mb-0" : "text-red-700 mb-0"} ></p>
                        </div>
                      </div>
                      </form> 
                  </div>
      
              </div>
    </>
  )
};

export default ContactFormBlog;
