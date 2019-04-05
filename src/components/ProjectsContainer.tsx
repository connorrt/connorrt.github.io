import React from "react";
import * as styles from "../pages/Index.module.scss";
import ProjectInstanceContainer from "./ProjectInstanceContainer"

export interface IProjectsContainerProps {
    title: string

    subtitle1?: string
    subtitleLink1?: string
    subtitle2?: string
    subtitleLink2?: string


}

const TitleContainer: React.ComponentType<IProjectsContainerProps> = (props: IProjectsContainerProps): JSX.Element => {
    return (
        <div className={styles.Projects}>
            <h1>{props.title}</h1>
            <ProjectInstanceContainer
                title1="Black And Back "
                title2="(Github)"
                titleLink1="http://blackandback.ml"
                titleLink2="https://github.com"
                img="http://i64.tinypic.com/34qthlj.png"
                body="BlackAndBack is a image-processing webapp that adds color to black and white photos
                using machine learning. The colorizing component uses Keras and Tensorflow and the
                server is based in Django. (We&nbsp;like&nbsp;Python.)"
            />
        </div>
    );
};


export default TitleContainer;
