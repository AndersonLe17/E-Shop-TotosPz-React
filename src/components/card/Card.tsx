import { forwardRef } from "react";
import { cn } from "../../config/clsx.config";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...props }: CardProps, ref) => {
  return (
    <div {...props} ref={ref} className={cn(`my-auto flex w-full flex-col rounded-2xl bg-light px-6 py-8 shadow-totos`, className)}>
      {children}
    </div>
  );
});

export default Card;
