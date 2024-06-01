import { RoleEnum } from "../domain/enums/role.enum";

export const capitalizeEachWord = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const roleToText = (role: RoleEnum | string): string => {
  return role
    .split("_")
    .slice(1)
    .join(" ")
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

const masculineNounEndings = ["o", "e", "a", "or", "ista", "ante", "ente", "ivo", "oso", "ubre"];
const feminineNounEndings = ["a", "e", "is", "triz", "ción", "dad", "tud", "za", "na", "ia"];

export const identifyGender = (word: string): string => {
  word = word.toLowerCase();
  // verifica si la palabra termina en una de las terminaciones de sustantivos masculinos
  if (masculineNounEndings.some((ending) => word.endsWith(ending))) return "El";
  // verifica si la palabra termina en una de las terminaciones de sustantivos femeninos
  if (feminineNounEndings.some((ending) => word.endsWith(ending))) return "La";  
  return "El/La";
};
