import { useEffect } from "react";
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {


    const { data, error, loading, onFetchUser } = useGithubUser(username)

    useEffect(()=> {
        onFetchUser(username)
    },[username])

    return (
        <div>
            {!! loading && <h1>Loading...</h1>}
            {!! error && <h1>There has been an error</h1>}
            {!! data?.name && <h1>{data?.name}</h1>}
            {!! data?.bio && <h1>{data?.bio}</h1>}
        </div>
    );
}

export default GithubUser;