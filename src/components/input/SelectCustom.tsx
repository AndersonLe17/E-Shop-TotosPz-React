import Select from "react-select";
import { SelectOption } from "../../domain/interfaces/select/option.interface";
import { selectStyle } from "../../domain/style/select.style";
import { defaultOption } from "../../utils/enum.util";
import { cn } from "../../config/clsx.config";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<SelectOption>;
  option?: SelectOption;
  onSelected?: (name: string, value: string) => void;
}

const SelectCustom = ({ label, name, options, option = defaultOption, onSelected, className }: SelectProps) => {
  return (
    <div className={cn("flex rounded-lg bg-white px-3 py-[6px]", className)}>
      <label className="block w-full font-inter text-[11px] font-semibold uppercase">
        {label}
        <Select
          name={name}
          onChange={(e) => onSelected && onSelected(name!, e.value)}
          options={options}
          styles={selectStyle}
          defaultValue={option}
          className="pt-1"
        />
      </label>
    </div>
  );
};

export default SelectCustom;
