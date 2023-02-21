import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUSer";
import Welcome from "./Welcome";
import ClickCounter from "./ClickCounter";

const App = ()=> {

    return (
    
        <div>
            <nav>
                <Link to='/'>Home</Link>    
                <Link to='/counter'>Counter</Link>    
                <Link to='/users/federicomera95'>User</Link>    
            </nav>
           <Routes>
                <Route path='/' element={<Welcome name='Federico'/>}/>
                <Route path='/counter' element={<ClickCounter />}/>
                <Route path='/users/:username' element={<ShowGithubUser />} />
                <Route path='*' element={<h1>Not Found! <Link to='/'>Go to home</Link></h1>} />
           </Routes>
        </div>
    );
}

export default App;