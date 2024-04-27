import { IconDoorExit } from "@tabler/icons-react";
import { capitalizeEachWord, roleToText } from "../../utils/string.util";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { logoutConfirmation } from "../../redux/features/auth/auth.slice";
import { cn } from "../../config/clsx.config";
import { useState } from "react";

interface ProfileSidebarProps {
  toggle: boolean;
}

export const ProfileSideBar = ({ toggle }: ProfileSidebarProps) => {
  const { userData } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const { usuNom, usuPerNom, usuPerf } = userData!;

  const handleLogout = () => dispatch(logoutConfirmation());
  const handleMouseOver = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <div className={cn("")} onMouseEnter={handleMouseOver}>
      <div className="flex w-full flex-row items-center gap-x-2">
        <div className="mx-auto">
          <div className="flex h-11 w-11 items-center rounded-3xl bg-black">
            <span className="mx-auto font-inter text-base text-white">{usuNom.substring(0, 2)}</span>
          </div>
        </div>
        <div className={cn("flex flex-col gap-x-1 truncate", { hidden: toggle })}>
          <span className="overflow-hidden text-ellipsis font-inter text-base text-dark">{capitalizeEachWord(usuPerNom.split(" | ").join(" "))}</span>
          <span className="font-inter text-sm font-medium text-[#495057]">{roleToText(usuPerf)}</span>
        </div>
        <div className={cn({ hidden: toggle })}>
          <IconDoorExit size={22} onClick={handleLogout} className="cursor-pointer text-gray-900 hover:text-dark" />
        </div>
      </div>
      {toggle && (
        <div className={cn("animate-growin relative", { hidden: !active })} onMouseLeave={handleMouseLeave}>
          <div className="absolute -bottom-1 left-20 w-72 rounded-lg bg-white p-2 shadow-totos">
            <div className="flex flex-row items-center gap-x-2">
              <div className="mx-auto">
                <div className="flex h-11 w-11 items-center rounded-3xl bg-black">
                  <span className="mx-auto font-inter text-base text-white">{usuNom.substring(0, 2)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-x-1 truncate">
                <span className="overflow-hidden text-ellipsis font-inter text-base text-dark">{capitalizeEachWord(usuPerNom.split(" | ").join(" "))}</span>
                <span className="font-inter text-sm font-medium text-[#495057]">{roleToText(usuPerf)}</span>
              </div>
              <div>
                <IconDoorExit size={22} onClick={handleLogout} className="cursor-pointer text-gray-900 hover:text-dark" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
