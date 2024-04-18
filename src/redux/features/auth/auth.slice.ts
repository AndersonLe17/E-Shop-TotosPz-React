import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { authLoginThunk } from "./thunk/auth.thunk";
import { expirationTokenAuth, tokenDecode } from "../../../utils/decode.util";
import { JWTBackend } from "../../../interfaces/auth/auth.interface";
import { getCookie } from "../../../utils/cookie.util";

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
  isExp: boolean;
};

const initialState: AuthState = {
  isAuth: getCookie("token") !== undefined ? !expirationTokenAuth(getCookie("token")!) : false,
  errorMsg: null,
  isLoading: false,
  userData:
    getCookie("token") !== undefined
      ? {
          usuCod: tokenDecode<JWTBackend>(getCookie("token")!).usuCod,
          usuNom: tokenDecode<JWTBackend>(getCookie("token")!).sub,
          usuCorEle: tokenDecode<JWTBackend>(getCookie("token")!).usuCorEle,
          usuPerf: tokenDecode<JWTBackend>(getCookie("token")!).usuCorEle,
        }
      : null,
  token: getCookie("token") !== undefined ? getCookie("token")! : null,
  isExp: getCookie("token") !== undefined ? expirationTokenAuth(getCookie("token")!) : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLoginThunk.pending, (state) => {
      return (state = { ...initialState, isLoading: true });
    });
    builder.addCase(authLoginThunk.fulfilled, (state, action) => {
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
        isExp: false,
      });
    });
    builder.addCase(authLoginThunk.rejected, (state, action) => {
      return (state = { ...initialState, errorMsg: action.payload as string });
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
