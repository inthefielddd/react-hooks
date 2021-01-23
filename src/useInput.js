// import React, { useState } from "react";

// const useInput = (initialValue, validator) => {
//     const [value, setValue] = useState(initialValue);
//     const onChange = (e) => {
//         const {
//             target: { value },
//         } = e;
//         let willUpdate = true;
//         if (typeof validator === "function") {
//             willUpdate = validator(value);
//         }
//         if (willUpdate) {
//             setValue(value);
//         }
//     };
//     return { value, onChange };
// };

// const App = () => {
//     //유효성검사
//     //함수면 value의 길이를 10개로 제한한다
//     //검증기능
//     const maxLen = (value) => !value.includes("!");
//     const name = useInput("Mrs.", maxLen);
//     return (
//         <div className="App">
//             <h1>Hello</h1>
//             <input type="text" placeholder="Name" value={name.value} onChange={name.onChange} />
//         </div>
//     );
// };

// // export default App;
