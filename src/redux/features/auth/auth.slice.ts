import { createSlice } from "@reduxjs/toolkit";
import { authLoginThunk, authLogoutThunk } from "../../thunk/auth.thunk";
import { expirationTokenAuth, tokenDecode } from "../../../utils/decode.util";
import { JWTBackend } from "../../../domain/interfaces/auth/auth.interface";
import { getCookie } from "../../../utils/cookie.util";
import { AuthState } from "../../../domain/interfaces/auth/auth.state";

const initialState: AuthState = {
  isAuth: getCookie("token") !== undefined ? !expirationTokenAuth(getCookie("token")!) : false,
  errorMsg: null,
  isLoading: false,
  userData:
    getCookie("token") !== undefined
      ? {
          usuCod: tokenDecode<JWTBackend>(getCookie("token")!).usuCod,
          usuPerNom: tokenDecode<JWTBackend>(getCookie("token")!).usuPerNom,
          usuNom: tokenDecode<JWTBackend>(getCookie("token")!).sub,
          usuCorEle: tokenDecode<JWTBackend>(getCookie("token")!).usuCorEle,
          usuPerf: tokenDecode<JWTBackend>(getCookie("token")!).usuPerf,
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
          usuPerNom: action.payload.usuPerNom,
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
    builder.addCase(authLogoutThunk.pending, (state) => {
      return (state = { ...initialState, isAuth: false, userData: null, token: null, isExp: true, isLoading: true });
    });
    builder.addCase(authLogoutThunk.fulfilled, (state) => {
      return (state = { ...initialState, isLoading: false });
    });
  },
});

export default authSlice.reducer;
