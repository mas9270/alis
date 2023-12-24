import React, { useEffect } from 'react'
import { useRef } from 'react'
import { toastifySuccess, toastifyWarning, isNumber } from '../../../utility/utility'


export default function VerificationGetCode({ phoneNo, backToLogin, ...props }) {

    const firstCode = useRef()
    const secondCode = useRef()
    const tirthCode = useRef()
    const fourthCode = useRef()

    function handleInputs(e, type) {
        if (e.target.value === "") {
            return
        }

        else if (type === 1) {
            let check = isNumber(e.target.value)
            if (check) {
                secondCode.current.focus()
            }
            else {
                firstCode.current.value = ""
            }
        }
        else if (type === 2) {
            let check = isNumber(e.target.value)
            if (check) {
                tirthCode.current.focus()
            }
            else {
                secondCode.current.value = ""
            }
        }
        else if (type === 3) {
            let check = isNumber(e.target.value)
            if (check) {
                fourthCode.current.focus()
            }
            else {
                tirthCode.current.value = ""
            }
        }
        else if (type === 4) {
            let check = isNumber(e.target.value)
            if (!check) {
                fourthCode.current.value = ""
            }
        }

    }

    function confirmCode() {

        let model = {
            firstCode: firstCode.current.value,
            secondCode: secondCode.current.value,
            tirthCode: tirthCode.current.value,
            fourthCode: fourthCode.current.value,
        }

        if (model.firstCode === "" || model.secondCode === "" || model.tirthCode === "" || model.fourthCode === "") {
            toastifyWarning("کد به صورت صحیح وارد نشده است")
            return
        }

        //axios
        toastifySuccess("کد مورد تایید است")

    }

    function getCodeAgain() {
        firstCode.current.value = ""
        secondCode.current.value = ""
        tirthCode.current.value = ""
        fourthCode.current.value = ""
        firstCode.current.focus()
    }

    function handleKeyUp(e, type) {
        if (e.which === 8) {
            if (type === 4) {
                if (fourthCode.current.value === "") {
                    tirthCode.current.focus()
                }
            }
            else if (type === 3) {
                if (tirthCode.current.value === "") {
                    secondCode.current.focus()
                }
            }
            else if (type === 2) {
                if (secondCode.current.value === "") {
                    firstCode.current.focus()
                }
            }
        }

    }

    useEffect(() => {
        getCodeAgain()
    }, [phoneNo])

    return (
        <>
            <div className='vertificationBox d-flex justify-content-center'>
                <div className="w-100 mt-1 mb-1">

                    <div className='w-100 mb-4 mt-4 d-flex justify-content-center align-items-center gap-2 '>
                        <input id='login-code-box-4' className='vertificationInputs' onKeyUp={(e) => handleKeyUp(e, 4)} onChange={(e) => handleInputs(e, 4)} min={0} max={9} maxLength={1} ref={fourthCode} autoComplete="off" />
                        <input id='login-code-box-3' className='vertificationInputs' onKeyUp={(e) => handleKeyUp(e, 3)} onChange={(e) => handleInputs(e, 3)} min={0} max={9} maxLength={1} ref={tirthCode} autoComplete="off" />
                        <input id='login-code-box-2' className='vertificationInputs' onKeyUp={(e) => handleKeyUp(e, 2)} onChange={(e) => handleInputs(e, 2)} min={0} max={9} maxLength={1} ref={secondCode} autoComplete="off" />
                        <input id='login-code-box-1' className='vertificationInputs' onKeyUp={(e) => handleKeyUp(e, 1)} onChange={(e) => handleInputs(e, 1)} min={0} max={9} maxLength={1} ref={firstCode} autoComplete="off" />
                    </div>

                    <div className='w-100 d-flex gap-2'>
                        <button className="btn btn-primary w-100 btn-lg login-btn mb-2" onClick={confirmCode} >تایید کد</button>
                        <button className="btn btn-outline-primary btn-lg login-btn w-100 mb-2" onClick={getCodeAgain}>حذف کد</button>
                    </div>
                </div>

            </div>
        </>
    )
}
