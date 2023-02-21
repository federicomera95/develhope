import { useParams } from "react-router-dom";
import GitHubUser from "./GitHubUser";

const ShowGithubUser = () => {
    const { username } = useParams();

    return (<><GitHubUser username={username}/></>);
};

export default ShowGithubUser;