import { Icon, IconProps } from "@tabler/icons-react";
import { cn } from "../../config/clsx.config";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface OptionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  itemHandler?: (e: React.MouseEvent<HTMLDivElement>) => void;
  title: string;
  Icon?: ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
  // data: string | number;
}

const OptionItem = ({ itemHandler, title, Icon, className, ...props }: OptionItemProps) => {
  return (
    <div
      {...props}
      className={cn("flex w-full cursor-pointer gap-x-3 rounded-lg px-3 py-2 text-gray-900 transition ease-in hover:bg-gray-200", className)}
      onClick={itemHandler}
    >
      {Icon && <div className="self-center">{<Icon size={20} />}</div>}
      <span className="w-full font-inter font-medium transition-all duration-700 ease-in-out">{title}</span>
    </div>
  );
};

export default OptionItem;
