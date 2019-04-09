import * as React from "react";
import * as styles from "../pages/Index.module.scss";
import SectionContainer from "./SectionContainer";

export const ProjectsSection = () => {
    const content = (
        <>
            <h2>
                <a href={"http://blackandback.ml"}>Black and Back </a>
                <a href={"https://github.com/SCCapstone/blackandback"}>(Github)</a>
            </h2>
            <div className={styles.ProjectBody}>
                <img className={styles.ProjectImage} src={"http://i64.tinypic.com/34qthlj.png"} width={200}
                     height={200} alt=""/>
                <p className={styles.ProjectBodyText}>
                    BlackAndBack is a image-processing webapp that adds color to black and white photos
                    using machine learning. The colorizing component uses Keras and Tensorflow and the
                    server is based in Django. (We&nbsp;like&nbsp;Python.)
                </p>
            </div>
        </>
    );
    return (
        <SectionContainer
            title="Projects"
            content={content}
        />
    );
};
