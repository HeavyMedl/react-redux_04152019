import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { CarTool } from "../components/CarTool";

import {
  refreshCars as onRefreshCars,
  appendCar as onAppendCar,
  replaceCar as onReplaceCar,
  deleteCar as onDeleteCar,
  createEditCarAction,
  createCancelCarAction
} from "../actions/carTool.actions";

export const CarToolContainer = connect(
  ({ cars, editCarId }) => ({ cars, editCarId }),
  dispatch =>
    bindActionCreators(
      {
        // onRefreshCars: payload => dispatch(refreshCars(payload)),
        onRefreshCars: onRefreshCars,
        // onAppendCar: payload => dispatch(createAppendCarAction(payload)),
        onAppendCar,
        onReplaceCar,
        onDeleteCar,
        onEditCar: createEditCarAction,
        onCancelCar: createCancelCarAction
      },
      dispatch
    )
)(CarTool);
