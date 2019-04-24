import { colorsReducer } from "./colors.reducer";

export const colorToolReducer = (state = {}, action) => {
  return {
    ...state,
    colors: colorsReducer(state.colors, action)
  };
};
