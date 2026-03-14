import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader } from "@/components/ui/loader";
export const TypingIndicator = () => {
    return (_jsxs("div", { className: "flex items-center gap-2 p-2", children: [_jsx(Loader, { className: "h-4 w-4 animate-pulse" }), _jsx("span", { className: "text-sm text-gray-500", children: "Typing..." })] }));
};
