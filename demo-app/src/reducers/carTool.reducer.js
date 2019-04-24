import { carsReducer } from "./cars.reducer";
import { editCarIdReducer } from "./editCarId.reducer";

export const carToolReducer = (state = {}, action) => {
  return {
    ...state,
    cars: carsReducer(state.cars, action),
    editCarId: editCarIdReducer(state.editCarId, action)
  };
};
