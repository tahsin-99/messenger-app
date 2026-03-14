import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/slidebar/Leftsidebar";
import RightsideBar from "./components/slidebar/RightsideBar";
import { conversations } from "./components/data/mockData";
function App() {
    const [activeId, setActiveId] = useState(null);
    const handleSelectConversation = (id) => {
        setActiveId(id);
    };
    const activeConversation = conversations.find((conv) => conv.id === activeId);
    return (_jsxs(_Fragment, { children: [activeId && (_jsx("button", { onClick: () => setActiveId(null), className: "md:hidden text-2xl font-bold m-3", children: "\u2190" })), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("div", { className: "text-4xl font-bold text-blue-700 m-10", children: "LinkUp" }), _jsx("div", { children: _jsx("button", { onClick: () => document.documentElement.classList.toggle("dark"), className: "px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-black dark:text-white m-4 cursor-pointer", children: "\uD83C\uDF19 / \u2600\uFE0F" }) })] }), _jsxs("div", { className: "flex flex-1 overflow-hidden h-screen mt-10 p-5", children: [_jsx("div", { className: ` w-full md:w-[30%] overflow-y-auto ${activeId ? "hidden md:block" : "block"} `, children: _jsx(Sidebar, { activeId: activeId || "", onSelectConversation: handleSelectConversation }) }), _jsx("div", { className: `w-full  md:w-[70%] flex flex-col ${activeId ? "block" : "hidden md:block"}`, children: _jsx(RightsideBar, { conversation: activeConversation }) })] })] }));
}
export default App;
