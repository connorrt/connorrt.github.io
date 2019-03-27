import {graphql} from "gatsby";
import * as React from "react";
import * as styles from "./Index.module.scss";

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                name: string;
                tagline: string;
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
                    <h2>{tagline}</h2>
                </div>
                <div className={styles.Links}>
                    <h1>Social</h1>
                    <p>Where you can find me around the 'net.</p>
                    <span className={styles.LinkIcon}>
                    <a href={`https://github.com/connorrt`}>
                        <img src={`/icons/GitHub-Mark-32px.png`} alt={`Github`}/>
                    </a>
                    </span>
                    <span className={styles.LinkIcon}>
                    <a href={`https:/linkedin.com`}>
                        <img src={`/icons/In-Black-34px-R.png`} alt={`LinkedIn`}/>
                    </a>
                    </span>
                </div>
                <div className={styles.Projects}>
                    <h1>Projects</h1>
                    <h2>
                        <a href={`http://blackandback.ml`}>Black And Back&nbsp;</a>
                        <a href={`https://github.com/SCCapstone/blackandback`}>(Github)</a>
                    </h2>
                    <div className={styles.ProjectExample}>
                        <div className={styles.ProjectExample}>
                            <div className={styles.ProjectImage}>
                                <img src={`http://i64.tinypic.com/34qthlj.png`} alt=""/>
                            </div>
                            <p>BlackAndBack is a image-processing webapp that adds color to black and white photos using
                                machine learning. The colorizing component uses Keras and Tensorflow and the server is
                                based in Django. (We like Python.) </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

