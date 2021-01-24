import React, { useEffect, useState } from "react";

const App = () => {
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    const sayHello = () => {
        console.log("hello");
    };
    //number가 변할때만 sayhello가 작동하도록하자
    useEffect(sayHello, []);
    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
};

export default App;
