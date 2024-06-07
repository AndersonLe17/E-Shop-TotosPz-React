import { Pagination } from "../pagination/pagination.interface";
import { Perfil, PerfilFilters, PerfilResponse } from "./perfil.interface";

export interface PerfilState {
  data: Array<PerfilResponse>;
  pagination: Pagination;
  perfData: Perfil;
  filters: PerfilFilters;
  reqFilters: PerfilFilters;
  isLoading: boolean;
  errors: Array<{ error: string; msg: string }> | null;
}
