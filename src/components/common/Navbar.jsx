// import React, { useEffect } from 'react'
// import logo from "../../assets/Logo/Logo-Full-Light.png"
// import { Link, matchPath } from 'react-router-dom'
// import {NavbarLinks} from "../../data/navbar-links.js"
// import { useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
// import ProfileDropdown from '../core/auth/ProfileDropdown'
// import { apiConnector } from '../../services/apiConnector.js'
// import { categories } from '../../services/apis.js'
// import { useState } from 'react'
// import { BsChevronDown } from "react-icons/bs"
// import { CgSpinner } from 'react-icons/cg'
// import axios from 'axios'


// const Navbar = () => {

//   const {token} = useSelector((state)=> state.auth)
//   const {user} = useSelector((state)=> state.profile)
//   const {totalItems} = useSelector((state)=> state.cart)
  

//   const [subLinks, setSubLinks] = useState([])
//   const [loading, setLoading] = useState(false)
//   const fetchCategories = async()=>{
//       try {
//         setLoading(true)
//         const result = await apiConnector("GET", categories.CATEGORIES_API)
//         setSubLinks(result.data.data) 
//         setLoading(false)
//       } 
//       catch (error) {
//         console.log(error)
//       }
//   }
//   useEffect(()=>{
//     // console.log("token: ",token)
//     // console.log("user : ",user)
//     // console.log("accouttype : ",user?.accountType)
//     fetchCategories()
//   },[])

//   const location = useLocation();
//   const matchroute = (route)=>{
//     return matchPath({ path:route },location.pathname)
//   }
//   return (
//     <div className='flex justify-center items-center h-14 bg-richblack-900 border-b-richblack-700 border-b-[2px]'>
//       <div className='flex w-11/12 justify-between items-center'>

//         {/* studyNotion logo */}
//           <Link to={'/'}>
//             <img src={logo} alt='#logo' width={160} height={42} loading='lazy'/>
            
//           </Link>

//         {/* navlinks with catalog */}
//           <div className='invisible md:visible lg:visible'>
//             <ul className='flex gap-6 justify-center items-center text-richblack-25'>
//               {
//                 NavbarLinks.map((item, index) => {  
//                   return (
//                     <li key={index}>
//                         {
//                           item?.title === "Catalog" ? 
//                             (
//                               <div className={`group relative flex cursor-pointer items-center gap-1 
//                                                 ${
//                                                   matchroute("/catalog/:catalogName")
//                                                     ? "text-yellow-25"
//                                                     : "text-richblack-25"
//                                                 }`}>
//                                 {item?.title}
//                                 <BsChevronDown/>

                                
//                                 <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%]
//                                                 translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0
//                                                 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em]
//                                                 group-hover:opacity-100 lg:w-[300px]">

//                                     <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%]
//                                                    rotate-45 select-none rounded bg-richblack-5">
//                                     </div>

//                                     {
//                                       loading ? (
//                                                 <div className='text-center'>Loading..</div>
//                                                 ) : subLinks?.length ? (
//                                                     <div className='flex flex-col'>
//                                                           {subLinks
//                                                             ?.filter(
//                                                               (subLink) => subLink?.courses?.length > 0
//                                                             )
//                                                             ?.map((subLink, i) => (
//                                                               <Link
//                                                                 to={`/catalog/${subLink.name
//                                                                   .split(" ")
//                                                                   .join("-")
//                                                                   .toLowerCase()}`}
//                                                                 className="rounded-lg py-3 my-1 pl-2 hover:bg-richblack-400 hover:scale-105 hover:text-yellow-50 transition-all duration-300"
//                                                                 key={i}
//                                                               >
//                                                                 <p>{subLink.name}</p>
//                                                               </Link>
//                                                             ))}
//                                                     </div>
//                                                     ) : (
//                                                       <p className="text-center">No Courses Found</p>
//                                                     )
//                                     }
//                                 </div>
//                               </div>
//                             ) 
//                           : (
//                               <Link to={item?.path}>
//                                   <div className={`${matchroute(item?.path) ? "text-yellow-25" : "text-richblack-25 hover:text-yellow-25"}`}>
//                                     {item?.title}
//                                   </div>
//                               </Link>
//                             )
//                         }
//                     </li>
//                   )
//                 })  
//               }
//             </ul>
//           </div>

//         {/* button or profile-card */}
//           <div className='flex gap-4 items-center justify-center'>
//               {
//                 user && user?.accountType !== "Instructor" && (
//                   <Link to="/dashboard/cart" className='relative items-center justify-center'>
//                       <AiOutlineShoppingCart className='text-2xl'/>
//                       {
//                         totalItems >= 0 && (
//                           <span className=' top-[-30%] right-[-30%] text-sm absolute animate-bounce'>
//                                 {totalItems}
//                           </span>
//                         )
//                       }
//                   </Link>
//                 )
//               }

//               {
//                   token === null && (

