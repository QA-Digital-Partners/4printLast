'use client'
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = ({ orientation = "vertical" }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const form = useRef();
  const phone = useRef();
  const statusRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className="pt-3 custom-form">
        <input type="hidden" name="current_url" />
        <input type="hidden" name="recaptcha_token" value={token || ""} />

        <div
          className={`gap-8 ${
            orientation === "horizontal"
              ? "grid lg:grid-cols-6"
              : "grid grid-cols-1"
          }`}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control p-2 border rounded-md w-full bg-4pgrey"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            ref={phone}
            onChange={() => phone.current.setCustomValidity("")}
            className="form-control p-2 border rounded-md w-full bg-4pgrey"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control p-2 border rounded-md w-full bg-4pgrey"
            required
          />

          <select
            name="service"
            className="form-control p-2 rounded-md w-full bg-4pgrey min-h-[44px]"
          >
            <option value="">Choose a service</option>
            {[
              "Commercial Vehicle Wrapping",
              "Commercial Vehicle Lettering",
              "Custom Car Wraps",
              "Wall Wraps",
              "Commercial Printing",
              "Apparel",
              "Stationery Printing",
            ].map((srv, i) => (
              <option key={i} value={srv}>
                {srv}
              </option>
            ))}
          </select>

          <textarea
            name="comment"
            rows="3"
            placeholder="Tell us about your business!"
            className="form-control p-2 border rounded-md w-full bg-4pgrey"
          />

          <div className="text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center rounded-lg font-bold shadow btn-red-to-blue w-full text-white"
            >
              <Image
                src="/images/ib-link-blue-white.svg"
                alt="Button Icon"
                width={44}
                height={46}
              />
              <p className="w-full text-center">SEND</p>
            </button>
          </div>

          <p ref={statusRef} className="text-center mt-2"></p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
