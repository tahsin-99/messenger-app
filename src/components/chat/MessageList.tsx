import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="flex flex-col gap-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.senderId === "me" ? "items-end" : "items-start"
            }`}
          >
            
            <div
              className={`p-2 rounded-lg max-w-xs ${
                msg.senderId === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:text-black"  
              }`}
            >
              {msg.text}
            </div>
            
            <span className="text-xs text-gray-500 mt-1">
              {msg.timestamp}
            </span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default MessageList;