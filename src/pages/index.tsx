import {graphql} from "gatsby";
import * as React from "react";
import HeaderContainer from "../components/HeaderContainer";
import LinksContainer from "../components/LinksContainer";
import ProjectsContainer from "../components/ProjectsContainer";
import TitleContainer from "../components/TitleContainer";
import * as styles from "./Index.module.scss";

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                name: string;
                tagline: string;
            },
        }
    };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

function seeMobile() {
    window.open(window.location.href,
        "targetwindow",
        `width = 360, height = 640`
    )
    ;
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {

    public render() {
        const {
            name,
            tagline,

        } = this.props.data.site.siteMetadata;
        console.log("test");
        return (

            <div className={styles.Container}>

                <HeaderContainer
                    tabLeft="Top"
                    tabMiddle="Links"
                    tabRight="Projects"
                />

                <TitleContainer
                    title="Connor Taylor"
                    subtitle="Welcome to my portfolio!"
                    img="https://media.licdn.com/dms/image/C4D03AQESxzqryh2fhw/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=ABtAJi2TdPMpnf4AqZ3DoQ8IYudOf8-ec2vjMSbynSs"
                    alt="It's me!"
                />

                <LinksContainer
                    title="Social"
                    subtitle="Where you can find my work and I."
                    githubTitle="Here's the most recent (public) thing I've done on Github:"
                />

                <ProjectsContainer
                    title="Projects"
                />

                <div className={styles.Mobile}>
                    <button onClick={seeMobile} className={styles.Button}>Want to see a mobile orientation?</button>
                </div>
            </div>
        );
    }
}

