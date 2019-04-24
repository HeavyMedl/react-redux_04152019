import {
  ADD_NUMS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  CLEAR
} from "../actions/calcTool.actions";

export const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMS:
      return state + action.payload;
    case SUBTRACT:
      return state - action.payload;
    case MULTIPLY:
      return state * action.payload;
    case DIVIDE:
      return state / action.payload;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};
