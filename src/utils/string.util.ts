import { RoleEnum } from "../domain/enums/role.enum";

export const capitalizeEachWord = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const roleToText = (role: RoleEnum): string => {
  return role
    .split("_")
    .slice(1)
    .join(" ")
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
};
