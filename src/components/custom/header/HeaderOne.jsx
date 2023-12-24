//package
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { showHeaderMenuAction } from '../../../store/showHeaderMenu';
import { activeLinkAction } from '../../../store/activeLink';
import { useEffect } from 'react';


export default function HeaderOne() {

    const location = window.location.href.toString()
    const isShowMenu = useSelector(state => state.showHeaderMenu.value)
    const matches = useMediaQuery('(max-width:992px)');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(activeLinkAction(location.split("http://localhost:3000/")[1]))
    }, [])


    return (
        <>
            <div className='header-one'>
                <div className='wrapper-max'>
                    <div className='header-one-content'>
                        <HeaderLogo matches={matches} />
                        <HeaderMenu matches={matches} isShowMenu={isShowMenu} location={location} />
                    </div>
                </div>
            </div>
            <div className='w-100' style={{ marginBottom: "80px" }}></div>
        </>
    );
}


/******************************************START HEADERLOGO***************************************/
function HeaderLogo({ matches, ...props }) {

    const dispatch = useDispatch()

    function showMenu() {
        dispatch(showHeaderMenuAction(true))
    }

    return (
        <div className='header-logo'>
            {!matches
                ? <Link to="/home" className='logo'>عالیس</Link>
                :
                <button className='btn button-style-1' style={{ padding: "5px", display: "flex" }} onClick={showMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>}
        </div>
    )
}
/******************************************END HEADERLOGO*****************************************/


/******************************************START HEADERMENU***************************************/
function HeaderMenu({ matches, isShowMenu, location, ...props }) {
    return (
        <>
            {matches ? <HeaderMenuOnPhone isShowMenu={isShowMenu} location={location} /> : <HeaderMenuOnDesktop location={location} />}
        </>
    )
}

function HeaderMenuOnPhone({ isShowMenu, location, ...props }) {

    const dispatch = useDispatch()
    const activelink = useSelector(state => state.activeLink.value)
    function closeMenu(activePath) {
        dispatch(showHeaderMenuAction(false))
        dispatch(activeLinkAction(activePath))
    }

    return (
        <div className='d-flex justify-content-end align-items-center'>
            <Link to="/home" className='logo'>ALIS</Link>
            <div className={`header-menu-on-phone-box ${isShowMenu ? "header-menu-on-phone-show" : ""}`} onClick={closeMenu}>
                <div className="header-menu-on-phone" onClick={(e) => e.stopPropagation()}>
                    <div className='header-menu-top-items'>
                        <div className='header-menu-top-items-closeandlogo'>
                            <Link to="/home" className='logo'>عالیس</Link>
                            <div onClick={closeMenu}>
                                <FontAwesomeIcon icon={faXmark} style={{ fontSize: "20px", color: "red", cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                    <div className='seperate-boxes'></div>
                    <div className='header-menu-middle-items'>
                        <div>
                            <div className={`headerMenuBox ${activelink === "home" ? "activeLinks" : ""}`}>
                                <span><FontAwesomeIcon icon={faFileText} /> </span>
                                <span><Link to="/home" onClick={() => closeMenu("home")}>توضیحات</Link></span>
                            </div>
                            <div className={`headerMenuBox ${activelink === "products" ? "activeLinks" : ""}`}>
                                <span><FontAwesomeIcon icon={faStore} /></span>
                                <span><Link to="/products" onClick={() => closeMenu("products")}>محصولات</Link></span>
                            </div>
                            <div className={`headerMenuBox ${activelink === "users" ? "activeLinks" : ""}`}>
                                <span><FontAwesomeIcon icon={faUser} /></span>
                                <span><Link to="/users" onClick={() => closeMenu("users")}>کاربران</Link></span>
                            </div>
                            <div className={`headerMenuBox ${activelink === "vertification" ? "activeLinks" : ""}`}>
                                <span><FontAwesomeIcon icon={faArrowCircleRight} /></span>
                                <span><Link to="/vertification" onClick={() => closeMenu("vertification")}>ورود</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function HeaderMenuOnDesktop({ location, ...props }) {

    const dispatch = useDispatch()
    const activelink = useSelector(state => state.activeLink.value)

    return (
        <>
            <div className='header-menu-on-dektop'>
                <div className={`header-menu-on-dektop-items ${activelink === "home" ? "activeLinks" : ""}`}>
                    <Link to="/home" onClick={() => dispatch(activeLinkAction("home"))}>توضیحات</Link>
                </div>
                <div className={`header-menu-on-dektop-items ${activelink === "products" ? "activeLinks" : ""}`}>
                    <Link to="/products" onClick={() => dispatch(activeLinkAction("products"))}>محصولات</Link>
                </div>
                <div className={`header-menu-on-dektop-items ${activelink === "users" ? "activeLinks" : ""}`}>
                    <Link to="/users" onClick={() => dispatch(activeLinkAction("users"))}>کاربران</Link>
                </div>
                <div className={`header-menu-on-dektop-items ${activelink === "vertification" ? "activeLinks" : ""}`}>
                    <Link to="/vertification" onClick={() => dispatch(activeLinkAction("vertification"))}>ورود</Link>
                </div>
            </div>
        </>
    )
}
/******************************************END HEADERMENU******************************************/

