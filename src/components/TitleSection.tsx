import * as React from "react";
import * as styles from "../pages/Index.module.scss";
import SectionContainer from "./SectionContainer";

export const TitleSection = () => {
    const content = (
        <>
            <div className={styles.PageCenteredContainer}>
                <div className={styles.PageCentered}>
                    <img id="image" className={styles.TitleImage}
                         src="https://media.licdn.com/dms/image/C4D03AQESxzqryh2fhw/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=ABtAJi2TdPMpnf4AqZ3DoQ8IYudOf8-ec2vjMSbynSs"
                         alt="It's me!"/>
                    <h2>Web Developer</h2>
                </div>
            </div>
        </>
    );

    return (
        <SectionContainer
            title="Connor Taylor"
            content={content}
        />
    );
};
