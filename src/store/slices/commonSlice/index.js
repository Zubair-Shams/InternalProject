// src/features/user/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initState = {
  isToggle: false,
  theme: 'dark',
  isDrawer: false,
  editData: null,
  customerList: [],
  isNoticePopupConfirmed: false,
  clearTableSelectedRows: false,
  provincesList: [
    {
      label: 'Khyber Pakhtunkhwa',
      value: '1',
    },
    {
      label: 'Punjab',
      value: '2',
    },
    {
      label: 'Sindh',
      value: '3',
    },
    {
      label: 'Balochistan',
      value: '4',
    },
    {
      label: 'Islamabad Capital Territory (ICT)',
      value: '5',
    },
    {
      label: 'Gilgit-Baltistan',
      value: '6',
    },
    {
      label: 'Azad Jammu & Kashmir (AJK)',
      value: '7',
    },
  ],
};
export const commonSlice = createSlice({
  name: 'commonState',
  initialState: initState,
  reducers: {
    togglesidebar: state => {
      state.isToggle = !state.isToggle;
    },
    toggleDrawer: state => {
      state.isDrawer = !state.isDrawer;
    },
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    toggleNoticPopup: state => {
      state.isNoticePopupConfirmed = true;
    },
    handleClearTableRows: (state, action) => {
      state.clearTableSelectedRows = action.payload;
    },
    handleSetCustomerName: (state, action) => {
      state.customerList = action.payload;
    },
    handleSetProvinces: (state, action) => {
      state.provincesList = action.payload;
    },
  },
});

export const {
  togglesidebar,
  toggleTheme,
  toggleDrawer,
  toggleNoticPopup,
  handleClearTableRows,
  handleSetCustomerName,
  handleSetProvinces,
} = commonSlice.actions;

export default commonSlice.reducer;
