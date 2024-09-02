// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { removeFromCart } from '../../../../slices/cartSlice'

// import { FaStar } from "react-icons/fa"
// import { RiDeleteBin6Line } from "react-icons/ri"
// import ReactStars from "react-rating-stars-component"
// import { useSelector } from 'react-redux'
// const RenderCartcourse = () => {
//   const {cart} = useSelector((state) => state.cart)
//   const dispatch = useDispatch()
  
//   return (
//     <div className="flex flex-1 flex-col">
//       {cart.map((course, indx) => (
//         <div
//           key={course._id}
//           className={`flex w-full flex-wrap items-start justify-between gap-6 ${
//             indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"
//           } ${indx !== 0 && "mt-6"} `}
//         >
//           <div className="flex flex-1 flex-col gap-4 xl:flex-row">

//             <img
//               src={course?.thumbnail}
//               alt={course?.courseName}
//               className="h-[148px] w-[220px] rounded-lg object-cover"
//             />

//             <div className="flex flex-col space-y-1">
//               <p className="text-lg font-medium text-richblack-5">
//                 {course?.courseName}
//               </p>
//               <p className="text-sm text-richblack-300">
//                 {course?.category?.name}
//               </p>
//               <div className="flex items-center gap-2">
//                 <span className="text-yellow-5">4.5</span>
//                 <ReactStars
//                   count={5}
//                   value={course?.ratingAndReviews?.length}
//                   size={20}
//                   edit={false}
//                   activeColor="#ffd700"
//                   emptyIcon={<FaStar />}
//                   fullIcon={<FaStar />}
//                 />
//                 <span className="text-richblack-400">
//                   {course?.ratingAndReviews?.length} Ratings
//                 </span>
//               </div>
//             </div>

//           </div>
          
//           <div className="flex flex-col items-end space-y-2">
//             <button
//               onClick={() => dispatch(removeFromCart(course._id))}
//               className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-3 px-[12px] text-pink-200"
//             >
//               <RiDeleteBin6Line />
//               <span>Remove</span>
//             </button>
//             <p className="mb-6 text-3xl font-medium text-yellow-100">
//               ₹ {course?.price}
//             </p>
//           </div>

//         </div>
//       ))}
//   </div>
//   )
// }

// export default RenderCartcourse


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../../slices/cartSlice';
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";

const RenderCartcourse = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col space-y-6">
      {cart.map((course, indx) => (
        <div
          key={course._id}
          className={`flex flex-col md:flex-row items-start justify-between gap-6 p-4 bg-richblack-800 rounded-lg shadow-lg ${
            indx !== cart.length - 1 && "border-b border-b-richblack-400"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <img
              src={course?.thumbnail}
              alt={course?.courseName}
              className="h-auto w-full md:w-[220px] rounded-lg object-cover"
            />
            <div className="flex flex-col space-y-3">
              <p className="text-lg font-semibold text-richblack-5">
                {course?.courseName}
              </p>
              <p className="text-sm text-richblack-300">
                {course?.category?.name}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-lg">4.5</span>
                <ReactStars
                  count={5}
                  value={course?.ratingAndReviews?.length}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
                <span className="text-richblack-400">
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between w-full md:w-auto">
            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex items-center gap-x-2 rounded-md border border-richblack-600 bg-richblack-700 py-2 px-4 text-pink-200 transition hover:bg-pink-500 hover:text-white"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
            <p className="text-2xl font-bold text-yellow-100">
              ₹ {course?.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartcourse;

