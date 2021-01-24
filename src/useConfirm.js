import React from "react";

const useConfirm = (message = "", callback) => {
    if (typeof callback !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        }
    };
    return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log("Deleting the world");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default App;
