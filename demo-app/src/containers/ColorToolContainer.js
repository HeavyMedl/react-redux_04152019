import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { ColorTool } from "../components/ColorTool";

import {
  createAppendColorAction,
  createDeleteColorAction
} from "../actions/colorTool.actions";

export const ColorToolContainer = connect(
  state => ({ colors: state.colors }),
  dispatch =>
    bindActionCreators(
      {
        onAppendColor: createAppendColorAction,
        onDeleteColor: createDeleteColorAction
      },
      dispatch
    )
)(ColorTool);
