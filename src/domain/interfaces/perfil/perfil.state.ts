import { Pagination } from "../pagination/pagination.interface";
import { PerfilFilters, PerfilResponse } from "./perfil.interface";

export interface PerfilState {
  data: Array<PerfilResponse>;
  pagination: Pagination;
  filters: PerfilFilters;
  reqFilters: PerfilFilters;
  isLoading: boolean;
  errorMsg: string | null;
}
