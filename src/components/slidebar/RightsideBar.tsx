import React, { useEffect, useState } from "react";
import ChatHeader from "../chat/ChatHeader";
import MessageList from "../chat/MessageList";
import MessageInput from "../chat/MessageInput";

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

const RightsideBar = ({ conversation }: RightsideBarProps) => {
  const [messages, setMessages] = useState<Message[]>(conversation?.messages || []);

 
  useEffect(() => {
    setMessages(conversation?.messages || []);
  }, [conversation]);

  
  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "me",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
  };

  
  return (
    <div className="flex flex-col h-full border border-black rounded-sm">
      <ChatHeader conversation={conversation} />
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default RightsideBar;