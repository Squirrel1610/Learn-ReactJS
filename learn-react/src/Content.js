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
    - Cleanup function luôn được gọi khi component unmounted
    - Cleanup function luôn được gọi trước khi callback được gọi (trừ cái lần được mounted)
2) useEffect(callback, []) => dùng để call API
    - Callback luôn được gọi khi component mounted
    - Chỉ gọi callback 1 lần sau khi component mounted
    - Cleanup function luôn được gọi khi component unmounted
    - Cleanup function luôn được gọi trước khi callback được gọi (trừ cái lần được mounted)
3) useEffect(callback, [deps]) 
    - Callback luôn được gọi khi component mounted
    - Callback được gọi lại mỗi khi deps thay đổi
    - Cleanup function luôn được gọi khi component unmounted
    - Cleanup function luôn được gọi trước khi callback được gọi (trừ cái lần được mounted)
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
    //Call API + DOM Events

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

    
    // //Example 2
    // const tabs = ["posts", "albums", "todos"];
    // const [tab, setTab] = useState("posts");
    // const [contents, setContents] = useState([]);
    // const [goTop, setGoTop] = useState(false);

    // //Call api
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${tab}`)
    //     .then(response => response.json())
    //     .then(contents => {
    //         setContents(contents);
    //     });
    // },[tab]);

    // //DOM events
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setGoTop(window.scrollY >= 200);
    //     }

    //     window.addEventListener("scroll", handleScroll);

    //     //clean up function
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // }, [])

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

    //         {
    //             goTop && ( 
    //                         <button style={{
    //                             position: "fixed",
    //                             bottom: "20px",
    //                             right: "20px"
    //                         }}>
    //                             Go top
    //                         </button>
    //                     )
    //         }
    //     </div>
    // )
    */
    
    /*
    //timer function
    const [time, setTime] = useState(10);
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prev => {
                if(prev === 0 ){
                    return clearInterval(timerId);
                }

                return prev - 1;
            });
            
        }, 1000)

        //clean up
        return () => {
            console.log("Unmounted")
            clearInterval(timerId);
        }
    }, [])

    //Timer function
    return (
        <h1>{time}</h1>
    )
    */

    
    //preview image
    const [avatar, setAvatar] = useState();

    //avoid memory leak
    useEffect(() => {
        //cleanup func
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])

    const handlePreviewImg = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    }

    return (
        <div>
            <input type="file" onChange={handlePreviewImg}></input>
            {
                avatar && ( 
                    <img src={avatar.preview}></img>
                )
            }
        </div>
    )
}

export default Content;