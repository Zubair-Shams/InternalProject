// @imports redux toolkit
import Swal from "sweetalert2";
import { createSlice } from "@reduxjs/toolkit";
// @ import media
import closeCircle from "assets/images/close-circle-white.svg";
import tickIcon from "assets/images/tick.svg";
import { Navigate } from "react-router-dom";

const initialState = {
  isAlertOpen: false,
  message: "",
  time: 3000,
  alertType: "default_alert",
};

function swalModal({ message, title, onConfirm }) {
  Swal.fire({
    icon: "success",
    text: message,
    showCloseButton: true,
    iconColor: "rgba(245, 130, 32, 1)",
    title: title ? title : "Error",
    // confirmButtonColor: "var(--orange)",
    iconHtml: `<img src="${tickIcon}" alt="Success" />`,
    closeButtonHtml: `<img src="${closeCircle}" alt="Close" />`,
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      Navigate(onConfirm);
    }
  });
}

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openModal(state, action) {
      const { message,  title, onConfirm } = action.payload;
      swalModal({ title, message, onConfirm });
    },
  },
});

export const { openModal } = alertSlice.actions;
export default alertSlice.reducer;
