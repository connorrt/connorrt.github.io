import React from "react";
import * as styles from "../pages/Index.module.scss";

export interface IHeaderContainerProps {
    tabLeft: string
    tabMiddle: string
    tabRight: string
}

function scrollTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function scrollSocial() {
    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
}

function scrollProjects() {
    window.scrollTo({
        top: 2 * window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
}

export const HeaderSection = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.ButtonCenter}>
                <button onClick={scrollTop} className={styles.Button}>{"Top"}</button>
                <button onClick={scrollSocial} className={styles.Button}>{"Links"}</button>
                <button onClick={scrollProjects} className={styles.Button}>{"Projects"}</button>
            </div>
        </div>
    );
};

export default HeaderSection;
