import React from 'react';
import ChatHeader from '../chat/ChatHeader';
import MessageList from '../chat/MessageList';
import MessageInput from '../chat/MessageInput';


interface RightsideBarProps {
  activeId: string;
}
const RightsideBar = ({activeId}: RightsideBarProps) => {
      
    return (
        <div className='border border-green-500 h-auto'>
            <ChatHeader conversation={activeId} ></ChatHeader>
            <MessageList conversation={activeId}></MessageList>
            <MessageInput></MessageInput>
        </div>
    );
};

export default RightsideBar;