import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { apiConnector} from "../../../services/apiConnector"
import { contactusEndpoint} from "../../../services/apis"
import countryCode from "../../../data/countrycode.json"
import { toast } from 'react-hot-toast'
const ContactUsForm = () => {

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()
  
  const submitContactForm = async (data) => {
    
    try {
      const toastId = toast.loading("Loading...")
      setLoading(true)
      const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data)
      console.log(res)
      setLoading(false)
      toast.dismiss(toastId)
      toast.success("Your message has been submitted successfully")

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({
        email : "",
        firstName : "",
        lastName : "",
        message : "",
        phoneNumber : ""
      })
    }
  },[reset, isSubmitSuccessful])

  return (
  
    <div>
        <form 
          onSubmit={handleSubmit(submitContactForm)}
          className='flex flex-col gap-7'>

            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='flex flex-col gap-2 lg:w-[48%]'>
                    <label htmlFor='firstName' className="lable-style">
                      First Name<sup>*</sup>
                    </label>

                    <input
                      type="text"
                      name='firstName'
                      id='firstName'
                      placeholder='Enter your first name'
                      {...register("firstName", {"required" : true})}
                      className="form-style"
                    />
                    {
                      errors.firstName && (
                        <span className='-mt-1 text-[14px] text-red-300'>
                          First Name is required
                        </span>
                      )
                    }
                </div>

                <div className='flex flex-col gap-2 lg:w-[48%]'>
                    <label htmlFor='lastName' className="lable-style">
                      Last Name<sup>*</sup>
                    </label>

                    <input
                      type="text"
                      name='lastName'
                      id='lastName'
                      placeholder='Enter your last name'
                      className="form-style"
                      {...register("lastName", {"required" : true})}
                      
                    />
                    {
                      errors.lastName && (
                        <span className='-mt-1 text-[14px] text-red-300'>
                          Last Name is required
                        </span>
                      )
                    }
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className="lable-style">
                      Email<sup>*</sup>
                    </label>

                    <input
                      type="email"
                      name='email'
                      id='email'
                      placeholder='Enter your email'
                      className="form-style"
                      {...register("email", {"required" : true})}
                      
                    />
                    {
                      errors.email && (
                        <span className='-mt-1 text-[14px] text-red-300'>
                          Email is required
                        </span>
                      )
                    }
            </div>

            <div className='flex flex-col gap-2'>
                    
                    <label htmlFor='phoneNumber' className="lable-style">
                      Phone Number
                    </label>

                    <div className='flex gap-2'>
                        <div className='flex w-[81px] flex-col gap-2'>
                          <select 
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="Enter first name"
                            className="form-style"
                            {...register("countrycode", { required: true })}>

                              {
                                countryCode.map((item, index) => (
                                  <option key={index} value={item.code}>
                                    {item.code} - {item.country}
                                  </option>
                                ))
                              }
                          </select>
                        </div>

                        <div className='flex w-[calc(100%-90px)] flex-col gap-2'>
                          <input
                            type="text"
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='Enter your phone number'
                            className="form-style"
                            {...register("phoneNumber", {
                              required: {
                              value: true,
                              message: "Please enter your Phone Number.",
                            },
                            maxLength: { value: 12, message: "Invalid Phone Number" },
                            minLength: { value: 10, message: "Invalid Phone Number" },
                            })}
                            
                          />
                          {
                            errors.phoneNumber && (
                              <span className='-mt-1 text-[14px] text-red-300'>
                                {errors.phoneNumber.message}
                              </span>
                            )
                          }
                        </div>
                    </div>
            </div>

            <div className='flex flex-col gap-2'>
                    <label htmlFor='message' className='lable-style'>
                      Message<sup>*</sup>
                    </label>

                    <textarea
                      type="text"
                      cols={30}
                      rows={7}
                      name='message'
                      id='message'
                      className='form-style'
                      placeholder='Enter your message here'
                      {...register("message", {"required" : true})}
                      
                    />
                    {
                      errors.message && (
                        <span className='-mt-1 text-[14px] text-red-300'>
                          Please Write Something..
                        </span>
                      )
                    }
            </div>

            <button 
              disabled={loading}
              type="submit" 
              className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black 
                          shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
                        ${
                          !loading &&
                          "transition-all duration-200 hover:scale-95 hover:shadow-none"
                        }  disabled:bg-richblack-500 sm:text-[16px] `}
            >
              Send Message
            </button>
        </form>
    </div>
  )
}

export default ContactUsForm
