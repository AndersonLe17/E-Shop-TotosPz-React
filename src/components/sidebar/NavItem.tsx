import React, { useState } from "react";
import { NavItem as NavItemData } from "../../domain/interfaces/nav/nav.interface";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../config/clsx.config";
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react";
import { RoleEnum } from "../../domain/enums/role.enum";
import { NavSubItem } from "./NavSubItem";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  navData: NavItemData;
  role: RoleEnum;
}

export const NavItem = ({ navData, role }: NavItemProps) => {
  const { title, path, Icon, subNav } = navData;

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(subNav && pathname.includes(path));

  const renderIcon = () => React.cloneElement(<Icon size={20} />);

  const clickItemHandler = async () => (subNav ? setActive(!active) : navigate(path));

  return (
    <>
      <div
        className={cn("flex w-full cursor-pointer gap-x-3 rounded-lg px-3 py-2 transition ease-in hover:bg-gray-200", {
          "bg-gray-200": pathname.includes(path),
        })}
        onClick={clickItemHandler}
      >
        <div className="self-center text-gray-900">{renderIcon()}</div>
        <span className="w-full font-inter text-base font-medium text-gray-900">{title}</span>
        {subNav && (active ? <IconCaretUpFilled className="text-gray-900" size={20} /> : <IconCaretDownFilled className="text-gray-900" size={20} />)}
      </div>
      {subNav && (
        <div className={cn("flex flex-row ps-3", { hidden: !active })}>
          <div className="h-full w-6">
            <div className="mx-auto h-full w-[1px] bg-gray-900"></div>
          </div>
          <div className="flex w-full flex-col gap-y-1">
            {subNav.map((sub) => sub.roles.includes(role) && <NavSubItem key={sub.subKey} subData={sub} basePath={path} />)}
          </div>
        </div>
      )}
    </>
  );
};
