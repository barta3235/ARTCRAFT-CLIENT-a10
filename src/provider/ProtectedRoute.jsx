import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
     
    const {user,loading}=useContext(AuthContext);
    console.log('Inside protected Route',user);
    const location =useLocation();

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 flex justify-center items-center min-h-screen"></div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;