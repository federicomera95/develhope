import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


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
                {!!users.length > 0 && users.map((user,index) => <li key={index}><Link  to={`/users/${user}`}>{user}</Link></li>)}
            </ul>
            <Outlet/>
        </div>
    ); 

}

export default GithubUserList;