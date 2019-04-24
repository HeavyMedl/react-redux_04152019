import { createStore } from "redux";
import { colorToolReducer } from "../reducers/colorTool.reducer";

export const colorToolStore = createStore(colorToolReducer);
