"use client"

import React from 'react';
import { sendEmail } from '@/server/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitBtn from '@/components/submit-btn';

export default function MessageForm() {
  const { pending } = useFormStatus();

  return (
    <section id='contact'>
        <form 
          className='mt-10 flex flex-col'
          action={async (formData) => {
            console.log("Running on client")
            console.log(formData.get('senderEmail'));
            console.log(formData.get('message'));
            await sendEmail(formData);
        }}
        >
            <div className='flex flex-row gap-4 mb-3'>
              
              {/* First Name */}
              <input 
                className='w-1/2 h-14 rounded-lg border border-black/10 px-4'
                name='senderFirstName'
                type='firstName' 
                required
                maxLength={500}
                placeholder='First Name'/>

              {/* Last Name */}
              <input 
                className='w-1/2 h-14 rounded-lg border border-black/10 px-4'
                name='senderLastName'
                type='lastName' 
                required
                maxLength={500}
                placeholder='Last Name'/>
            </div>
            <div className='flex flex-row gap-4'>

              {/* Email */}
              <input 
                className='flex-grow h-14 rounded-lg border border-black/10 px-4'
                name='senderEmail'
                type='email' 
                required
                maxLength={500}
                placeholder='Email'/>

              {/* Phone */}
              <input 
                className='flex-grow h-14 rounded-lg border border-black/10 px-4'
                name='senderPhone'
                type='phone' 
                required
                maxLength={500}
                placeholder='Phone Number'/>
            </div>

            {/* Message */}
            <textarea
              className='h-52 my-3 rounded-lg border border-black/10 px-4 py-4'
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
