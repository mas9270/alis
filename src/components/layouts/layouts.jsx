import React from "react";


//component Layout
import AppRouter from "../../routes/AppRouter.jsx";
import { ToastContainer } from "react-toastify";
import HeaderOne from "../custom/header/HeaderOne.jsx";
import Dialog from "../pages/dialog/Dialog.jsx";

export default function Layouts() {

    return (
        <>
            <ToastContainer />
            <Dialog />
            <HeaderOne />
            <AppRouter />
        </>
    )
}