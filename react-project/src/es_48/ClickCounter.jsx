import { useEffect,useState } from "react";

const ClickCounter = () => {
    const [counter, setCounter] = useState(0);

    const  handleCounterIncrement = () => {
        setCounter((c) => c + 1);
    }

    const onCountChange = c => console.log(c);

    useEffect(()=> {onCountChange(counter)},[counter]);

    return (
        <div>
            {counter}
            <button type="button" onClick={handleCounterIncrement}>+</button>
        </div>
    );
};

export default ClickCounter;
