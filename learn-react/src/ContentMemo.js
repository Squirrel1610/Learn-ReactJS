import { memo } from "react";

/*
    - 3 khái niệm hay dùng để tránh lặp lại logic: Render props, HOC, Hooks

    - Memo: Higher Order Component (HOC)
    - Memo nhận component và check prop của component, nếu prop thay đổi => thì cho re-render còn prop không thay đổi thì không phải re-render lại
*/



function ContentMemo({count}) {
    console.log("re-render");

    return (
        <div>
            Hello AE {count}
        </div>
    )
}

export default memo(ContentMemo);