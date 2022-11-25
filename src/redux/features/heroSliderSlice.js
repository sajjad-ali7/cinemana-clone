import { createSlice } from "@reduxjs/toolkit";
import { deviceWidth } from "../../pages/home/hero/slider";

let length = 20;
let elementsPerPage = 5;
const heroSlider = createSlice({
  name: "hero__slider",
  initialState: { index: 0, data: [], move: 0 },
  reducers: {
    autoSlide: (state) => {
      if (state.move === 19) {
        state.move = 0;
        state.index = 0;
      } else {
        state.move = state.move + 1;
      }

      // for desktop devices
      if (deviceWidth === 20) {
        if (state.index < 15) {
          state.index = state.index + 1;
        }
      }
      //for tablet and smaller devices
      else if (deviceWidth === 25) {
        if (state.index < 16) {
          state.index = state.index + 1;
        }

        if (state.move - state.index <= -4 || state.index - state.move <= -4) {
          if (state.move >= 16) {
            state.index = 16;
          } else {
            state.index = state.move;
          }
        }
      }
    },

    toggleSlide: (state, action) => {
      // for next film
      if (action.payload.inc) {
        state.move = state.move + 1;
        if (state.index === length - elementsPerPage) {
          if (state.move === 20) {
            state.move = 0;
            state.index = 0;
          }
        } else {
          state.index = state.index + 1;
        }
      }
      // for prev film
      if (action.payload.dec) {
        if (state.move === 0) {
          state.move = 19;
          state.index = 15;
        } else {
          state.move = state.move - 1;
          state.index = state.index - 1;
        }
      }
    },

    jumpTo: (state, action) => {
      state.index = action.payload;
    },
    addData: (state, action) => {
      state.data = action.payload;
    },

    onMovieSelect: (state, action) => {
      state.move = action.payload;
    },
  },
});

export const { toggleSlide, autoSlide, jumpTo, addData, onMovieSelect } =
  heroSlider.actions;

export default heroSlider.reducer;
