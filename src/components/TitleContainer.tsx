import React from "react";
import * as styles from "../pages/Index.module.scss";

export interface ITitleContainerProps {
    img?: string
    alt?: string
    title: string
    subtitle?: string

}

const TitleContainer: React.ComponentType<ITitleContainerProps> = (props: ITitleContainerProps): JSX.Element => {
    return (
        <div className={styles.Title}>
            <h1>{props.title}</h1>
            <img id="image" className={styles.TitleImage} src={props.img} alt={props.alt}/>
            <h2>{props.subtitle}</h2>
        </div>
    );
};


export default TitleContainer;
