import { configureStore } from "@reduxjs/toolkit";
import asideSliceReducer from "./features/asideSlice";
import checkUserLog from "./features/checkUserLog";
import heroSlider from "./features/heroSliderSlice";
export default configureStore({
    reducer: {
        aside : asideSliceReducer,
        userIsLogged : checkUserLog,
        heroSlider : heroSlider,
    }
})