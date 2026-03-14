import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "../chat/ChatHeader";
import MessageList from "../chat/MessageList";
import MessageInput from "../chat/MessageInput";
import { TypingIndicator } from "../TypingIndicator";
const RightsideBar = ({ conversation }) => {
    const [messages, setMessages] = useState(conversation?.messages || []);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);
    useEffect(() => {
        setMessages(conversation?.messages || []);
    }, [conversation]);
    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages]);
    const handleSend = (text) => {
        if (!text.trim())
            return;
        const newMessage = {
            id: Date.now().toString(),
            senderId: "me",
            text,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages([...messages, newMessage]);
        setIsTyping(false);
    };
    if (!conversation)
        return null;
    return (_jsxs("div", { className: "flex flex-col h-full border border-gray-200 rounded-sm", children: [_jsx(ChatHeader, { conversation: conversation }), _jsxs("div", { className: "flex-1 overflow-y-auto", ref: scrollRef, children: [_jsx(MessageList, { messages: messages }), isTyping && _jsx(TypingIndicator, {})] }), _jsx(MessageInput, { onSend: handleSend, onTyping: setIsTyping })] }));
};
export default RightsideBar;
