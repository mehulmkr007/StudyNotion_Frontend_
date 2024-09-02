import React from 'react'
import InstructorImage from '../../../assets/Images/Instructor.png'
import HighlightedText from './HighlightedText'
import CTAButton from './CTAButton'
import { FaArrowRight} from "react-icons/fa6";
const InstructorSection = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-20 items-center'>

        <div className='lg:w-[50%]'>
            <img
                src={InstructorImage}
                alt='#img'
                className='shadow-white shadow-[-20px_-20px_0_0]'
            />
        </div>

        <div className='flex flex-col justify-center lg:w-[50%] gap-4'>

            <div className='text-4xl items-start justify-center lg:w-[40%] md:w-[60%] sm:w-[75%]'>
                Become an 
                <HighlightedText text = {'Instructor'}/>
            </div>

            <div className='text-richblack-300 ring-richblack-300 font-medium w-[75%] mt-3 text-[16px]'>
            Instructors from around the world teach millions of 
             students on StudyNotion. We provide the tools and skills to teach what you love.
            </div>

            <div className='flex items-start'>
                <CTAButton linkto={'/signup'} active={true}>
                    <div className='flex gap-4 items-center justify-center'>
                        Start teaching today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>
        </div>
    </div>
  )
}

export default InstructorSection
