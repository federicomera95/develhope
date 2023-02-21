import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import ClickCounter from "./ClickCounter";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";

const App = ()=> {

    return (
    
        <div>
            <nav>
                <Link to='/'>Home</Link>    
                <Link to='/counter'>Counter</Link>    
                <Link to='/users'>List of Users</Link>    
            </nav>
           <Routes>
                <Route path='/' element={<Welcome name='Federico'/>}/>
                <Route path='/counter' element={<ClickCounter />}/>
                <Route path='/users' element={<GithubUserList />}>
                    <Route index element={<p>Add user and select it</p>}/>
                    <Route path=':username' element={<ShowGithubUser />}/>
                </Route>
                <Route path='*' element={<h1>Not Found! <Link to='/'>Go to home</Link></h1>} />
           </Routes>
        </div>
    );
}

export default App;