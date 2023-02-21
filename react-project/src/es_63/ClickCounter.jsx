import { useState } from "react";

const ClickCounter = () => {
    const [counter, setCounter] = useState(0);

    const  handleCounterIncrement = () => {
        setCounter((count) => count+1);
    }

    return (
        <div>
            {counter}
            <button type="button" onClick={handleCounterIncrement}>+</button>
        </div>
    );
};

export default ClickCounter;
