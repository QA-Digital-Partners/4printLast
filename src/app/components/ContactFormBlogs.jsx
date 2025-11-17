'use client'
import Image from "next/image";
import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const ContactFormBlog = ({orientation = "vertical", ...props}) => {

  const recapchaSiteKey = "6LfAh_orAAAAAOw9vg4ucPXfgAzq27z_KxtT8TR5"
  const recaptchaSecretKey = "6LfAh_orAAAAAHMSC7XO874uFMvtd7aLI37mXfVB"

    
    const servicesOptions = ['Commercial Vehicle Wrapping', 'Commercial Vehicle Lettering', 'Custom Car Wraps', 'Wall Wraps', 'Commercial Printing', 'Apparel', 'Stationery Printing']

    let formClass = false;
    const form = useRef();
    const phone = useRef();
    const [loading, setLoading] = useState(false);
    const statusRef = useRef(null);
    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    

    const [token, setToken] = useState("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const setTokenFunc = (getToken) => {
      setToken(getToken);
    };

    const handleChange = (phoneRef) => {
        const input = phoneRef.current;
        // Clear any old status
        input.setCustomValidity('');
      };

    const handleSubmit = (event, formRef, phoneRef, statusRef) => {
        event.preventDefault();

        const input = phoneRef.current;
        setLoading(true); // Mostrar loader

    // Clear any old status
    input.setCustomValidity('');

    // Check for invalid state(s)
    if (!pattern.test(input.value)) {
      input.setCustomValidity('Please enter a valid phone number');
      input.reportValidity();
    } else {
      input.setCustomValidity('');


        // ✅ Agregar aquí la URL actual al formulario
    formRef.current.current_url.value = window.location.href;


      // Proceed with form submission if needed
      emailjs
      .sendForm('service_iyjzik5', '4print_temp', formRef.current, {
        publicKey: '25bO-dCc3QTCgWjyH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          formRef.current.reset();
          formClass = true;
          statusRef.current.innerHTML = "Submition sent succesfully"
          setLoading(false); // Ocultar loader
        },
        (error) => {
          setRefreshReCaptcha(!refreshReCaptcha);
          console.log('FAILED...', error.text);
          formClass = false;
          statusRef.current.innerHTML = "There was an error. Please try again or call us!"
          setLoading(false); // Ocultar loader
        },
      );
    }
}

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
