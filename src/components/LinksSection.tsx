import {useEffect, useState} from "react";
import * as React from "react";
import * as styles from "../pages/Index.module.scss";
import SectionContainer from "./SectionContainer";

interface IData {
    public_repos: string
    followers: string
}

export const LinksSection: React.ComponentType = (): JSX.Element => {

    const [data, setData] = useState({} as IData);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/connorrt`).then(async (res) => {

            const resData = await res.json();
            const d = resData;
            setData({
                public_repos: d.public_repos,
                followers: d.followers
            });

        }).catch(err => {
            console.error(err);
            setError(true);
        });
    }, []);

    const displayData = Object.keys(data).length
        ? (
            <div className={styles.GithubAPIBar}>
                <div className={styles.GithubAPIBox}>
                    <h4>{data.public_repos}</h4>
                    <p>Public Repositories</p>
                </div>
                <div className={styles.GithubAPIBox}>
                    <h4>{data.followers}</h4>
                    <p>Followers</p>
                </div>
            </div>
        )
        : <p>Something went wrong.</p>;

    const content = (
        <div className={styles.PageCenteredContainer}>
            <div className={styles.PageCentered}>
                <p>Where you can find my work and I.</p>
                <span className={styles.LinkIcon}>
            <a href={`https://github.com/connorrt`}>
                <img src={`/icons/GitHub-Mark-32px.png`} alt={`Github`}/>
            </a>
        </span>
                <span className={styles.LinkIcon}>
                <a href={`https://www.linkedin.com/in/connor-taylor-9ab483164`}>
                    <img src={`/icons/In-Black-34px-R.png`} alt={`LinkedIn`}/>
                </a>
            </span>
                <div className={styles.GithubAPI}>
                    <h3>Speaking of Github...</h3>
                    {displayData}
                </div>
            </div>
        </div>
    );
    return (
        <SectionContainer
            title="Links"
            content={content}
        />
    );
};
