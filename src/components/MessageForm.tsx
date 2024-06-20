"use client"

import React from 'react';
import { sendEmail } from '@/server/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitBtn from '@/components/submit-btn';
import toast from "react-hot-toast";

export default function MessageForm() {
  const { pending } = useFormStatus();

  return (
    <section id='contact' className="w-full px-4 md:px-0">
        <form 
          className='mt-10 flex flex-col w-full'
          action={async (formData) => {

            const {data, error} = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
        }}
        >
            <div className='flex flex-col md:flex-row gap-4 mb-3'>

              {/* First Name */}
              <input 
                className='w-full md:w-1/2 h-14 rounded-lg border border-black/10 px-4'
                name='senderFirstName'
                type='firstName' 
                required
                maxLength={500}
                placeholder='First Name'/>

              {/* Last Name */}
              <input 
                className='w-full md:w-1/2 h-14 rounded-lg border border-black/10 px-4'
                name='senderLastName'
                type='lastName' 
                required
                maxLength={500}
                placeholder='Last Name'/>
            </div>
            <div className='flex flex-col md:flex-row gap-4'>

              {/* Email */}
              <input 
                className='w-full md:flex-grow h-14 rounded-lg border border-black/10 px-4'
                name='senderEmail'
                type='email' 
                required
                maxLength={500}
                placeholder='Email'/>

              {/* Phone */}
              <input 
                className='w-full md:flex-grow h-14 rounded-lg border border-black/10 px-4'
                name='senderPhone'
                type='phone' 
                required
                maxLength={500}
                placeholder='Phone Number'/>
            </div>

            {/* Message */}
            <textarea
              className='h-52 my-3 rounded-lg border border-black/10 px-4 py-4 w-full'
              placeholder='Your Message'
              name='message'
              required
              maxLength={5000}
              />

            <SubmitBtn />
        </form>
    </section>
  )
}
