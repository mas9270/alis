import React, { useState, useRef } from 'react'
import ModalOne from '../../custom/Modal/ModalOne';
import { useDispatch, useSelector } from 'react-redux';
import { modalTextAction } from '../../../store/modalText';
import { useEffect } from 'react';

export default function Dialog() {
    const dispatch = useDispatch()
    const showText = useSelector(state => state.modalText.value)

    const [showModal, setShowModal] = useState(false);

    const searchRef = useRef("")

    function searchValue(e) {
        dispatch(modalTextAction(e.target.value))
    }

    function keydownAction(e) {
        if (e.ctrlKey && e.shiftKey && e.key === "F2") {
            setShowModal(true)
        }

        if (e.ctrlKey && e.shiftKey && e.key === "F3") {
            if (searchRef.current !== "" && searchRef.current !== null) {
                searchRef.current.focus()
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", (e) => keydownAction(e))

        return window.removeEventListener("keydown", (e) => keydownAction(e))
    }, [])



    return (
        <div className='Dialog'>
            <ModalOne modalOpen={showModal} modalClose={() => setShowModal(false)} className="modal-size-md">
                <div className="search-one" style={{ margin: "20px 0px 20px 0px" }}>
                    <div className='search-one-style'>
                        <div className='d-flex justify-content-between align-items-center '>
                            <input type="text" ref={searchRef} style={{ marginRight: "10px", width: 'calc(100% - 60px)', fontSize: "20px" }} aria-describedby="عبارت را وارد کنید" placeholder="عبارت را وارد کنید" autoComplete='off' onInput={searchValue} />
                        </div>
                    </div>
                </div>
                <div className='w-100 d-flex'>
                    <h4 style={{ margin: "10px 30px" }}> نمایش عبارت : </h4>
                </div>
                <div className='w-100 d-flex' >
                    <h5 style={{ margin: "10px 30px",maxWidth:"500px",textWrap:"wrap" }} >{showText}</h5>
                </div>
            </ModalOne>
        </div>
    )
}