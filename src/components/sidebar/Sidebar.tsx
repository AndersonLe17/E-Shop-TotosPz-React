import { NavItem } from "./NavItem";
import { navData } from "../../domain/data/nav.data";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { ProfileSideBar } from "./ProfileSidebar";
import { ModalLogout } from "../modal";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  const { userData, modalLogout } = useAppSelector((state: RootState) => state.auth);
  const { usuPerf } = userData!;
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(!toggle);

  return (
    <>
      <div className="flex w-[272px] flex-col rounded-e-2xl border-r border-gray-300 bg-light">
        <div className="border-b border-gray-300 p-6">
          <img src="/src/assets/img/logo.svg" alt="logo" className="mx-auto h-14" />
        </div>
        <nav className="flex h-full flex-col gap-y-2 border-b border-gray-300 bg-white p-6">
          <span className="px-3 font-inter text-[11px] font-semibold text-gray-700">CORE</span>
          {navData
            .filter((item) => item.section === "CORE")
            .map((item) => item.roles.includes(usuPerf) && <NavItem key={item.key} navData={item} role={usuPerf} />)}
          <span className="px-3 font-inter text-[11px] font-semibold text-gray-700">MAIN</span>
          {navData
            .filter((item) => item.section === "MAIN")
            .map((item) => item.roles.includes(usuPerf) && <NavItem key={item.key} navData={item} role={usuPerf} />)}
          <span className="px-3 font-inter text-[11px] font-semibold text-gray-700">ACCOUNT</span>
          {navData
            .filter((item) => item.section === "ACCOUNT")
            .map((item) => item.roles.includes(usuPerf) && <NavItem key={item.key} navData={item} role={usuPerf} />)}
          <div className="py-6">
            <button className="mx-auto flex h-11 w-11 items-center rounded-3xl bg-gray" onClick={toggleHandler}>
              {toggle ? <IconCaretRightFilled color="white" className="mx-auto" /> : <IconCaretLeftFilled color="white" className="mx-auto" />}
            </button>
          </div>
        </nav>
        <div className="px-4 py-5">
          <ProfileSideBar />
        </div>
      </div>
      {modalLogout && <ModalLogout />}
    </>
  );
};

export default Sidebar;
