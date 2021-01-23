// // import React, { useState } from "react";

// // const App = () => {
// //     const [item, setItem] = useState(0);
// //     const incrementItem = () => setItem(item + 1);
// //     const decrementItem = () => setItem(item - 1);
// //     return (
// //         <div className="App">
// //             <h1>Hello {item}</h1>
// //             <button className="increment" onClick={incrementItem}>
// //                 increment
// //             </button>

// //             <button className="decrement" onClick={decrementItem}>
// //                 decrement
// //             </button>
// //         </div>
// //     );
// // };

// import React, { Component } from "react";
// class App extends Component {
//     state = {
//         item: 0,
//     };
//     incrementItem = () => {
//         this.setState({ item: this.state.item + 1 });
//     };
//     decrementItem = () => {
//         this.setState({ item: this.state.item - 1 });
//     };
//     render() {
//         return (
//             <div className="App">
//                 <h1>Hello {this.state.item}</h1>
//                 <button onClick={this.incrementItem}>+</button>
//                 <button onClick={this.decrementItem}>-</button>
//             </div>
//         );
//     }
// }

// // export default App;
