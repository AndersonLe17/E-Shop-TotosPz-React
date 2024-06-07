import { createSlice } from "@reduxjs/toolkit";
import { PerfilState } from "../../../domain/interfaces/perfil/perfil.state";
import { perfilChangeStatusThunk, perfilCreateThunk, perfilFindByCodThunk, perfilPaginationThunk, perfilUpdateThunk } from "../../thunk/perfil.thunk";
import { roleToText } from "../../../utils/string.util";

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
  perfData: {
    perfCod: undefined,
    perfNom: "",
    perfDes: "",
    perfDet: "",
  },
  filters: {
    size: 10,
    page: 0,
    sort: "fecHorMod,DESC",
    direction: "DESC",
  },
  reqFilters: {},
  isLoading: false,
  errors: null,
};

export const perfilSlice = createSlice({
  name: "perfil",
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      state.filters = action.payload;
    },
    changeInitPerfData: (state) => {
      state.perfData = { perfCod: undefined, perfNom: "", perfDes: "", perfDet: "" };
    },
  },
  extraReducers: (builder) => {
    // Pagination Reducers
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
      return (state = { ...state, isLoading: false, errors: action.payload as Array<{ error: string; msg: string }> });
    });
    // Create Reducers
    builder.addCase(perfilCreateThunk.pending, (state) => {
      return (state = { ...state, errors: null });
    });
    builder.addCase(perfilCreateThunk.fulfilled, (state, _action) => {
      return (state = { ...state, errors: null });
    });
    builder.addCase(perfilCreateThunk.rejected, (state, action) => {
      return (state = { ...state, errors: action.payload as Array<{ error: string; msg: string }> });
    });
    // Find By Cod Reducers
    builder.addCase(perfilFindByCodThunk.pending, (state) => {
      return (state = { ...state, isLoading: true });
    });
    builder.addCase(perfilFindByCodThunk.fulfilled, (state, action) => {
      return (state = { ...state, perfData: { ...action.payload, perfNom: roleToText(action.payload.perfNom) }, isLoading: false });
    });
    builder.addCase(perfilFindByCodThunk.rejected, (state, action) => {
      return (state = { ...state, isLoading: false, errors: action.payload as Array<{ error: string; msg: string }> });
    });
    // Update Reducers
    builder.addCase(perfilUpdateThunk.pending, (state) => {
      return (state = { ...state, errors: null });
    });
    builder.addCase(perfilUpdateThunk.fulfilled, (state, _action) => {
      return (state = { ...state, errors: null });
    });
    builder.addCase(perfilUpdateThunk.rejected, (state, action) => {
      return (state = { ...state, errors: action.payload as Array<{ error: string; msg: string }> });
    });
    // Change Status Reducers
    builder.addCase(perfilChangeStatusThunk.pending, (state) => {
      return (state = { ...state, errors: null });
    });
    builder.addCase(perfilChangeStatusThunk.fulfilled, (state, _action) => {
      return (state = { ...state, errors: null });
    });
    builder.addCase(perfilChangeStatusThunk.rejected, (state, action) => {
      return (state = { ...state, errors: action.payload as Array<{ error: string; msg: string }> });
    });
    
  },
});

export const { changeFilters, changeInitPerfData } = perfilSlice.actions;

export default perfilSlice.reducer;
