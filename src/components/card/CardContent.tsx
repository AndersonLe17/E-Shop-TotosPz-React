import { cn } from "../../config/clsx.config";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardContent = ({ children, className }: CardProps) => {
  return <div className={cn(`my-auto flex w-full flex-col rounded-2xl bg-light px-4 py-3 shadow-totos`, className)}>{children}</div>;
};

export default CardContent;
