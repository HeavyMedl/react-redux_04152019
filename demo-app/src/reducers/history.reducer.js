import {
  ADD_NUMS,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  CLEAR
} from "../actions/calcTool.actions";

export const historyReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NUMS:
    case SUBTRACT:
    case MULTIPLY:
    case DIVIDE:
      return state.concat(`${action.type} ${action.payload}`);
    case CLEAR:
      return [];
    default:
      return state;
  }
};
