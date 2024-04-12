import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { authThunk } from "./thunk/authThunk";

export type AuthState = {
  isAuth: boolean;
  errorMsg: string | null;
  isLoading: boolean;
  userData: {
    usuCod: number;
    usuNom: string;
    usuCorEle: string;
    usuPerf: string;
  } | null;
  token: string | null;
  exp: number | null;
};

const initialState: AuthState = {
  isAuth: false,
  errorMsg: null,
  isLoading: false,
  userData: null,
  token: null,
  exp: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authThunk.pending, (state) => {
      return (state = { ...initialState, isLoading: true });
    });
    builder.addCase(authThunk.fulfilled, (state, action) => {
      return (state = {
        ...initialState,
        isLoading: false,
        isAuth: true,
        userData: {
          usuCod: action.payload.usuCod,
          usuNom: action.payload.usuNom,
          usuCorEle: action.payload.usuCorEle,
          usuPerf: action.payload.usuPerf.perfNom,
        },
        token: action.payload.token,
        exp: action.payload.exp,
      });
    });
    builder.addCase(authThunk.rejected, (state, action) => {
      return (state = { ...initialState, errorMsg: action.payload as string });
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
