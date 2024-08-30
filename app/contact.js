"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
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
    <section id="contact" className="flex flex-col justify-center items-center pb-24">
        <h2 className="text-3xl font-bold">Contact</h2>
        <a href="https://www.linkedin.com/in/desmond-bush/" target="_blank"  rel="noopener noreferrer"
        className='py-3 text-xl bg-gradient-to-r from-coco via-slate-100 to-blue-700 bg-clip-text text-transparent animate-gradient'>LinkedIn</a>
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