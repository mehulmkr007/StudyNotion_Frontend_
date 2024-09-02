import React from 'react'
import { FaArrowRight} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighlightedText from '../components/core/homepage/HighlightedText';
import CTAButton from '../components/core/homepage/CTAButton';
import banner from '../assets/Images/banner.mp4';
import CodeBlocks from '../components/core/homepage/CodeBlocks';
import TimeLineSection from '../components/core/homepage/TimeLineSection';
import LearningMoreSection from '../components/core/homepage/LearningMoreSection';
import InstructorSection from '../components/core/homepage/InstructorSection';
import ReviewSlider from '../components/common/ReviewSlider';
import ExploreMore from '../components/core/homepage/ExploreMore';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div>
      {/* section - 1 */}

      <div className='relative flex flex-col items-center justify-center mx-auto w-11/12 max-w-[1260px] gap-8 text-white'>
            <div>
                <Link to={'/signup'} >
                    <div className='group mx-auto mt-16 bg-richblack-800 p-1 rounded-full w-fit font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
                        <div className='flex gap-2 items-center px-10 py-[5px] rounded-full justify-center group-hover:bg-richblack-900 font-bold transition-all duration-200'>
                            <p>Become an Instructor</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='text-center font-semibold text-4xl'>
                <p>Empower Your Future With 
                    <HighlightedText text = {'Coding Skills'}/>
                </p>
            </div>

            <div className='-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300'>
                
                With our online coding courses, you can learn at your own pace, from anywhere in the world,
                 and get access to a wealth of resources, including hands-on projects, quizzes,
                  and personalized feedback from instructors.
                
            </div>

            <div>
                <div className='mt-8 flex flex-row gap-7'>
                    <CTAButton active={true} linkto={'/signup'}>Learn More</CTAButton>

                    <CTAButton active={false} linkto={'/login'}>Book a Demo</CTAButton>
                </div>
            </div>

            <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video 
                className="shadow-[20px_20px_rgba(255,255,255)]"
                autoPlay 
                muted 
                loop>
                    <source src = {banner} type='video/mp4'/>
                </video>
            </div>

            <div>
                <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className='text-4xl font-semibold'>
                             Unlock Your 
                             <HighlightedText text = {"Coding Potential"}/> 
                             {" "}with our online course.
                        </div>
                    }
                    subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={{
                        linkto: "/signup",
                        btnText: "Try it yourself",
                        active: true,
                    }}
                    ctabtn2={{
                        linkto: "/signup",
                        btnText: "Learn More",
                        active: false,
                    }}  
                    codeblocks={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className='codeblock1 absolute'></div>}
                    codeColor={"text-yellow-25"}
                />
            </div>


            <div>
                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='w-[100%] text-4xl font-semibold lg:w-[50%]'>
                             Starts 
                             <HighlightedText text = {"Coding in seconds"}/> 
                             
                        </div>
                    }
                    subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                    ctabtn1={{
                        linkto: "/signup",
                        btnText: "Continue Lession",
                        active: true,
                    }}
                    ctabtn2={{
                        linkto: "/signup",
                        btnText: "Learn More",
                        active: false,
                    }}  
                    codeblocks={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className='codeblock2 absolute'></div>}
                    codeColor={"text-yellow-25"}
                />
            </div>

            <div>
                    <ExploreMore/>
            </div>
      </div>


      {/* secction - 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>

        <div className='homepage_bg h-[320px]'>
                <div className='w-11/12 flex justify-center items-center h-full'>
                    <div className='flex items-center justify-center gap-7 max-sm:flex-col text-white'>
                        
                            <CTAButton active={true} linkto={"/signup"}>
                                   <div className='flex items-center gap-2'>
                                        Explore Full Catalog
                                        <FaArrowRight />
                                   </div>
                            </CTAButton>
                    
                        <CTAButton active={false} linkto={"/signup"}>
                                {"Learn More"}
                        </CTAButton>
                    </div>
                </div>
        </div>
        
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 '>

            <div className='mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0'>

                    <div className='text-4xl font-semibold lg:w-[45%] '>
                        Get the skills you need for a
                        <HighlightedText text = {" job that is in demand."}/>
                    </div>

                    <div className='flex flex-col items-start gap-10 lg:w-[40%]'>
                        <div className="text-[16px]">
                            The modern StudyNotion is the dictates its own terms. Today, to
                            be a competitive specialist requires more than professional
                            skills.
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                    </div>
            </div>

            <TimeLineSection/>

            <LearningMoreSection/>
        </div>
        
      </div>

      {/* section -3 */}

      <div className='relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
        
        <InstructorSection/>

        <div className='text-4xl font-semibold mt-8 text-center'>
            Review from others learners
        </div>
        
        <ReviewSlider/>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
