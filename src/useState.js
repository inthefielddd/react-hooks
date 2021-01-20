// import React, { useState } from "react";

// export const App = () => {
//     const [item, setItem] = useState(1);
//     const incrementItem = () => setItem(item + 1);
//     const decrementItem = () => setItem(item - 1);
//     return (
//         <div className="App">
//             <h1>Hello {item}</h1>
//             <button onClick={incrementItem}>+</button>
//             <button onClick={decrementItem}>-</button>
//         </div>
//     );
// };

import React, { Component } from "react";

class UseState extends Component {
    state = {
        item: 1,
    };
    incrementItem = () => {
        this.setState((state) => {
            return {
                item: state + 1,
            };
        });
    };
    decrementItem = () => {
        this.setState((state) => {
            return {
                item: state + 1,
            };
        });
    };
    render() {
        const { item } = this.state;
        return (
            <div className="App">
                <h1>Hello {item}</h1>
                <button onClick={this.state.incrementItem}>+</button>
                <button onClick={this.state.decrementItem}>-</button>
            </div>
        );
    }
}

export default UseState;
