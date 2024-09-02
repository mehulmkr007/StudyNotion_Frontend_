import React from 'react'
import { useState, useEffect } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore'
import HighlightedText from './HighlightedText';
import CourseCard from './CourseCard';
const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0])
    const [courses, setCourse] = useState(HomePageExplore[0].courses)
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCard = (val) => {
      setCurrentTab(val)
      const result = HomePageExplore.filter((courses)=> courses.tag === val)
      setCourse(result[0].courses)
      setCurrentCard(result[0].courses[0].heading)
    }

  return (
    <div>


      <div className='flex flex-col'>
        <div className=' text-4xl font-semibold text-center my-5'>
            Unlock the
            <HighlightedText text = {"Power of coding"}/>
        </div>

        <div className='flex justify-center items-center text-richblack-300 text-[16px] mt-4 mb-4'>
            Learn to Build Anything You Can Imagine
        </div>
      </div>

      <div className='hidden lg:flex gap-5 mt-10 mb-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]'>
        {
            tabsName.map((item, index) => {
                return (
                  <div 
                    className = {`
                      text-[16px] flex items-center gap-2 
                      ${
                        currentTab === item 
                        ? "bg-richblack-900 text-richblack-5 font-medium" 
                        : "text-richblack-200"
                        }
                        px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5
                    `}
                    key={index}
                    onClick={ ()=> setMyCard(item)}
                    >
                      {item}
                  </div>
                )
            })
        }
      </div>

      {/* <div className=" block lg:h-[300px]"></div> */}


      <div className=' gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:translate-y-[25%] text-black lg:mb-0 mb-7 lg:px-0 px-3'>
        {courses.map((item,index)=>{
            return (
              <CourseCard
                cardData={item}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
                key={index}
              />
              
            )
          })
        }
      </div>
    </div>
  )
}

export default ExploreMore
