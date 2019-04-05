import React from "react";
import * as styles from "../pages/Index.module.scss";

export interface ILinkBarContainerProps {
    image: string
    href: string
    alt: string
}

const TitleContainer: React.ComponentType<ILinkBarContainerProps> = (props: ILinkBarContainerProps): JSX.Element => {
    return (

        <span className={styles.LinkIcon}>
            <a href={props.href}>
                <img src={props.image} alt={props.alt}/>
            </a>
        </span>

    );
};

export default TitleContainer;
