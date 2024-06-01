import { cn } from "../../config/clsx.config";

interface InputPlaceholder extends React.HTMLAttributes<HTMLDivElement> {}

const InputPlaceholder = ({ className }: InputPlaceholder) => {
  return <div className={cn("h-14 animate-pulse rounded bg-gray-300", className)}></div>;
};

export default InputPlaceholder;
