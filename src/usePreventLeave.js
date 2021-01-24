import React from "react";

//사이트 닫을때 이벤트 발생
const usePreventLeave = () => {
    const listener = (e) => {
        e.preventDefauit();
        e.returnValue = "";
    };
    const enablePrevent = () => {
        window.addEventListener("beforeunload", listener);
    };
    const disablePrevent = () => {
        window.removeEventListener("beforeunload", listener);
    };
    return { enablePrevent, disablePrevent };
};
const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};

export default App;
