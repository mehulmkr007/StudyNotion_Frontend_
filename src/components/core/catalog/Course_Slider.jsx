import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper autoplay styles
// Import Swiper modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import Course_Card from "./Course_Card";

function Course_Slider({ Courses }) {
  useEffect(() => {
    // console.log("Courses in Course_Slider", Courses);
  }, [Courses]);

  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 2500, // Adjust the delay (in milliseconds) between slides
            disableOnInteraction: false, // Keep autoplay running even when user interacts with the slider
          }}
          modules={[FreeMode, Pagination, Autoplay]} // Add Autoplay module here
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
}

export default Course_Slider;
