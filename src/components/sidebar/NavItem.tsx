import React from "react";
import { NavItem as NavItemData } from "../../domain/interfaces/sidebar/nav/nav.interface";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../config/clsx.config";
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import { RoleEnum } from "../../domain/enums/role.enum";
import { NavSubItem } from "./NavSubItem";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { activateSubNav, deactivateSubNav } from "../../redux/features/sidebar/sidebar.slice";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  navData: NavItemData;
  role: RoleEnum;
  toggle: boolean;
}

export const NavItem = ({ navData, role, toggle }: NavItemProps) => {
  const { isActiveSubNav, activeNav } = useAppSelector((state: RootState) => state.sidebar);
  const { title, path, Icon, subNav } = navData;
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickItemHandler = async () => {
    if (subNav) {
      if (isActiveSubNav && path === activeNav) dispatch(deactivateSubNav());
      else dispatch(activateSubNav(path));
    } else {
      if (isActiveSubNav && path !== activeNav && pathname !== path) dispatch(deactivateSubNav());
      if (pathname !== path) navigate(path);
    }
  };

  const renderIcon = () => React.cloneElement(<Icon size={20} />);
  return (
    <div className="flex flex-col">
      <div
        className={cn("flex w-full cursor-pointer gap-x-3 rounded-lg bg-white px-3 py-2 transition ease-in hover:bg-gray-200", {
          "bg-gray-200": pathname.includes(path),
          "mx-auto w-20 flex-col gap-y-1": toggle,
        })}
        onClick={clickItemHandler}
      >
        <div className="self-center text-gray-900">{renderIcon()}</div>
        <span
          className={cn("w-full font-inter text-base font-medium text-gray-900 transition-all duration-700 ease-in-out", { "text-center text-xs": toggle })}
        >
          {title}
        </span>
        {subNav &&
          !toggle &&
          (path === activeNav ? <IconCaretUpFilled className="text-gray-900" size={20} /> : <IconCaretDownFilled className="text-gray-900" size={20} />)}
      </div>
      {subNav && (
        <div className={cn("pt-1", { "animate-slice": !toggle, hidden: path !== activeNav, "relative animate-growin pt-0": toggle })}>
          <div
            className={cn("flex flex-row ps-3", {
              "absolute -bottom-7 left-24 w-36 rounded-lg bg-white p-2 shadow-totos": toggle,
            })}
          >
            <div className={cn("w-6 self-stretch", { hidden: toggle })}>
              <div className="mx-auto h-full w-[1px] bg-gray-900"></div>
            </div>
            <div className="flex w-full flex-col gap-y-1">
              {subNav.map((sub) => sub.roles.includes(role) && <NavSubItem key={sub.subKey} subData={sub} basePath={path} />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
