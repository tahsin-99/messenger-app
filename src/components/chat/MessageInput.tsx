import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


import { useState } from "react";

interface MessageInputProps {
  onSend: (text: string) => void;
   onTyping?: (typing: boolean) => void; 
}
const MessageInput = ({onSend,onTyping}:MessageInputProps) => {
  const [message, setMessage] = useState("")

  

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (onTyping) onTyping(e.target.value.length > 0); 
  };
  
  
  
  const handleSend = () => {
   
    onSend(message)
    setMessage("")
    
  }

  return (
    <div className="flex gap-2 p-4 border-t">
      <Input
        placeholder="Type a message..."
        value={message}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />



      <Button  className="cursor-pointer" onClick={handleSend}>Send</Button>
    </div>
  )
}

export default MessageInput