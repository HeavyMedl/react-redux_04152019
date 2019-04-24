export const ADD_NUMS = "[CalcTool] ADD_NUMS";
export const SUBTRACT = "[CalcTool] SUBTRACT";
export const MULTIPLY = "[CalcTool] MULTIPLY";
export const DIVIDE = "[CalcTool] DIVIDE";
export const CLEAR = "[CalcTool] CLEAR";

export const createAddAction = payload => ({ type: ADD_NUMS, payload });
export const createSubtractAction = payload => ({ type: SUBTRACT, payload });
export const createMultiplyAction = payload => ({ type: MULTIPLY, payload });
export const createDivideAction = payload => ({ type: DIVIDE, payload });
export const createClearAction = payload => ({ type: CLEAR, payload });
