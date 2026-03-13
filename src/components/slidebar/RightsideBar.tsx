import React from 'react';
import ChatHeader from '../chat/ChatHeader';
import MessageList from '../chat/MessageList';
import MessageInput from '../chat/MessageInput';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

interface User {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
}

interface Conversation {
  id: string;
  user: User;
  messages: Message[];
}

interface RightsideBarProps {
  conversation?: Conversation;
}

const RightsideBar = ({conversation}: RightsideBarProps) => {
      
    return (
        <div className='flex flex-col h-full border border-green-500'>
            <ChatHeader conversation={conversation} ></ChatHeader>
            <MessageList messages={conversation?.messages|| []}></MessageList>
            <MessageInput></MessageInput>
        </div>
    );
};

export default RightsideBar;