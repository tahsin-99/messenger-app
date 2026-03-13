import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  senderId: string;
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
            className={`max-w-xs p-2 rounded-lg ${
              msg.senderId === "me"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default MessageList;
