import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { conversations } from "../data/mockdata";


interface SidebarProps {
  onSelectConversation: (id: string) => void;
  activeId: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSelectConversation, activeId }) => {
  return (
    <div className="w-80 border-r border-gray-200 flex flex-col h-screen">
      
      <div className="p-4 font-semibold text-2xl">Chats</div>

      
      <div className="p-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <ScrollArea className="flex-1">
        <div className="flex flex-col ">
          {conversations.map((conv) => (
            <Button
              key={conv.id}
              variant={conv.id === activeId ? "default" : "ghost"}
              className="flex items-center my-4 gap-3 w-full justify-start p-2 h-full"
              onClick={() => onSelectConversation(conv.id)}
            >
              <Avatar>
                <AvatarImage src={conv.user.avatar} alt={conv.user.name} />
              </Avatar>
              <div className="flex flex-col text-left">
                <span className="font-medium">{conv.user.name}</span>
                <span className="text-sm text-gray-500">
                  {conv.messages[conv.messages.length - 1].text}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};