
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

//components
import PageNotFound from "../components/pages/pageNotFound/pageNotFound";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../components/pages/home/Home";
import Products from "../components/pages/products/Products";
import Users from "../components/pages/users/Users";
import Vertification from "../components/pages/vertification/Vertification";

function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
            <Route path="/home" element={<PrivateRoutes redirectPath={"/home"} ><Home /></PrivateRoutes>} />
            <Route path="/products" element={<PrivateRoutes redirectPath={"/products"} ><Products /></PrivateRoutes>} />
            <Route path="/users" element={<PrivateRoutes redirectPath={"/users"} ><Users /></PrivateRoutes>} />
            <Route path="/vertification" element={<PrivateRoutes redirectPath={"/vertification"} ><Vertification /></PrivateRoutes>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRouter;