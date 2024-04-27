import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosAuth } from "../../config/axios.config";

export type AuthData = {
  username: string;
  password: string;
};

export const authLoginThunk = createAsyncThunk("auth/login", async (authData: AuthData, { rejectWithValue }) => {
  const res = await axiosAuth
    .post("/auth/login", authData)
    .then((res) => res.data)
    .catch((err) => err.response.data);
  if (res.code === 401) {
    return rejectWithValue(res.errors[0].msg);
  }
  const { token, usuCod, usuNom, usuPerNom, usuCorEle, usuPerf, exp } = res.payload;
  return { token, usuCod, usuNom, usuPerNom, usuCorEle, usuPerf, exp };
});

export const authLogoutThunk = createAsyncThunk("auth/logout", async () => {
  axiosAuth.post("/auth/logout");
});
