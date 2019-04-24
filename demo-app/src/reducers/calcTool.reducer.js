import { resultReducer } from "./result.reducer";
import { historyReducer } from "./history.reducer";

export const calcToolReducer = (state = {}, action) => {
  return {
    ...state,
    result: resultReducer(state.result, action),
    history: historyReducer(state.history, action)
  };
};
