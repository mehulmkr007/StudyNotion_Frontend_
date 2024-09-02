import React from 'react'
import ContactUsForm from '../contactuspage/ContactUsForm'
const ContactUsFormSection = () => {
  return (
    <div className='mx-auto'>
         
         <h1 className='text-center text-4xl font-semibold'>Get In Touch</h1>

         <p className='text-center ring-richblack-300 mt-3'>
            We&apos;d love to here for you, Please fill out this form.
         </p>

         <div className='mt-12 mx-auto'>
            <ContactUsForm/>
         </div>
      
    </div>
  )
}

export default ContactUsFormSection
