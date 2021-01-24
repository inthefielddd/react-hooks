// import React, { useEffect, useRef } from "react";

// //onClick을 인자로 넣는다
// const useClick = (onClick) => {
//     if (typeof onclick !== "function") {
//         return;
//     }
//     const element = useRef();
//     useEffect(() => {
//         //componentWillmount때 발생
//         if (element.current) {
//             element.current.addEventListener("click", onClick);
//         }
//         //useEffect를 return받은 함수는 componentwillUnMount때 호출된다
//         //이렇게하는 이유는 component가 mount가 되지않았을때 eventListener가 배치되게 하고싶지않기 때문에
//         return () => {
//             if (element.current) {
//                 element.current.removeEventListener("click", onClick);
//             }
//         };
//     }, []);
//     return element;
// };

// const App = () => {
//     const sayHello = () => console.log("Say Hello");
//     const title = useClick(sayHello);
//     return (
//         <div className="App">
//             <h1 ref={title}>Hi</h1>
//         </div>
//     );
// };
// export default App;
// //sayHello를 가진 useClick이 마운트가 되었을때, 두개의 click이벤트를 등록해줌
// //[]deps를 비워둠으로써 update가 되었을때상황은 고려하지 않아도된다
