import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import cartReducer from "../slices/cartSlice";
import profilReducer from "../slices/profileSlice";
import courseSlice from "../slices/courseSlice";
import viewCourseSlice from "../slices/viewCourseSlice";

const rootReducer = combineReducers({
    auth : authReducer,
    cart : cartReducer,
    profile : profilReducer,
    course : courseSlice,
    viewCourse : viewCourseSlice
})

export default rootReducer
