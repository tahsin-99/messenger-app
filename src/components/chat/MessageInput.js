import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const MessageInput = ({ onSend, onTyping }) => {
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setMessage(e.target.value);
        if (onTyping)
            onTyping(e.target.value.length > 0);
    };
    const handleSend = () => {
        onSend(message);
        setMessage("");
    };
    return (_jsxs("div", { className: "flex gap-2 p-4 border-t", children: [_jsx(Input, { placeholder: "Type a message...", value: message, onChange: handleChange, onKeyDown: (e) => e.key === "Enter" && handleSend() }), _jsx(Button, { className: "cursor-pointer", onClick: handleSend, children: "Send" })] }));
};
export default MessageInput;
