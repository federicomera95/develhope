import { useCallback, useState } from "react";

const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement = useCallback(() => {
        setCounter((c) => c + 1 )
    },[])

    const handleCounterDecrement = useCallback(() => {
        setCounter((c) => c - 1 )
    },[])

    const handleCounterReset = useCallback(() => {
        setCounter(initialValue)
    },[initialValue])

    return { 
        counter: counter, 
        onIncrement: handleCounterIncrement, 
        onDecrement: handleCounterDecrement, 
        onReset: handleCounterReset 
    };
}

export default useCounter;