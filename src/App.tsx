
import { useState } from 'react';
import './App.css'
import { Sidebar } from './components/slidebar/Leftsidebar'

import RightsideBar from './components/slidebar/RightsideBar'



function App() {
  const [activeId, setActiveId] = useState<string>("1"); // default active conversation
 const handleSelectConversation = (id: string) => {
    setActiveId(id);
  };
  return (
    <>
   
     
      <div className='flex h-screen mt-20'>
        <div className='w-[30%]'>
          <Sidebar
          activeId={activeId}
          onSelectConversation={handleSelectConversation}
          ></Sidebar>
        </div>
        <div className='w-[70%]'>
      <RightsideBar></RightsideBar>
        </div>
      </div>
      
      
    </>
  )
}

export default App
