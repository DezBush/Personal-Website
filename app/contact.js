"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center py-32">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center mt-8 w-full max-w-md">
            <label>Name</label>
            <input type="text" name="user_name" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"/>
            <label>Email</label>
            <input type="email" name="user_email" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"/>
            <label>Message</label>
            <textarea name="message" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"/>
            <input type="submit" value="Send" className="px-6 py-2 text-white bg-amber-800 rounded-md hover:bg-amber-900 cursor-pointer"/>
        </form>
    </section>
  );
};

export default Contact;