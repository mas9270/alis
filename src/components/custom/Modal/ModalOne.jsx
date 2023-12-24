import React from 'react'

//package
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import useMediaQuery from '@mui/material/useMediaQuery';
import Fade from '@mui/material/Fade';



export default function ModalOne({ modalOpen, modalClose, children, ...props }) {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="OnModal">
            <Modal open={modalOpen} onClose={modalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
                style={{ zIndex: 10000 }} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, } }} >
                <Fade in={modalOpen}>
                    <div className={`${matches ? `${props.className} modal-size-height` : `modal-size-fitcontent modal-size-height ${props.className}`}`} style={props.style !== undefined ? props.style : {}}>
                        {children}
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}