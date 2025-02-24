import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "./MobileAction";

export const store = configureStore({ reducer: mobileReducer });
