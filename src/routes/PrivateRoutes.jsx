import { Outlet } from "react-router-dom";
import LoadingPage from "../components/custom/loadingPage/LoadingPage";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";



export default function PrivateRoutes({ redirectPath = '/', children, ...props }) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
    }, [redirectPath])

    //send cookie by axios for get access to route
    if (loading) {
        setTimeout(() => {
            setLoading(false)
        }, 1000);

        return <LoadingPage />
    }
    else {

        if (true) {//if access true
            return children ? children : <Outlet />;
        }
        else {//if access false 
            return <Navigate to="/home" replace={true} />;
        }
    }

};