//                     <Link to="/login">
//                         <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:scale-90 transition-all duration-200">
//                             Log In
//                         </button>
//                     </Link>

//                   )
//               }

//               {
//                   token === null && (
//                     <Link to="/signup">
//                       <button className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:scale-90 transition-all duration-200'>
//                         Sign Up
//                       </button>
//                     </Link>
//                   )
//               }

//               {
//                   token !== null && (
//                     <ProfileDropdown/>
//                   )
//               }

              
//               <button className="mr-4 md:hidden">
//                 <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//               </button>
              
//           </div>

//       </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useEffect, useState } from 'react';
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath } from 'react-router-dom';
import { NavbarLinks } from "../../data/navbar-links.js";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import ProfileDropdown from '../core/auth/ProfileDropdown';
import { apiConnector } from '../../services/apiConnector.js';
import { categories } from '../../services/apis.js';
import { BsChevronDown } from "react-icons/bs";
import { CgSpinner } from 'react-icons/cg';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [isCatalogOpen, setIsCatalogOpen] = useState(false); // State for catalog dropdown in modal
  
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(result.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const location = useLocation();
  const matchroute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className='flex justify-center items-center h-14 bg-richblack-900 border-b-richblack-700 border-b-[2px]'>
      <div className='flex w-11/12 justify-between items-center'>
        
        {/* Logo */}
        <Link to={'/'}>
          <img src={logo} alt='#logo' width={160} height={42} loading='lazy'/>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-6'>
          <ul className='flex gap-6 justify-center items-center text-richblack-25'>
            {NavbarLinks.map((item, index) => (
              <li key={index}>
                {item?.title === "Catalog" ? (
                  <div className={`group relative flex cursor-pointer items-center gap-1 
                    ${matchroute("/catalog/:catalogName") ? "text-yellow-25" : "text-richblack-25"}`}>
                    {item?.title}
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%]
                      translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0
                      transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em]
                      group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%]
                        rotate-45 select-none rounded bg-richblack-5">
                      </div>
                      {loading ? (
                        <div className='text-center'>Loading..</div>
                      ) : subLinks?.length ? (
                        <div className='flex flex-col'>
                          {subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                className="rounded-lg py-3 my-1 pl-2 hover:bg-richblack-400 hover:scale-105 hover:text-yellow-50 transition-all duration-300"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </div>
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={item?.path}>
                    <div className={`${matchroute(item?.path) ? "text-yellow-25" : "text-richblack-25 hover:text-yellow-25"}`}>
                      {item?.title}
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Cart, Profile or Login/Signup */}
        <div className='hidden md:flex gap-4 items-center'>
          {user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className='relative items-center justify-center'>
              <AiOutlineShoppingCart className='text-2xl'/>
              {totalItems >= 0 && (
                <span className='top-[-30%] right-[-30%] text-sm absolute animate-bounce'>
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {!token ? (
            <>
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:scale-90 transition-all duration-200">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 hover:scale-90 transition-all duration-200'>
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropdown />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsModalOpen(true)}>
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>

      {/* Mobile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-richblack-900 bg-opacity-90 text-richblack-50 flex flex-col p-6 space-y-4">
          <div className="flex justify-between items-center">
            <img src={logo} alt="Logo" width={120} />
            <button onClick={() => setIsModalOpen(false)}>
              <AiOutlineClose fontSize={24} fill="#AFB2BF" />
            </button>
          </div>

          <ul className="flex flex-col gap-4 mt-4">
            {NavbarLinks.map((item, index) => (
              <li key={index}>
                {item?.title === "Catalog" ? (
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsCatalogOpen(!isCatalogOpen)}>
                    <span>Catalog</span>
                    <BsChevronDown />
                  </div>
                ) : (
                  <Link to={item.path} className="hover:text-yellow-50" onClick={() => setIsModalOpen(false)}>
                    {item.title}
                  </Link>
                )}
                {isCatalogOpen && item?.title === "Catalog" && (
                  <div className="ml-4 mt-2">
                    {loading ? (
                      <p>Loading...</p>
                    ) : subLinks?.length ? (
                      subLinks.map((subLink, i) => (
                        <Link
                          key={i}
                          to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                          className="block py-2 hover:text-yellow-50"
                          onClick={() => setIsModalOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))
                    ) : (
                      <p>No Courses Found</p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Login/Signup or Profile */}
          <div className="flex flex-col mt-6 text-richblack-900 font-semibold">
            {!token ? (
              <>
                <Link to="/login" className="mb-2" onClick={() => setIsModalOpen(false)}>
                  <button className="w-full py-2 bg-yellow-100 rounded">Log In</button>
                </Link>
                <Link to="/signup" onClick={() => setIsModalOpen(false)}>
                  <button className="w-full py-2 bg-yellow-100 rounded">Sign Up</button>
                </Link>
              </>
            ) : (
              <ProfileDropdown/>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;



