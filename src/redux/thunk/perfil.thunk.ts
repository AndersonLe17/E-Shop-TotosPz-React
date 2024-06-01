import { createAsyncThunk } from "@reduxjs/toolkit";
import { Perfil, PerfilFilters } from "../../domain/interfaces/perfil/perfil.interface";
import { axiosAuth } from "../../config/axios.config";
import { filterToQuery } from "../../utils/query.util";
import { toastNotify } from "../../config/toast.config";
import { ToastTypeEnum } from "../../domain/enums/toast.enum";

export const perfilPaginationThunk = createAsyncThunk("perfil/pagination", async (filters: PerfilFilters, { rejectWithValue }) => {
  const res = await axiosAuth
    .get(`api/perfil/pagination?${filterToQuery(filters)}`)
    .then((res) => res.data.payload)
    .catch((err) => err.response.data);

  if (res.code === 401) {
    return rejectWithValue(res.errors);
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

export const perfilCreateThunk = createAsyncThunk("perfil/create", async (perfil: Perfil, { rejectWithValue }) => {
  const res = await axiosAuth
    .post("api/perfil/", perfil)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  if (res.code !== 201) {
    toastNotify(ToastTypeEnum.ALERT, res.errors[0].error);
    return rejectWithValue(res.errors);
  }
  
  toastNotify(ToastTypeEnum.CREATED);
  return res.payload.message;
});
