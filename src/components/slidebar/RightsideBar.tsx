import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "../chat/ChatHeader";
import MessageList from "../chat/MessageList";
import MessageInput from "../chat/MessageInput";
import { TypingIndicator } from "../TypingIndicator";

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
    const [isTyping, setIsTyping] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(conversation?.messages || []);
  }, [conversation]);

  
   useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "me",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setIsTyping(false)
  };

    if (!conversation) return null;
  
  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-sm">
      <ChatHeader conversation={conversation} />
     <div  className="flex-1 overflow-y-auto" ref={scrollRef}>
       <MessageList  messages={messages} />
       {isTyping && <TypingIndicator></TypingIndicator>}
     </div>
      <MessageInput onSend={handleSend} onTyping={setIsTyping} />
    </div>
  );
};

export default RightsideBar;