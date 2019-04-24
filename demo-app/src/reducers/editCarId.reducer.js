import { EDIT_CAR } from "../actions/carTool.actions";

export const editCarIdReducer = (state = -1, action) => {
  if (action.type.endsWith("_DONE")) {
    return -1;
  }

  if (action.type === EDIT_CAR) {
    return action.payload;
  }

  return state;
};
