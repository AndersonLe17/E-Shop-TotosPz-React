import { Title } from "../../components/title";

const DashboardContent = () => {
  return (
    <div className="h-screen w-full bg-[#EFF3F3]">
      <div className="shadow-title bg-light px-10 pb-6 pt-20">
        <Title title="Dashboard" icon="/src/assets/img/sections/Dashboard.svg" />
      </div>
      <div></div>
    </div>
  );
};

export default DashboardContent;
