import { useLayoutEffect, useState } from "react";

function LearnUseLayoutEffect() {
    const [count, setCount] = useState(0);

    /*  
        - useEffect render UI trước khi thực thi callback 
        - useLayoutEffect thực thi callback rồi mới render UI
    */ 

    useLayoutEffect(() => {
        if(count > 3){
            setCount(0);
        }
    },[count])

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Count</button>
        </div>
    )
}

export default LearnUseLayoutEffect