import { Pagination } from "../pagination/pagination.interface";
import { PerfilFilters, PerfilResponse } from "./perfil.interface";

export interface PerfilState {
  data: Array<PerfilResponse>;
  pagination: Pagination;
  filters: PerfilFilters;
  reqFilters: PerfilFilters;
  isLoading: boolean;
  errors: Array<{ error: string; msg: string }> | null;
}
