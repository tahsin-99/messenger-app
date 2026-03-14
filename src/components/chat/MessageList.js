import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ScrollArea } from "@/components/ui/scroll-area";
const MessageList = ({ messages }) => {
    return (_jsx(ScrollArea, { className: "flex-1 p-4", children: _jsx("div", { className: "flex flex-col gap-3", children: messages.map((msg) => (_jsxs("div", { className: `flex flex-col ${msg.senderId === "me" ? "items-end" : "items-start"}`, children: [_jsx("div", { className: `p-2 rounded-lg max-w-xs ${msg.senderId === "me"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 dark:text-black"}`, children: msg.text }), _jsx("span", { className: "text-xs text-gray-500 mt-1", children: msg.timestamp })] }, msg.id))) }) }));
};
export default MessageList;
