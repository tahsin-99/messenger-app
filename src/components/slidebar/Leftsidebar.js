import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { conversations } from "../data/mockData";
export const Sidebar = ({ onSelectConversation, activeId }) => {
    const [search, setSearch] = useState("");
    const filteredConversations = conversations.filter((conv) => conv.user.name.toLowerCase().includes(search.toLowerCase()));
    return (_jsxs("div", { className: "w-80 border-r border-gray-200 flex flex-col h-screen", children: [_jsx("div", { className: "p-4 font-semibold text-2xl", children: "Chats" }), _jsx("div", { className: "p-2", children: _jsx("input", { type: "text", placeholder: "Search...", onChange: (e) => setSearch(e.target.value), className: "w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" }) }), _jsx(ScrollArea, { className: "flex-1", children: _jsx("div", { className: "flex flex-col ", children: filteredConversations.map((conv) => (_jsxs(Button, { variant: conv.id === activeId ? "default" : "ghost", className: "flex items-center my-4 gap-3 w-full justify-start p-2 h-full", onClick: () => onSelectConversation(conv.id), children: [_jsx(Avatar, { children: _jsx(AvatarImage, { src: conv.user.avatar, alt: conv.user.name }) }), _jsxs("div", { className: "flex flex-col text-left", children: [_jsx("span", { className: "font-medium", children: conv.user.name }), _jsx("span", { className: "text-sm text-gray-500", children: conv.messages[conv.messages.length - 1].text })] }), _jsx("p", { className: "ml-2", children: conv.messages[conv.messages.length - 1].timestamp })] }, conv.id))) }) })] }));
};
