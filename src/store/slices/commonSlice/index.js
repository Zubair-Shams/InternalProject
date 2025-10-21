// src/store/slices/commonSlice/index.js
import burberryLogo from "assets/images/Burberry-logo-1.png";
import armaniLogo from "assets/images/Armani-Logo-1.png";
import pradaLogo from "assets/images/Prada-Logo-1.png";
import gucciLogo from "assets/images/Gucci-Logo-1.png";
import ecoLogo from "assets/images/Eco-Logo-1.png";
import naturaLogo from "assets/images/Natura-Logo-1.png";
import Tesla from "assets/images/Tesla-Logo-1.png";

import { createSlice } from "@reduxjs/toolkit";

const initState = {
  // Game state
  isSpinning: false,
  hasSpun: false,
  currentPrize: null,
  spinCount: 0,
  maxSpins: 3,

  // User data
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },

  // Game offers and brands
  availableOffers: [
    { id: 1, brand: "Prada", discount: "15% OFF", color: "#FB8B00" },
    { id: 2, brand: "Burberry", discount: "25% OFF", color: "#00ACC2" },
    { id: 3, brand: "ECO", discount: "20% OFF", color: "#F5F5F5" },
    { id: 4, brand: "Prada", discount: "30% OFF", color: "#DF3B37" },
    { id: 5, brand: "Burberry", discount: "35% OFF", color: "#00ACC2" },
  ],

  // brands
  brands: [
    {
      id: 1,
      name: "Burberry",
      logo: burberryLogo,
      className: "w-full h-14 object-contain",
    },
    {
      id: 2,
      name: "Giorgio Armani",
      logo: armaniLogo,
      className: "w-full h-14 object-contain",
    },
    {
      id: 3,
      name: "Prada",
      logo: pradaLogo,
      className: "w-full h-18 object-contain",
    },
    {
      id: 4,
      name: "Gucci",
      logo: gucciLogo,
      className: "w-full h-18 object-contain",
    },
    {
      id: 5,
      name: "ECO",
      logo: ecoLogo,
      className: "w-full h-14 object-contain",
    },
    {
      id: 6,
      name: "Tesla",
      logo: Tesla,
      className: "w-full h-14 object-contain",
    },
    {
      id: 7,
      name: "Natura & Co",
      logo: naturaLogo,
      className: "w-[60%] h-20 object-contain mx-auto",
    }, // ✅ centered & smaller
  ],

  // Selected brands
  selectedBrands: [],

  // Game settings
  gameSettings: {
    theme: "light",
    soundEnabled: true,
    animationsEnabled: true,
  },

  // UI state
  showWinMessage: false,
  currentStep: "register", // register, brands, spinwheel, offer, thankyou
  isGameCompleted: false,
};
export const commonSlice = createSlice({
  name: "commonState",
  initialState: initState,
  reducers: {
    // Game control actions
    startSpinning: (state) => {
      state.isSpinning = true;
      state.showWinMessage = false;
    },
    stopSpinning: (state, action) => {
      state.isSpinning = false;
      state.hasSpun = true;
      state.currentPrize = action.payload;
      state.spinCount += 1;
      state.showWinMessage = true;
    },
    resetGame: (state) => {
      state.isSpinning = false;
      state.hasSpun = false;
      state.currentPrize = null;
      state.spinCount = 0;
      state.showWinMessage = false;
      state.isGameCompleted = false;
    },

    // User data actions
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    clearUserData: (state) => {
      state.userData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      };
    },

    // Brand selection actions
    selectBrand: (state, action) => {
      debugger;
      const brand = action.payload;
      if (!state.selectedBrands.find((b) => b.id === brand.id)) {
        state.selectedBrands.push(brand);
      }
    },
    removeBrand: (state, action) => {
      state.selectedBrands = state.selectedBrands.filter(
        (brand) => brand.id !== action.payload
      );
    },
    clearSelectedBrands: (state) => {
      state.selectedBrands = [];
    },

    // Navigation actions
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      const steps = ["register", "brands", "spinwheel", "offer", "thankyou"];
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex < steps.length - 1) {
        state.currentStep = steps[currentIndex + 1];
      }
    },
    previousStep: (state) => {
      const steps = ["register", "brands", "spinwheel", "offer", "thankyou"];
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex > 0) {
        state.currentStep = steps[currentIndex - 1];
      }
    },

    // Game settings actions
    toggleTheme: (state) => {
      state.gameSettings.theme =
        state.gameSettings.theme === "light" ? "dark" : "light";
    },
    toggleSound: (state) => {
      state.gameSettings.soundEnabled = !state.gameSettings.soundEnabled;
    },
    toggleAnimations: (state) => {
      state.gameSettings.animationsEnabled =
        !state.gameSettings.animationsEnabled;
    },

    // Win message actions
    showWinMessage: (state) => {
      state.showWinMessage = true;
    },
    hideWinMessage: (state) => {
      state.showWinMessage = false;
    },

    // Game completion
    completeGame: (state) => {
      state.isGameCompleted = true;
      state.currentStep = "thankyou";
    },
  },
});

export const {
  // Game control actions
  startSpinning,
  stopSpinning,
  resetGame,

  // User data actions
  setUserData,
  clearUserData,

  // Brand selection actions
  selectBrand,
  removeBrand,
  clearSelectedBrands,

  // Navigation actions
  setCurrentStep,
  nextStep,
  previousStep,

  // Game settings actions
  toggleTheme,
  toggleSound,
  toggleAnimations,

  // Win message actions
  showWinMessage,
  hideWinMessage,

  // Game completion
  completeGame,
} = commonSlice.actions;

export default commonSlice.reducer;
