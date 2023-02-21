import { useEffect, useState } from "react";

const GitHubUser = ({ username })=> {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchUser = async ()=> {
        setLoading(true)
        setError(null)
        try{    
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();

            if(json.message){
                return setError(json.message)
            }
            setUser(json);
        }catch (e){
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchUser();
    },[username])

    return (
        <div>
        {!!loading && <p>Loading...</p>}
        {!!error && <p>{error}</p>}
        <h1>{user?.login}</h1>
        <h1>{user?.bio}</h1>
        </div>
    );
} 

export default GitHubUser;