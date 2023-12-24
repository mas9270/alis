
import { toast } from 'react-toastify';

export function toastifySuccess(massage, delay = null) {
    toast.success(massage, {
        position: "top-right",
        autoClose: delay === null ? 5000 : delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        className: "ToastifyStyle",
        rtl: true
    });
}

export function toastifyWarning(massage, delay = null) {
    toast.warn(massage, {
        position: "top-right",
        autoClose: delay === null ? 5000 : delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "ToastifyStyle",
        rtl: true
    });
}

export function toastifyError(massage, delay = null) {
    toast.error(massage, {
        position: "top-right",
        autoClose: delay === null ? 5000 : delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "ToastifyStyle",
        rtl: true
    });
}

export function isNumber(value) {
    let number = /\D/

    if (!number.test(value)) {
        return true
    }
    else {
        return false
    }
}


