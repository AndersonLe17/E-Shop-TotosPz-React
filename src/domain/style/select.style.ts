import { GroupBase, StylesConfig } from "react-select";

export const selectStyle: StylesConfig<any, false, GroupBase<any>> | undefined = {
  control: (styles) => ({ ...styles, borderWidth: "0px", fontSize: "1rem", minHeight: "fit-content", boxShadow: "none" }),
  valueContainer: (styles) => ({ ...styles, padding: "0px", fontWeight: "400", color: "#212529", textTransform: "none" }),
  placeholder: (styles) => ({ ...styles, fontWeight: "400", color: "#A0AEC0" }),
  input: (styles) => ({ ...styles, margin: "0px", padding: "0px", height: "fit-content", width: "100%" }),
  singleValue: (styles) => ({ ...styles, fontWeight: "400", color: "#212529" }),
  indicatorsContainer: (styles) => ({ ...styles, height: "fit-content" }),
  dropdownIndicator: (styles) => ({ ...styles, padding: "0px" }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  menu: (styles) => ({ ...styles, boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 4px 0px rgba(9, 8, 66, 0.08)", borderRadius: "8px" }),
  menuList: (styles) => ({
    ...styles,
    padding: "4px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    textTransform: "none",
    gap: "4px",
    display: "flex",
    flexDirection: "column",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    padding: "8px 12px",
    fontFamily: "Inter, sans-serif",
    color: "#4F5F5F",
    borderRadius: "8px",
    backgroundColor: isSelected ? "#EFF3F3" : isFocused ? "#EFF3F3" : "#fff",
  }),
};
