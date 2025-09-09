import  { useContext } from 'react'
import { AuthContext } from '../provider/ContextProvider'
import { Navigate } from "react-router"
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log(loading)
    if(loading){
      return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/auth/login"></Navigate>
  )
}

export default PrivateRoute
