import { APPEND_COLOR, DELETE_COLOR } from "../actions/colorTool.actions";

const initialColors = [
  { id: 1, name: "red", hexCode: "#ff0000" },
  { id: 2, name: "green", hexCode: "#00ff00" },
  { id: 3, name: "blue", hexCode: "#0000ff" }
];

export const colorsReducer = (state = initialColors, action) => {
  switch (action.type) {
    case APPEND_COLOR:
      return state.concat({
        ...action.payload,
        id: Math.max(...state.map(c => c.id), 0) + 1
      });
    case DELETE_COLOR:
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
};
