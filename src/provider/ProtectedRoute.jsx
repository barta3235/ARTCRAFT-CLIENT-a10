import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
     
    const {user,loading}=useContext(AuthContext);
    console.log('Inside protected Route',user);
    const location =useLocation();

    if(loading){
        return <div className='border min-h-screen flex justify-center items-center'><span className="loading loading-bars loading-lg text-blue-900"></span></div>;
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;