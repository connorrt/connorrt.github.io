import React from "react";
import * as styles from "../pages/Index.module.scss";

export interface ISectionContainerProps {
    title: string
    content: JSX.Element
}

const SectionContainer: React.ComponentType<ISectionContainerProps> = (props: ISectionContainerProps): JSX.Element => {
    return (

        <div className={styles.Title}>
            <h1>{props.title}</h1>
            {props.content}
        </div>
    );
};

export default SectionContainer;
