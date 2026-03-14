import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Info, Phone, Video } from "lucide-react"

const ChatHeader = ({conversation}) => {

  
  return (
    <>
    <div className="flex items-center justify-between gap-3 p-4 border-b">
      <div className="flex items-center gap-3">

      
      <Avatar>
        <AvatarImage src={conversation.user.avatar} />
      </Avatar>

      <div>
        <p className="font-semibold">{conversation.user.name}</p>
        <p className={`text-sm ${conversation.user.online ? "text-green-500" : "text-red-500"}`}>{conversation.user.online ? "Online" : "Offline"}</p>
      </div>
    </div>
       <div className="flex gap-4">
        <Phone className="w-5 h-5 cursor-pointer hover:text-blue-500 " 
        onClick={() => alert("Ongoing audio call....")}/>
        <Video className="w-5 h-5 cursor-pointer hover:text-blue-500" 
        onClick={() => alert("Ongoing video call....")}/>
        <Info className="w-5 h-5 cursor-pointer hover:text-blue-500"
        onClick={() => alert("Details clicked")}/>
      </div>
      </div>
    </>
    
    
    
  )
}

export default ChatHeader