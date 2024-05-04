import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import sidebarReducer from "./features/sidebar/sidebar.slice";
import perfilReducer from "./features/perfil/perfil.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    perfil: perfilReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
