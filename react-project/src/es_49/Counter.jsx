import { useEffect,useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const  handleCounterIncrement = () => {
        setCounter((c) => c + 1);
    }

    const onCountChange = c => console.log(c);

    useEffect(()=> {onCountChange(counter)},[counter]);

    useEffect(()=>{

        const interval = setInterval(()=> console.log('component exists'),500)

        return ()=> {
            clearInterval(interval)
            console.log('component doesn\'t exists')
        }
    },[])

    return (
        <div>
            {counter}
            <button type="button" onClick={handleCounterIncrement}>+</button>
        </div>
    );
};

export default Counter;
