import {graphql} from "gatsby";
import * as React from "react";
import * as styles from "./Index.module.scss";

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                name: string;
                tagline: string;
                github: string;
                linkedin: string;
            },
        },
    };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
        github
        linkedin
      }
    }
  }
`;

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

export default class IndexPage extends React.Component<IndexPageProps, {}> {

    public render() {
        const {
            name,
            tagline,
            github,
            linkedin,
        } = this.props.data.site.siteMetadata;
        console.log("test");
        return (

            <div className={styles.Container}>
                <div className={styles.Header}>
                    <div className={styles.ButtonCenter}>
                        <button onClick={scrollTop} className={styles.Button}>Top</button>
                        <button onClick={scrollSocial} className={styles.Button}>Social</button>
                        <button onClick={scrollProjects} className={styles.Button}>Projects</button>
                    </div>
                </div>
                <div className={styles.Title}>
                    <h1>{name}</h1>
                    /*picture here*/
                    <h2>{tagline}</h2>
                </div>
                <div className={styles.Links}>
                    <h1>{`Social`}</h1>
                    <a href={`https://github.com/connorrt`}>Github</a>
                    <a href={`https:/linkedin.com`}>LinkedIn</a>
                </div>
            </div>
        );
    }
}

