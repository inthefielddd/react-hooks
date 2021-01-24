import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    //useTitle에서 setTitle을 리턴하고 있기 때문에
    //titleUpdater값에는 setTitle함수가 담겨있다
    //titleUpdatar = setTitle()
    //titleUpdater('HI') = setTitle("HI")
    return setTitle;
};
const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div className="App">
            <div>Hi</div>
        </div>
    );
};
export default App;
