import { createAsyncThunk } from "@reduxjs/toolkit";
import { PerfilFilters } from "../../domain/interfaces/perfil/perfil.interface";
import { axiosAuth } from "../../config/axios.config";
import { filterToQuery } from "../../utils/query.util";

export const perfilPaginationThunk = createAsyncThunk("perfil/pagination", async (filters: PerfilFilters, { rejectWithValue }) => {
  const res = await axiosAuth
    .get(`api/perfil/pagination?${filterToQuery(filters)}`)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  if (res.code === 401) {
    return rejectWithValue(res.errors[0].msg);
  }
  const { data, totalDocs, totalPages, prevPage, nextPage, totalElements, numberOfElements, page, size, hasPrevPage, hasNextPage, prevLink, nextLink, sort } =
    res;
  return {
    data,
    totalDocs,
    totalPages,
    prevPage,
    nextPage,
    totalElements,
    numberOfElements,
    page,
    size,
    hasPrevPage,
    hasNextPage,
    prevLink,
    nextLink,
    sort,
    filters,
  };
});
