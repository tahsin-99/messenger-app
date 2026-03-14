import { jsx as _jsx } from "react/jsx-runtime";
export const Loader = ({ size = 24, className = "", ...props }) => {
    return (_jsx("div", { className: `animate-spin border-2 border-t-transparent border-gray-400 rounded-full ${className}`, style: { width: size, height: size }, ...props }));
};
