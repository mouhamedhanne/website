"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0gcy8vr", "template_f3h720g", form.current, {
        publicKey: "_nazTrPh5TP93RT2n",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className="mb-20 
     text-center gap-16"
    >
      <div className="">
        <h2
          className="font-extrabold font-InterBlack
         dark:text-white text-5xl mb-10"
        >
          Contact
        </h2>
      </div>
      <div className="flex justify-center items-center mr-[23rem]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form-container "
        >
          <div className="container">
            <label htmlFor="first-name" className="contact-label">
              <span>Prénom</span>
              <input
                type="text"
                name="user_name"
                id="first-name"
                required
                placeholder="John"
                className="contact-input "
              />
            </label>
            <label htmlFor="last-name" className="contact-label">
              <span>Nom</span>
              <input
                type="text"
                name=""
                id="last-name"
                required
                placeholder="Doe"
                className="contact-input "
              />
            </label>
            <label htmlFor="email" className="contact-label">
              <span>Email</span>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                placeholder="johndoe@gmail.com"
                className="contact-input "
              />
            </label>
            <label htmlFor="phone" className="contact-label">
              <span>Numéro Téléphone</span>
              <input
                type="number"
                name="user_phone"
                id="phone"
                required
                placeholder="221 12 34 56 78"
                className="contact-input "
              />
            </label>
          </div>
          <label htmlFor="message" className="contact-label">
            <span>Message</span>
            <textarea
              name="message"
              className="contact-input "
              id="message"
              rows="4"
              placeholder="Ecrire votre message..."
            />
          </label>

          <div>
            <button
              type="submit"
              className="px-9 py-4 bg-[#5e3bee] rounded-2xl
           hover:opacity-75 transition-opacity duration-300 "
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
