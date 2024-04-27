import { useLocation, useNavigate } from "react-router-dom";
import { SubNavItem } from "../../domain/interfaces/sidebar/nav/nav.interface";
import { cn } from "../../config/clsx.config";

interface SubItemProps extends React.HTMLAttributes<HTMLDivElement> {
  subData: SubNavItem;
  basePath: string;
}

export const NavSubItem = ({ subData, basePath }: SubItemProps) => {
  const { title, path } = subData;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const clickItemHandler = async () => {
    navigate(basePath + path)
  };

  return (
    <div
      className={cn("w-full cursor-pointer rounded-lg px-3 py-1 transition ease-in hover:bg-gray-200", { "bg-gray-200": pathname === basePath + path })}
      onClick={clickItemHandler}
    >
      <span className="font-inter text-sm font-medium text-gray-900">{title}</span>
    </div>
  );
};
