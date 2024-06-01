import { RoleEnum } from "../../enums/role.enum";

export interface AuthState {
  isAuth: boolean;
  errorMsg: string | null;
  isLoading: boolean;
  userData: {
    usuCod: number;
    usuPerNom: string;
    usuNom: string;
    usuCorEle: string;
    usuPerf: RoleEnum;
  } | null;
  token: string | null;
  isExp: boolean;
}
