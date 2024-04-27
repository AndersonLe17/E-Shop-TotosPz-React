import { createSlice } from "@reduxjs/toolkit";
import { SidebarState } from "../../../domain/interfaces/sidebar/sidebar.state";

const initialState: SidebarState = {
  isToggle: false,
  isActiveSubNav: false,
  activeNav: null,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isToggle = !state.isToggle;
    },
    activateSubNav: (state, action) => {
      state.isActiveSubNav = true;
      state.activeNav = action.payload;
    },
    deactivateSubNav: (state) => {
      state.isActiveSubNav = false;
      state.activeNav = null;
    }
  },
});

export const { toggleSidebar, activateSubNav, deactivateSubNav } = sidebarSlice.actions;

export default sidebarSlice.reducer;
