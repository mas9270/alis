import React, { Children } from 'react'
import style from "./CustomBtn.module.css"


export default function CustomBtn({ action, content, ...props }) {

    return (
        <button onClick={action} className="btn btn-primary w-100 btn-lg login-btn mb-2">{content}</button>
    )
}