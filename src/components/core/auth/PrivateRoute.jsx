import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth)
  // console.log("user for private route : ", token)  
  
  if (token !== null) {
    // console.log("user for private route : ", token) 
    return children
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute



