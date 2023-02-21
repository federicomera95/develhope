import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import ClickCounter from "./ClickCounter";

const App = ()=> {

    return (
    
        <div>
           <Routes>
                <Route path='/' element={<Welcome name='Federico'/>}/>
                <Route path='/counter' element={<ClickCounter />}/>
           </Routes>
        </div>
    );
}

export default App;