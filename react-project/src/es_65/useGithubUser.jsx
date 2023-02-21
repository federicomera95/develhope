import { useState } from "react";

const useGithubUser = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchGithubUser = async (username) => {
        setData(null)
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();

            response.status !== 200 ? setError(json.message) : setData(json);

        } catch (e) {
            setError(e)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    return { data, error, loading, onFetchUser: fetchGithubUser };
}

export default useGithubUser;