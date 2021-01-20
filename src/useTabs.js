import React from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1",
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2",
    },
    {
        tab: "Section 3",
        content: "I'm the content of the Section 3",
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
    };
};
const App = () => {
    const tabs = useTabs(0, content);
    return (
        <div className="App">
            <h1>Hello</h1>
            {content.map((section) => (
                <button>{section.tab}</button>
            ))}
        </div>
    );
};

export default App;
