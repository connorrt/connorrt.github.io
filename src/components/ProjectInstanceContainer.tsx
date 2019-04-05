import React from "react";
import * as styles from "../pages/Index.module.scss";

export interface IProjectInstanceContainerProps {
    title1: string
    title2?: string
    titleLink1?: string
    titleLink2?: string
    img?: string
    body?: string
}

const TitleContainer: React.ComponentType<IProjectInstanceContainerProps> = (props: IProjectInstanceContainerProps): JSX.Element => {
    return (
        <>
            <h2>
                <a href={props.titleLink1}>{props.title1}</a>
                <a href={props.titleLink2}>{props.title2}</a>
            </h2>
            <div className={styles.ProjectBody}>
                <img className={styles.ProjectImage} src={props.img} width={200}
                     height={200} alt=""/>
                <p>{props.body}</p>
            </div>
        </>
    );
};

export default TitleContainer;
