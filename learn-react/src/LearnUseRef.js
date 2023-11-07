import { useEffect, useRef, useState } from "react";

function LearnUseRef() {
    const [count, setCount ] = useState(30);

    let timerId = useRef();
    let h1Ref = useRef();

    //get dom element
    useEffect(() => {
        console.log(h1Ref.current);
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default LearnUseRef;