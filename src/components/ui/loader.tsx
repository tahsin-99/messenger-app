

import * as React from "react";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // optional size in px
  className?: string;
}

export const Loader = ({ size = 24, className = "", ...props }: LoaderProps) => {
  return (
    <div
      className={`animate-spin border-2 border-t-transparent border-gray-400 rounded-full ${className}`}
      style={{ width: size, height: size }}
      {...props}
    ></div>
  );
};