import { jwtDecode } from "jwt-decode";
import { Settings, DateTime } from "luxon";
import { JWTBackend } from "../interfaces/auth/auth.interface";

export const tokenDecode = <T>(token: string): T => {
  const createDecode: T = jwtDecode(token);
  return createDecode;
};

export const expirationTokenAuth = (token: string): boolean => {
  Settings.defaultZone = "America/Lima";
  Settings.defaultLocale = "es";
  const { exp } = tokenDecode<JWTBackend>(token);
  
  return exp <= DateTime.now().toUnixInteger();
};
