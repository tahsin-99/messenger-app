import { Avatar, AvatarImage } from "@/components/ui/avatar"

const ChatHeader = ({conversation}) => {
  return (
    <div className="flex items-center gap-3 p-4 border-b">
      <Avatar>
        <AvatarImage src={conversation.user.avatar} />
      </Avatar>

      <div>
        <p className="font-semibold">{conversation.user.name}</p>
        <p className={`text-sm ${conversation.user.online ? "text-green-500" : "text-red-500"}`}>{conversation.user.online ? "Online" : "Offline"}</p>
      </div>
    </div>
  )
}

export default ChatHeader