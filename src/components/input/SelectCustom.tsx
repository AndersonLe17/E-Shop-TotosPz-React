// import { IconChevronDown } from "@tabler/icons-react";
import Select from "react-select";
import { SelectOption } from "../../domain/interfaces/select/option.interface";
import { selectStyle } from "../../domain/style/select.style";
import { defaultOption } from "../../utils/enum.util";
import { cn } from "../../config/clsx.config";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<SelectOption>;
  option?: SelectOption;
}

const SelectCustom = ({ label, name, options, option = defaultOption, onSelect, className }: SelectProps) => {
  return (
    <div className={cn("flex rounded-lg bg-white px-3 py-[6px]", className)}>
      <label className="block w-full font-inter text-[11px] font-semibold uppercase">
        {label}
        <Select options={options} styles={selectStyle} defaultValue={option} className="pt-1" />
      </label>
    </div>
  );
};

export default SelectCustom;
