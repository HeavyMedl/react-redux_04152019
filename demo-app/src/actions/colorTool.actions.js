export const APPEND_COLOR = "[ColorTool] APPEND_COLOR";
export const DELETE_COLOR = "[ColorTool] DELETE_COLOR";

export const createAppendColorAction = payload => ({
  type: APPEND_COLOR,
  payload
});
export const createDeleteColorAction = payload => ({
  type: DELETE_COLOR,
  payload
});
