import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Info, Phone, Video } from "lucide-react";
const ChatHeader = ({ conversation }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center justify-between gap-3 p-4 border-b", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Avatar, { children: _jsx(AvatarImage, { src: conversation.user.avatar }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: conversation.user.name }), _jsx("p", { className: `text-sm ${conversation.user.online ? "text-green-500" : "text-red-500"}`, children: conversation.user.online ? "Online" : "Offline" })] })] }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Phone, { className: "w-5 h-5 cursor-pointer hover:text-blue-500 ", onClick: () => alert("Ongoing audio call....") }), _jsx(Video, { className: "w-5 h-5 cursor-pointer hover:text-blue-500", onClick: () => alert("Ongoing video call....") }), _jsx(Info, { className: "w-5 h-5 cursor-pointer hover:text-blue-500", onClick: () => alert("Details clicked") })] })] }) }));
};
export default ChatHeader;
