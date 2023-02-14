import { useState } from "react";
import Counter from "./Counter";


const App = ()=> {

        const [showCounter, setShowCounter] = useState(true);

        const handleToggleCounter = () => [
              setShowCounter((s) => !s)  
        ]

        return (
                <div>
                     <button onClick={handleToggleCounter}>Toggle counter</button>
                     {showCounter && <Counter />}
                </div>
        );
}

export default App;