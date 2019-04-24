import { createStore } from "redux";
import { calcToolReducer } from "../reducers/calcTool.reducer";

export const calcToolStore = createStore(calcToolReducer);
