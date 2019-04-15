import {graphql} from "gatsby";
import * as React from "react";
import HeaderSection from "../components/HeaderSection";
import {LinksSection} from "../components/LinksSection";
import {ProjectsSection} from "../components/ProjectsSection";
import SectionContainer from "../components/SectionContainer";
import {TitleSection} from "../components/TitleSection";
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

    // public titleContent = ();

    public render() {
        const {
            name,
            tagline,

        } = this.props.data.site.siteMetadata;
        return (

            <div className={styles.Container}>

                <HeaderSection/>

                <TitleSection/>

                <ProjectsSection/>

                <LinksSection/>

                <div className={styles.Mobile}>
                    <button onClick={seeMobile} className={styles.Button2}>Want to see a mobile orientation?</button>
                </div>
            </div>
        );
    }
}

