import { useState } from "react";
import Content from "./Content";

function LearnUseEffect() {
    const [show, setShow] = useState(false);

    return (
        <div className="container">
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content />}
        </div>
    )
}

export default LearnUseEffect;