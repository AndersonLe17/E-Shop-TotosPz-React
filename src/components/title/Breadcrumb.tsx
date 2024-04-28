import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../config/clsx.config";

interface BreadcrumbProps {
  item?: string;
  subItem?: string;
}

const Breadcrumb = ({ item, subItem }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const clickHandler = () => navigate("/dashboard");

  return (
    <div className="flex items-center gap-1">
      <div className={cn("flex items-center gap-1", { "hover:drop-shadow-md": item })}>
        <img src="src/assets/img/sections/Dashboard.svg" alt="base" className="size-3" />
        <span className={cn("cursor-default font-inter text-sm text-dark", { "text-gray": !item }, { "cursor-pointer": item })} onClick={clickHandler}>
          Dashboard
        </span>
      </div>
      {item && (
        <>
          <IconChevronRight className="size-3 text-gray-900" />
          <div className={cn("flex items-center", { "hover:drop-shadow-md": subItem })}>
            <span className={cn("cursor-default font-inter text-sm text-dark", { "text-gray": !subItem }, { "cursor-pointer": subItem })}>{item}</span>
          </div>
          {subItem && (
            <>
              <IconChevronRight className="size-3 text-gray-900" />
              <div className="flex items-center">
                <span className="cursor-default font-inter text-sm text-gray">{subItem}</span>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
