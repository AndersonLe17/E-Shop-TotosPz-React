import { SelectOption } from "../domain/interfaces/input/option.interface";

export const enumToOptions = (enumObj: any): Array<SelectOption> => {
  const options = Object.keys(enumObj).map((key) => ({ value: key, label: enumObj[key] }));
  options.unshift(defaultOption);
  return options;
};

export const defaultOption: SelectOption = {
  value: "all",
  label: "Todos",
};
