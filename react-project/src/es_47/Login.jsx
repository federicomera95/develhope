import { useState } from "react";

const Login = ({onLogin})=> {
    const [data,setData] = useState({username:'',password:'',remember: false});

    const handleInputChange = ({name, value, type, checked}) => {
        setData((data)=> { return {...data,[name]: type === 'checkbox' ? checked : value }});
    }

    console.log(data)

    return (
        <div>
            <input type="text" name="username" onChange={({target}) => handleInputChange(target)} value={data.username}/>
            <input type="password" name="password" onChange={({target}) => handleInputChange(target)} value={data.password}/>
            <input type="checkbox" name="remember" onChange={({target}) => handleInputChange(target)} checked={data.remember}/>
            <button disabled={data.username === '' || data.password === ''} onClick={onLogin}>Login</button>
        </div>
    );
};

export default Login;