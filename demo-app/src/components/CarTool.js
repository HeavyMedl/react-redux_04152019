import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = ({
  headerText,
  cars,
  editCarId,
  onRefreshCars: refreshCars,
  onAppendCar: appendCar,
  onReplaceCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar
}) => {
  useEffect(() => {
    refreshCars();
  }, []);

  return (
    <>
      <ToolHeader headerText={headerText} />
      <CarTable
        cars={cars}
        onDeleteCar={deleteCar}
        editCarId={editCarId}
        onSaveCar={replaceCar}
        onCancelCar={cancelCar}
        onEditCar={editCar}
      />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
    </>
  );
};

CarTool.propTypes = {
  headerText: PropTypes.string.isRequired,
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      make: PropTypes.string,
      model: PropTypes.string,
      year: PropTypes.number,
      color: PropTypes.string,
      price: PropTypes.number
    })
  ).isRequired
};
