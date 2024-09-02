// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { sidebarLinks } from '../../../data/dashboard-links'
// import { logout } from '../../../services/operations/authAPI'
// import { VscSignOut } from "react-icons/vsc"
// import SidebarLink from './SidebarLink'
// import ConfirmationModal from '../../common/ConfirmationModal'
// import { useState } from 'react'
// const Sidebar = () => {
//     const {user, loading: profileLoading} = useSelector(state => state.profile)
//     const {loading: authLoading} = useSelector(state => state.auth)
//     const [confirmationModal, setConfirmationModal] = useState(null)

//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     if(profileLoading || authLoading){
//         return (
//             <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800 justify-center">
//                 <div className="spinner"></div>
//             </div>
//         )
//     }

//   return (
//     <div>
//         <div className='flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10'>
        
//             <div className='flex flex-col'>
//                     {
//                         sidebarLinks.map((link) => {
//                             {
//                                 if(link.type && user?.accountType !== link.type) return null
//                                 return (
//                                     <SidebarLink key={link.id} link={link} iconName={link.icon}/>
//                                 )
//                             }
//                         })
//                     }
//             </div>

//             <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700'></div>

//             <div className='flex flex-col'>
//                     <SidebarLink
//                         link={{name : "Settings", path : "/dashboard/settings"}}
//                         iconName={"VscSettingsGear"}
//                     />

//                     <button
//                         onClick={()=> setConfirmationModal({
//                             text1 : "Are you sure you want to logout?",
//                             text2 : "You will be logged out of your account",
//                             btn1Text : "Logout",
//                             btn2Text : "Cancel",
//                             btn1Handler : () => {dispatch(logout(navigate))},
//                             btn2Handler : () => {setConfirmationModal(null)}
//                         })}
//                         className='px-8 py-2 text-sm font-medium text-richblack-300'
//                     >
//                         <div className='flex items-center gap-x-2'>
//                             <VscSignOut className='text-lg'/>
//                             <span>Logout</span>
//                         </div>
//                     </button>
//             </div>

//         </div>
        
//         {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
//     </div>
//   )
// }

// export default Sidebar


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sidebarLinks } from '../../../data/dashboard-links';
import { logout } from '../../../services/operations/authAPI';
import { VscSignOut, VscMenu, VscClose } from "react-icons/vsc"; // Import the close icon
import { RiArrowRightWideLine } from "react-icons/ri";
import SidebarLink from './SidebarLink';
import ConfirmationModal from '../../common/ConfirmationModal';

const Sidebar = () => {
    const { user, loading: profileLoading } = useSelector(state => state.profile);
    const { loading: authLoading } = useSelector(state => state.auth);
    const [confirmationModal, setConfirmationModal] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // State to track sidebar visibility

    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (profileLoading || authLoading) {
        return (
            <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800 justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div>
            {/* Button to open sidebar on small screens */}
            <button 
                className="sm:hidden py-1 bg-richblack-800 mt-1 text-white fixed top-[3.5rem] left-0 z-20"
                onClick={() => setIsSidebarOpen(true)}
            >
                <RiArrowRightWideLine className="text-2xl" />
            </button>

            {/* Sidebar for medium and larger screens */}
            <div className='hidden sm:flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10'>
                <div className='flex flex-col'>
                    {sidebarLinks.map((link) => {
                        if (link.type && user?.accountType !== link.type) return null;
                        return (
                            <SidebarLink key={link.id} link={link} iconName={link.icon} />
                        );
                    })}
                </div>

                <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700'></div>

                <div className='flex flex-col'>
                    <SidebarLink
                        link={{ name: "Settings", path: "/dashboard/settings" }}
                        iconName={"VscSettingsGear"}
                    />

                    <button
                        onClick={() => setConfirmationModal({
                            text1: "Are you sure you want to logout?",
                            text2: "You will be logged out of your account",
                            btn1Text: "Logout",
                            btn2Text: "Cancel",
                            btn1Handler: () => { dispatch(logout(navigate)) },
                            btn2Handler: () => { setConfirmationModal(null) }
                        })}
                        className='px-8 py-2 text-sm font-medium text-richblack-300'
                    >
                        <div className='flex items-center gap-x-2'>
                            <VscSignOut className='text-lg' />
                            <span>Logout</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Modal sidebar for smaller screens */}
            {isSidebarOpen && (
                <div 
                    className={`fixed top-[3.5rem] left-0 right-0 bottom-0 z-30 bg-black bg-opacity-50 transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    onClick={() => setIsSidebarOpen(false)} // Close when clicking outside
                >
                    <div
                        className="relative h-[calc(100vh-3.5rem)] min-w-[220px] flex flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 transition-transform duration-300 ease-in-out transform translate-x-0"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
                    >
                        {/* Close button inside the modal */}
                        <button 
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <VscClose className="text-2xl" />
                        </button>

                        <div className='flex flex-col'>
                            {sidebarLinks.map((link) => {
                                if (link.type && user?.accountType !== link.type) return null;
                                return (
                                    <SidebarLink key={link.id} link={link} iconName={link.icon} />
                                );
                            })}
                        </div>

                        <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700'></div>

                        <div className='flex flex-col'>
                            <SidebarLink
                                link={{ name: "Settings", path: "/dashboard/settings" }}
                                iconName={"VscSettingsGear"}
                            />

                            <button
                                onClick={() => setConfirmationModal({
                                    text1: "Are you sure you want to logout?",
                                    text2: "You will be logged out of your account",
                                    btn1Text: "Logout",
                                    btn2Text: "Cancel",
                                    btn1Handler: () => { dispatch(logout(navigate)) },
                                    btn2Handler: () => { setConfirmationModal(null) }
                                })}
                                className='px-8 py-2 text-sm font-medium text-richblack-300'
                            >
                                <div className='flex items-center gap-x-2'>
                                    <VscSignOut className='text-lg' />
                                    <span>Logout</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
    );
};

export default Sidebar;