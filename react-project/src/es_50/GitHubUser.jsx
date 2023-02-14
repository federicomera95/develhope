import { useEffect, useState } from "react";

const GitHubUser = ({ username })=> {
    const [user, setUser] = useState(null);


    const fetchUser = async ()=> {
        try{    
            const response = await fetch(`https://api.github.com/users/${username}`);
            const user = await response.json();
            setUser(user);
            console.log(user);
            return;
        }catch (e){
            return console.log(e)}
    }

    useEffect(()=>{
        if(!username){ return;}

        fetchUser();

    },[username])

    return (
        <div>
            {!user && <p>Loading...</p>}
        <h1>{user?.login}</h1>
        <h1>{user?.bio}</h1>
        </div>
    );
} 

export default GitHubUser;