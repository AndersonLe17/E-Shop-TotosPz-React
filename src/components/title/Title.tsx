import "moment/min/locales";
import Breadcrumb from "./Breadcrumb";
import Clock from "react-live-clock";

interface TitleProps {
  title: string;
  icon: string;
  item?: string;
  subItem?: string;
}

const Title = ({ title, icon, item, subItem }: TitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex items-center gap-4 font-inter text-6xl font-normal">
        <img src={icon} alt="title image" className="h-14" />
        {title}
      </h1>
      <Breadcrumb item={item} subItem={subItem} />
      <div className="flex">
        <Clock format={"dddd"} locale="es" timezone={"America/Lima"} className="font-inter text-sm font-semibold capitalize" />
        <Clock format={" · MMMM DD, YYYY · h:mm:ss A"} locale="es" ticking={true} timezone={"America/Lima"} className="font-inter text-sm capitalize" />
      </div>
    </div>
  );
};

export default Title;
