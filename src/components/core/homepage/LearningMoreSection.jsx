import React from 'react'
import HighlightedText from './HighlightedText'
import Know_your_progress from '../../../assets/Images/Know_your_progress.png'
import Compare_with_others from '../../../assets/Images/Compare_with_others.png'
import Plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from '../homepage/CTAButton'
const LearningMoreSection = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>

          <div className='text-4xl items-center justify-center lg:w-[75%]'>
            Your swiss knife for 
            <HighlightedText text = {'learning any language'}/>
          </div>

          <p className='text-center ring-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3'>
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
          </p>

      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
            <img
              src={Know_your_progress}
              alt='#img'
              className='object-contain  lg:-mr-32'
            />
            <img
              src={Compare_with_others}
              alt="#img"
              className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
              />
            <img
              src={Plan_your_lessons}
              alt="#img"
              className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
              />
      </div>

      <div className='w-fit mx-auto lg:mb-20 mb-8 '>
            <CTAButton linkto={'/signup'} active={true}>
                {"Learn More"}
            </CTAButton>
      </div>
    </div>
  )
}

export default LearningMoreSection
