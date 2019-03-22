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

function scrollTop(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
}
function scrollSocial(){
    window.scrollTo({
        top:window.innerHeight,
        left:0,
        behavior: "smooth"
    });
}
function scrollOther(){
    window.scrollTo({
        top:2*window.innerHeight,
        left:0,
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
                    <button onClick={scrollTop} className={styles.Button}>Top</button>
                    <button onClick={scrollSocial} className={styles.Button}>Social</button>
                    <button onClick={scrollOther} className={styles.Button}>Other</button>
                </div>
                <div className={styles.Title}>
                    <h1>{name}</h1>
                    <h2>{tagline}</h2>
                </div>
                <h1>{`Social`}</h1>
                <div className={styles.Links}>
                    <a href={github}>Github</a>
                    <a href={linkedin}>LinkedIn</a>
                </div>
            </div>
        );
    }
}

