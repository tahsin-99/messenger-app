import { Loader } from "@/components/ui/loader"; 

export const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2 p-2">
      <Loader className="h-4 w-4 animate-pulse" />
      <span className="text-sm text-gray-500">Typing...</span>
    </div>
  );
};