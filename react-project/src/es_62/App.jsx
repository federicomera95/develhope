import { Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUSer";

const App = ()=> {

    return (
    
        <div>
           <Routes>
                <Route path='/users/:username' element={<ShowGithubUser />}/>
           </Routes>
        </div>
    );
}

export default App;