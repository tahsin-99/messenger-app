import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface MessageInputProps {
  onSend: (text: string) => void;
}
const MessageInput = ({onSend}:MessageInputProps) => {
  const [message, setMessage] = useState("")

  const handleSend = () => {
   
    onSend(message)
    setMessage("")
  }

  return (
    <div className="flex gap-2 p-4 border-t">
      <Input
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <Button  className="cursor-pointer" onClick={handleSend}>Send</Button>
    </div>
  )
}

export default MessageInput