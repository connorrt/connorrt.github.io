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

const HeaderContainer: React.ComponentType<IHeaderContainerProps> = (props: IHeaderContainerProps): JSX.Element => {
    return (
        <div className={styles.Header}>
            <div className={styles.ButtonCenter}>
                <button onClick={scrollTop} className={styles.Button}>{props.tabLeft}</button>
                <button onClick={scrollSocial} className={styles.Button}>{props.tabMiddle}</button>
                <button onClick={scrollProjects} className={styles.Button}>{props.tabRight}</button>
            </div>
        </div>
    );
};

export default HeaderContainer;
