import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";
import useGithubUser from "./useGithubUser";


const GithubUserList = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const handleGetUserData = () => {
        setUsers((users)=> [...users,user]);
    }

    return(
        <div>
            <input value={user} onChange={(e) => setUser(e.target.value)}/>
            <button onClick={handleGetUserData}>Load fetch user</button>
            <ul>
                {!!users.length > 0 && users.map((user,index) => <li key={index}><GithubUser username={user}/></li>)}
            </ul>
        </div>
    ); 

}

export default GithubUserList;