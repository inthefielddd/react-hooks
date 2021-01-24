import React, { useEffect, useRef } from "react";

export const useHover = (onHover) => {
    if (typeof onHover !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []);
    return element;
};

const App = () => {
    const sayHello = () => console.log("Say Hello");
    const title = useHover(sayHello);
    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
        </div>
    );
};

export default App;
