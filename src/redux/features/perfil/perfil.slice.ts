import { createSlice } from "@reduxjs/toolkit";
import { PerfilState } from "../../../domain/interfaces/perfil/perfil.state";
import { perfilPaginationThunk } from "../../thunk/perfil.thunk";

const initialState: PerfilState = {
  data: [],
  pagination: {
    totalDocs: 0,
    totalPages: 0,
    prevPage: 0,
    nextPage: 0,
    totalElements: 0,
    numberOfElements: 0,
    page: 0,
    size: 0,
    sort: "",
    hasPrevPage: false,
    hasNextPage: false,
    prevLink: "",
    nextLink: "",
  },
  filters: {
    size: 10,
    page: 0,
    sort: "fecHorMod,DESC",
    direction: "DESC",
  },
  reqFilters: {},
  isLoading: false,
  errorMsg: null,
};

export const perfilSlice = createSlice({
  name: "perfil",
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(perfilPaginationThunk.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(perfilPaginationThunk.fulfilled, (state, action) => {
      return (state = {
        ...state,
        data: action.payload.data,
        pagination: {
          totalDocs: action.payload.totalDocs,
          totalPages: action.payload.totalPages,
          prevPage: action.payload.prevPage,
          nextPage: action.payload.nextPage,
          totalElements: action.payload.totalElements,
          numberOfElements: action.payload.numberOfElements,
          page: action.payload.page,
          size: action.payload.size,
          sort: action.payload.sort,
          hasPrevPage: action.payload.hasPrevPage,
          hasNextPage: action.payload.hasNextPage,
          prevLink: action.payload.prevLink,
          nextLink: action.payload.nextLink,
        },
        filters: {
          ...state.filters,
          direction: action.payload.sort?.split(",")[1],
        },
        reqFilters: action.payload.filters,
        isLoading: false,
      });
    });
    builder.addCase(perfilPaginationThunk.rejected, (state, action) => {
      return (state = { ...state, isLoading: false, errorMsg: action.payload as string });
    });
  },
});

export const { changeFilters } = perfilSlice.actions;

export default perfilSlice.reducer;
