import { useContext } from "react";
import { Authcontex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const { user,loading } = useContext(Authcontex);
    const location = useLocation();
     if(loading){
        return <span className="loading loading-dots loading-xl"></span>
    };

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;