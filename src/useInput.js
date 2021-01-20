import React, { useState } from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        //e.target.value
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const App = () => {
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mrs.", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input type="text" placeholder="Name" value={name.value} onChange={name.onChange} />
        </div>
    );
};

// export default App;
