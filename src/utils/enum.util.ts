import { SelectOption } from "../domain/interfaces/select/option.interface";

export const enumToOptions = (enumObj: any): Array<SelectOption> => {
  const options = Object.keys(enumObj).map((key) => ({ value: key, label: enumObj[key] }));
  options.unshift({ value: "0", label: "Todos" });
  return options;
};

export const defaultOption: SelectOption = {
  value: "0",
  label: "Todos",
};