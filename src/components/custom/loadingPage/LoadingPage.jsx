import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LoadingPage.module.css"

export default function LoadingPage() {

    return (
        <div className={styles.loadingPageCss}>
            <div className={styles.loadingPageContentCss}>
                <FontAwesomeIcon icon={faSpinner} spinPulse size='4x' />
            </div>
        </div>
    );
}

