import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosNoAuth } from "../../../../config/axios.config";

export type AuthData = {
  username: string;
  password: string;
};

export const authThunk = createAsyncThunk("auth/login", async (authData: AuthData, { rejectWithValue }) => {
  const res = await axiosNoAuth
    .post("/auth/login", authData)
    .then((res) => res.data)
    .catch((err) => err.response.data);
  if (res.code === 401) {
    return rejectWithValue(res.errors[0].msg);
  }
  const { token, usuCod, usuNom, usuCorEle, usuPerf, exp } = res.payload;
  return { token, usuCod, usuNom, usuCorEle, usuPerf, exp };
});
