import { Estado } from "../../enums/estado.enum";
import { Auditoria } from "../audit/auditoria.interface";

export interface PerfilResponse {
  perfCod: number;
  perfNom: string;
  perfDes: string;
  perfEst: Estado;
  usuMod: Auditoria;
  fecHorMod: Date;
}

export interface PerfilFilters {
  perfNom?: string;
  perfEst?: Estado;
  size?: number;
  page?: number;
  sort?: string;
  direction?: string;
}
