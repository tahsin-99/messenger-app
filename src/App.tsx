import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/slidebar/Leftsidebar";

import RightsideBar from "./components/slidebar/RightsideBar";
import { conversations } from "./components/data/mockData";

function App() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleSelectConversation = (id: string) => {
    setActiveId(id);
  };

  const activeConversation = conversations.find((conv) => conv.id === activeId);
  return (
    <>
      {activeId && (
        <button
          onClick={() => setActiveId(null)}
          className="md:hidden text-2xl font-bold m-3"
        >
          ←
        </button>
      )}
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold text-blue-700 m-10">LinkUp</div>
        <div>
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-black dark:text-white m-4 cursor-pointer"
          >
            🌙 / ☀️
          </button>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden h-screen mt-10 p-5">
        <div
          className={` w-full md:w-[30%] overflow-y-auto ${activeId ? "hidden md:block" : "block"} `}
        >
          <Sidebar
            activeId={activeId || ""}
            onSelectConversation={handleSelectConversation}
          ></Sidebar>
        </div>
        <div
          className={`w-full  md:w-[70%] flex flex-col ${activeId ? "block" : "hidden md:block"}`}
        >
          <RightsideBar conversation={activeConversation}></RightsideBar>
        </div>
      </div>
    </>
  );
}

export default App;
