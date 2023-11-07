import { useState } from "react";
import ContentMemo from "./ContentMemo";

function LearnMemo() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <ContentMemo count={count} />
            <h1>{count}</h1>
            <button onClick={handleCount}>Count</button>
        </div>
    )
}

export default LearnMemo;