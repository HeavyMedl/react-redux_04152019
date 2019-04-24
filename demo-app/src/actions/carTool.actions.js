export const REFRESH_CARS_REQUEST = "[CarTool] REFRESH_CARS_REQUEST";
export const REFRESH_CARS_DONE = "[CarTool] REFRESH_CARS_DONE";
export const APPEND_CAR_REQUEST = "[CarTool] APPEND_CAR_REQUEST";
export const APPEND_CAR_DONE = "[CarTool] APPEND_CAR_DONE";
export const REPLACE_CAR_REQUEST = "[CarTool] REPLACE_CAR_REQUEST";
export const REPLACE_CAR_DONE = "[CarTool] REPLACE_CAR_DONE";
export const DELETE_CAR_REQUEST = "[CarTool] DELETE_CAR_REQUEST";
export const DELETE_CAR_DONE = "[CarTool] DELETE_CAR_DONE";
export const EDIT_CAR = "[CarTool] EDIT_CAR";
export const CANCEL_CAR = "[CarTool] CANCEL_CAR";

export const createRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST
});
export const createRefreshCarsDoneAction = payload => ({
  type: REFRESH_CARS_DONE,
  payload
});
export const createAppendCarRequestAction = payload => ({
  type: APPEND_CAR_REQUEST,
  payload
});
export const createAppendCarDoneAction = payload => ({
  type: APPEND_CAR_DONE,
  payload
});
export const createReplaceCarRequestAction = payload => ({
  type: REPLACE_CAR_REQUEST,
  payload
});
export const createReplaceCarDoneAction = payload => ({
  type: REPLACE_CAR_DONE,
  payload
});
export const createDeleteCarRequestAction = payload => ({
  type: DELETE_CAR_REQUEST,
  payload
});
export const createDeleteCarDoneAction = () => ({ type: DELETE_CAR_DONE });
export const createEditCarAction = payload => ({ type: EDIT_CAR, payload });
export const createCancelCarAction = payload => ({ type: CANCEL_CAR, payload });

export const refreshCars = () => {
  return (dispatch, getState) => {
    dispatch(createRefreshCarsRequestAction());
    return fetch("http://localhost:3050/cars")
      .then(res => res.json())
      .then(cars => dispatch(createRefreshCarsDoneAction(cars)));
  };
};

export const appendAndRefeshCars = car => {
  return dispatch => {
    dispatch(createAppendCarRequestAction(car));
    return (
      fetch("http://localhost:3050/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car)
      })
        // .then(res => res.json())
        // .then(car => dispatch(createAppendCarDoneAction(car)))
        .then(() => dispatch(refreshCars()))
    );
  };
};

export const replaceCar = car => {
  return dispatch => {
    dispatch(createReplaceCarRequestAction(car));
    return fetch(`http://localhost:3050/cars/${encodeURIComponent(car.id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car)
    })
      .then(res => res.json())
      .then(car => dispatch(createReplaceCarDoneAction(car)))
      .then(() => dispatch(refreshCars()));
  };
};

export const deleteCar = carId => {
  return dispatch => {
    dispatch(createReplaceCarRequestAction(carId));
    return fetch(`http://localhost:3050/cars/${encodeURIComponent(carId)}`, {
      method: "DELETE"
    })
      .then(() => dispatch(createDeleteCarDoneAction()))
      .then(() => dispatch(refreshCars()));
  };
};
