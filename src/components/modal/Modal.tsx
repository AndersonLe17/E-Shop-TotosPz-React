import { cn } from "../../config/clsx.config";
import { Card } from "../card";

interface Modal extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children, className }: Modal) => {
  return (
    <div className={cn("invisible fixed inset-0 z-10 flex items-center justify-center transition-colors", { "visible bg-black/20": open })} onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()} className={cn("scale-125 opacity-0 transition-all", className, { "scale-100 opacity-100": open })}>
        {children}
      </Card>
    </div>
  );
};

export default Modal;
