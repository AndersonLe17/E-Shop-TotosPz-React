import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import twMerge from "./merge.config";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
