import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

const App = ()=> {

    return (
    
        <div>
           <Routes>
                <Route path='/' element={<Welcome name='Federico'/>}/>
           </Routes>
        </div>
    );
}

export default App;