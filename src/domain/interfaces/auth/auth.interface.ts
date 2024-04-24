import { RoleEnum } from "../../enums/role.enum";

export interface JWTBackend {
  sub: string;
  iss: string;
  usuCod: number;
  usuPerNom: string;
  usuCorEle: string;
  usuPerf: RoleEnum;
  exp: number;
}
