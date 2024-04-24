import { IconDoorExit } from "@tabler/icons-react";
import { capitalizeEachWord, roleToText } from "../../utils/string.util";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { logoutConfirmation } from "../../redux/features/auth/auth.slice";

interface ProfileSidebarProps {}

export const ProfileSideBar = ({}: ProfileSidebarProps) => {
  const { userData } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const { usuNom, usuPerNom, usuPerf } = userData!;

  const logoutHandler = () => dispatch(logoutConfirmation());

  return (
    <div className="flex w-full flex-row items-center gap-x-2">
      <div>
        <div className="flex h-11 w-11 items-center rounded-3xl bg-black">
          <span className="mx-auto font-inter text-base text-white">{usuNom.substring(0, 2)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-x-1 truncate">
        <span className="overflow-hidden text-ellipsis font-inter text-base text-dark">{capitalizeEachWord(usuPerNom.split(" | ").join(" "))}</span>
        <span className="font-inter text-sm font-medium text-[#495057]">{roleToText(usuPerf)}</span>
      </div>
      <div className="">
        <IconDoorExit size={22} onClick={logoutHandler} className="cursor-pointer text-gray-900 hover:text-dark" />
      </div>
    </div>
  );
};
