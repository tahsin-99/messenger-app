
import { useState } from 'react';
import './App.css'
import { Sidebar } from './components/slidebar/Leftsidebar'

import RightsideBar from './components/slidebar/RightsideBar'



function App() {
  const [activeId, setActiveId] = useState<string>("1"); 
 const handleSelectConversation = (id: string) => {
    setActiveId(id);
  };
  return (
    <>
   
     <div className='text-4xl font-bold text-blue-700 m-10'>LinkUp</div>
      <div className='flex h-screen mt-20 p-5'>
        <div className='w-[30%]'>
          <Sidebar
          activeId={activeId}
          onSelectConversation={handleSelectConversation}
          ></Sidebar>
        </div>
        <div className='w-[70%]'>
      <RightsideBar activeId={activeId}></RightsideBar>
        </div>
      </div>
      
      
    </>
  )
}

export default App
