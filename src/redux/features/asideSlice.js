import { createSlice } from "@reduxjs/toolkit";

const asideSlice = createSlice({
  name: "asideSlice",
  initialState: { value: { hover: false, increaseSize: false , displayAside : false} },
  reducers: {
    setHover: (state, action) => {
        state.value.hover = action.payload
    },
    setIncreaseSize: (state) => {
      state.value.increaseSize = !state.value.increaseSize
    },
    toggleAside : (state , action) => {
      state.value.displayAside = action.payload
    }
  },
});

export const {setHover , setIncreaseSize , toggleAside} = asideSlice.actions;

export default asideSlice.reducer