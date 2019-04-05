import React from "react";
import * as styles from "../pages/Index.module.scss";
import LinkBarContainer from "./LinkBarContainer"

export interface ILinksContainerProps {
    title: string
    subtitle:string
    links?: container

    githubTitle: string
}

const fetchUsers = async () => {
    const api_call = await fetch(`https://api.github.com/users/connorrt/events`);

    const data = await api_call.json();
    return {data};
};

const showData = () => {
    fetchUsers().then((res) => {
        console.log(res);

        document.getElementById(`login`).innerHTML = `Username: ${res.data[0].actor.login}`;
        document.getElementById(`event_type`).innerHTML = `Event Type: ${res.data[0].type}`;
        document.getElementById(`created_at`).innerHTML = `Time created: ${res.data[0].created_at}`;
        document.getElementById(`repo_name`).innerHTML = `Repository: ${res.data[0].repo.name}`;
    }).catch(e => {
        console.error(e);
    });
};

const LinksContainer: React.ComponentType<ILinksContainerProps> = (props: ILinksContainerProps): JSX.Element => {
    return (
        <div className={styles.Links}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <LinkBarContainer
                image={`/icons/GitHub-Mark-32px.png`}
                href={`https://github.com/connorrt`}
                alt={`Github`}
            />
            <LinkBarContainer
                image={`/icons/In-Black-34px-R.png`}
                href={`https://www.linkedin.com/in/connor-taylor-9ab483164`}
                alt={`LinkedIn`}
            />
            <div className={styles.GithubAPI} onLoad={showData()}>
                <h3>{props.githubTitle}</h3>
                <p id={`login`}>(Something's wrong with Github API)</p>
                <p id={`event_type`}>oops</p>
                <p id={`created_at`}>oops</p>
                <p id={`repo_name`}>oops</p>
            </div>
        </div>
    );
};


export default LinksContainer;
