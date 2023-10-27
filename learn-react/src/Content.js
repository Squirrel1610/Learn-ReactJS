/*
* Các trường hợp sử dụng useEffect (side effect)
1) Update DOM
2) Call API
3) Listen to DOM events
    - Scroll
    - Resize
4) Clean up
    - Remove listener / unsubscribe
    - Clear timer


* Tương ứng với từng trường hợp sẽ sử dụng useEffect theo 3 cách sau
1) useEffect(callback) => dùng cho update DOM
    - Callback luôn được gọi khi component mounted
    - Gọi callback sau khi element được thêm vào DOM 
    - Luôn gọi callback mỗi khi render
2) useEffect(callback, []) => dùng để call API
    - Callback luôn được gọi khi component mounted
    - Chỉ gọi callback 1 lần sau khi component mounted
3) useEffect(callback, [deps]) 
    - Callback luôn được gọi khi component mounted
    - Callback được gọi lại mỗi khi deps thay đổi
*/

import { useEffect, useState } from "react";


function Content () {

    /*
    //Update DOM
    const [input, setInput] = useState("");

    useEffect(() => {
        document.title = input;
    })

    return (
        <input type="text" value={input} onChange={(e) =>setInput(e.target.value)}></input>
    )
    */


    /*
    //Call API

    //Example 1
    // const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then(response => response.json())
    //     .then(todos => {
    //         setTodos(todos);
    //     });
    // }, []);

    // return (
    //     <ul>
    //         {todos.map((todo, idx) => <li key={idx}>{todo.title}</li>)}
    //     </ul>
    // )

    //Example 2
    // const tabs = ["posts", "albums", "todos"];
    // const [tab, setTab] = useState("posts");
    // const [contents, setContents] = useState([]);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${tab}`)
    //     .then(response => response.json())
    //     .then(contents => {
    //         setContents(contents);
    //     });
    // },[tab]);

    // return (
    //     <div>
    //         {tabs.map((tabName, idx) => 
    //             <button 
    //                 key={idx} 
    //                 onClick={() => setTab(tabName)}
    //                 style={tab === tabName ? {
    //                     backgroundColor: "#000",
    //                     color: "#fff"
    //                 } : {}}
    //                 >
    //                 {tabName}
    //             </button>
    //         )}

    //         <ul>
    //             {contents.map((content, idx) => <li key={idx}>{content.title}</li>)}
    //         </ul>
    //     </div>
    // )
    */
}

export default Content;