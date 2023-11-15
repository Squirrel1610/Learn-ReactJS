import { useCallback, useState } from "react";
import ContentMemo from "./ContentMemo";

function LearnMemo() {
    const [count, setCount] = useState(0);

    /*
        memo + useCallback: giúp tránh việc re-render lại component khi state thay đổi
    */
    const handleCount = useCallback(() => {
        setCount(prev => prev + 1);
    }, [])

    return (
        <div>
            <ContentMemo onCount={handleCount} />
            <h1>{count}</h1>
        </div>
    )
}

export default LearnMemo;