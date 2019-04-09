import {useEffect, useState} from "react";
import * as React from "react";
import * as styles from "../pages/Index.module.scss";
import SectionContainer from "./SectionContainer";

interface IData {
    login: string
    type: string
    created_at: string
    repo: string
}

export const LinksSection: React.ComponentType = (): JSX.Element => {

    const [data, setData] = useState({} as IData);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/connorrt/events`).then(async (res) => {
            const resData = await res.json();
            if (!resData.length) {
                throw Error("API is empty");
            }
            const d = resData[0];
            setData({
                login: d.actor.login,
                type: d.type,
                created_at: d.created_at,
                repo: d.repo.name
            });

        }).catch(err => {
            console.error(err);
            setError(true);
        });
    }, []);

    const content = (
        <>
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
                <h3>Here's the most recent (public) thing I've done on Github:</h3>
                <p>Username: {data.login}</p>
                <p>Event Type: {data.type}</p>
                <p>Time created: {data.created_at}</p>
                <p>Repository: {data.repo}</p>
            </div>

        </>
    );
    return (
        <SectionContainer
            title="Links"
            content={content}
        />
    );
};
