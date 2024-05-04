import { createSlice } from "@reduxjs/toolkit";
import { PerfilState } from "../../../domain/interfaces/perfil/perfil.state";
import { perfilPaginationThunk } from "../../thunk/perfil.thunk";

const initialState: PerfilState = {
  data: [],
  pagination: null,
  filters: {},
  isLoading: false,
  errorMsg: null,
};

export const perfilSlice = createSlice({
  name: "perfil",
  initialState,
  reducers: {},
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
          page: action.payload.page,
          hasPrevPage: action.payload.hasPrevPage,
          hasNextPage: action.payload.hasNextPage,
          prevLink: action.payload.prevLink,
          nextLink: action.payload.nextLink,
        },
        isLoading: false,
      });
    });
    builder.addCase(perfilPaginationThunk.rejected, (state, action) => {
      return (state = { ...state, isLoading: false, errorMsg: action.payload as string });
    });
  },
});

export const {} = perfilSlice.actions;

export default perfilSlice.reducer;
