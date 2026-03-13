
import { useState } from 'react';
import './App.css'
import { Sidebar } from './components/slidebar/Leftsidebar'

import RightsideBar from './components/slidebar/RightsideBar'
import { conversations } from './components/data/mockData';



function App() {
  const [activeId, setActiveId] = useState<string>("1"); 
 const handleSelectConversation = (id: string) => {
    setActiveId(id);
  };

  const activeConversation=conversations.find((conv) => conv.id === activeId)
  return (
    <>
   
     <div className='text-4xl font-bold text-blue-700 m-10'>LinkUp</div>
      <div className='flex h-screen mt-10 p-5'>
        <div className='w-[30%]'>
          <Sidebar
          activeId={activeId}
          onSelectConversation={handleSelectConversation}
          ></Sidebar>
        </div>
        <div className='w-[70%]'>
      <RightsideBar conversation={activeConversation}></RightsideBar>
        </div>
      </div>
      
      
    </>
  )
}

export default App
