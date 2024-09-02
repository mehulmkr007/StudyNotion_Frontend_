import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error from './pages/Error'
import ForgotPassword from './pages/ForgotPassword'
import OpenRoute from './components/core/auth/OpenRoute'
import UpdatePassword from './pages/UpdatePassword'
import VerifyEmail from './pages/VerifyEmail'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import MyProfile from './components/core/dashboard/MyProfile'
import PrivateRoute from './components/core/auth/PrivateRoute'
import Settings from './components/core/dashboard/settings/Settings'
import EnrolledCourses from './components/core/dashboard/EnrolledCourses'
import Cart from './components/core/dashboard/cart/Cart'
import { ACCOUNT_TYPE } from './utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from './services/operations/profileAPI'
import AddCourse from './components/core/dashboard/AddCourse/AddCourse'
import MyCourse from './components/core/dashboard/MyCourse'
import Instructor from './components/core/dashboard/Instructor'
import EditCourse from './components/core/dashboard/EditCourse/EditCourse'
import Catalog from './pages/Catalog'
import CourseDetails from './pages/CourseDetails'


function App() {
  const {user} = useSelector((state)=> state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("token")){
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }                                 
  },[])
  
  return (
    <div className='min-h-screen w-screen flex flex-col bg-richblack-900 font-inter text-white'>

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='*' element={<Error></Error>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/catalog/:catalogName' element={<Catalog/>}/>
        <Route path="/catalog/:catalogName/courses/:courseId" element={<CourseDetails />} />

        {/* private route for logged in user("For every user it show dashboard") */}
        <Route element={<PrivateRoute><Dashboard/></PrivateRoute>}>

            {/* route for all logged in users */}
            <Route path='dashboard/my-profile' element={<MyProfile/>}/>
            <Route path='dashboard/settings' element={<Settings/>}/>


            {/* only routes for logged in students */}
            {
              user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path='dashboard/enrolled-courses' element={<EnrolledCourses/>}/>
                  <Route path='dashboard/cart' element={<Cart/>}/>
                </>
              )
            }
            
            {/* only routes for logged in intructor */}
            {
              user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                  <Route path='dashboard/add-course' element={<AddCourse/>}/>
                  <Route path='dashboard/my-courses' element={<MyCourse/>}/>
                  <Route path='dashboard/instructor' element={<Instructor/>}/>
                  <Route path='dashboard/edit-course/:courseId' element={<EditCourse/>}/>
                </>
              )
            }
        </Route>


        {/* open route for non logged in user */}
        <Route path='forgot-password' element={<OpenRoute> <ForgotPassword/> </OpenRoute>}/>
        <Route path='update-password/:id' element={<OpenRoute> <UpdatePassword/> </OpenRoute>}/>
        <Route path='login' element={<OpenRoute> <Login/> </OpenRoute>}/>
        <Route path='verify-email' element={<OpenRoute> <VerifyEmail/> </OpenRoute>}/>
        <Route path='signup' element={<OpenRoute> <Signup/> </OpenRoute>}/>

      </Routes>


    </div>
  )
}

export default App
