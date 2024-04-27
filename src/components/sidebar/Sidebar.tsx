import { NavItem } from "./NavItem";
import { navData } from "../../domain/data/nav.data";
import { IconCaretLeftFilled, IconCaretRightFilled, IconDirectionHorizontal } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { ProfileSideBar } from "./ProfileSidebar";
import { ModalLogout } from "../modal";
import { cn } from "../../config/clsx.config";
import { toggleSidebar } from "../../redux/features/sidebar/sidebar.slice";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const { userData, modalLogout } = useAppSelector((state: RootState) => state.auth);
  const { isToggle } = useAppSelector((state: RootState) => state.sidebar);
  const dispatch = useAppDispatch();
  const { usuPerf } = userData!;

  const toggleHandler = () => dispatch(toggleSidebar());

  return (
    <>
      <div
        className={cn("flex w-[272px] flex-col rounded-e-2xl border-r border-gray-300 bg-light transition-all duration-700 ease-in-out", {
          "w-[104px]": isToggle,
        })}
      >
        <div className="border-b border-gray-300 p-6">
          <img src={!isToggle ? "/src/assets/img/logo.svg" : "/src/assets/img/logo-alter.svg"} alt="logo" className="mx-auto h-14" />
        </div>
        <nav className={cn("flex h-full flex-col gap-y-2 border-b border-gray-300 bg-white p-6", { "px-0 py-6": isToggle })}>
          <div className="relative">
            <button className={cn("absolute -right-[37px] -top-[37.5px] rounded-md border border-gray-300 bg-white", { "-right-[13px]": isToggle })}>
              {/* // TODO: Por definir si se agregara el evento de ocultar el Sidebar */}
              <IconDirectionHorizontal />
            </button>
          </div>
          <span className={cn("px-3 font-inter text-[11px] font-semibold text-gray-700", { "text-center": isToggle })}>CORE</span>
          {navData
            .filter((item) => item.section === "CORE")
            .map((item) => item.roles.includes(usuPerf) && <NavItem key={item.key} navData={item} role={usuPerf} toggle={isToggle} />)}
          <span className={cn("px-3 font-inter text-[11px] font-semibold text-gray-700", { "text-center": isToggle })}>MAIN</span>
          {navData
            .filter((item) => item.section === "MAIN")
            .map((item) => item.roles.includes(usuPerf) && <NavItem key={item.key} navData={item} role={usuPerf} toggle={isToggle} />)}
          <span className={cn("px-3 font-inter text-[11px] font-semibold text-gray-700", { "text-center": isToggle })}>ACCOUNT</span>
          {navData
            .filter((item) => item.section === "ACCOUNT")
            .map((item) => item.roles.includes(usuPerf) && <NavItem key={item.key} navData={item} role={usuPerf} toggle={isToggle} />)}
          <div className="py-6">
            <button className="mx-auto flex h-11 w-11 items-center rounded-3xl bg-gray" onClick={toggleHandler}>
              {isToggle ? <IconCaretRightFilled color="white" className="mx-auto" /> : <IconCaretLeftFilled color="white" className="mx-auto" />}
            </button>
          </div>
        </nav>
        <div className="px-4 py-5">
          <ProfileSideBar toggle={isToggle} />
        </div>
      </div>
      {modalLogout && <ModalLogout />}
    </>
  );
};

export default Sidebar;
