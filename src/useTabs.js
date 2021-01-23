import React, { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm content of the Section 2",
    },
    {
        tab: "Section 3",
        content: "I'm content of the Section 3",
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        //배열이 아닐때 리턴한다
        //function을 끝낸다
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};

const App = () => {
    const { changeItem, currentItem } = useTabs(0, content);
    return (
        <div className="App">
            {content.map((item, index) => (
                <button onClick={() => changeItem(index)}>{item.tab}</button>
            ))}
            <div className="content">{currentItem.content}</div>
        </div>
    );
};

export default App;
