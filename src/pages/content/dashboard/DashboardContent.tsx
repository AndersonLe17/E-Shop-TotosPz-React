import { Title } from "../../../components/title";
import { cn } from "../../../config/clsx.config";
import { useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";

const DashboardContent = () => {
  const { isToggle } = useAppSelector((state: RootState) => state.sidebar);

  return (
    <div className={cn("w-full bg-[#EFF3F3] ps-[272px] transition-all duration-700 ease-in-out", { "ps-[104px]": isToggle })}>
      <div className="bg-light px-10 pb-6 pt-20 shadow-title">
        <Title title="Dashboard" icon="/src/assets/img/sections/Dashboard.svg" />
      </div>
      <div></div>
    </div>
  );
};

export default DashboardContent;
