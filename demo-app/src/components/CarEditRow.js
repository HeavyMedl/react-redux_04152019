import React, { useState } from "react";

export const CarEditRow = ({ car, onSaveCar, onCancelCar }) => {
  const [editCarForm, setEditCarForm] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price
  });

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input
          type="text"
          name="make"
          value={editCarForm.make}
          onChange={e =>
            setEditCarForm({ ...editCarForm, make: e.target.value })
          }
        />
      </td>
      <td>
        <input
          type="text"
          name="model"
          value={editCarForm.model}
          onChange={e =>
            setEditCarForm({ ...editCarForm, model: e.target.value })
          }
        />
      </td>
      <td>
        <input
          type="number"
          name="year"
          value={editCarForm.year}
          onChange={e =>
            setEditCarForm({ ...editCarForm, year: Number(e.target.value) })
          }
        />
      </td>
      <td>
        <input
          type="text"
          name="color"
          value={editCarForm.color}
          onChange={e =>
            setEditCarForm({ ...editCarForm, color: e.target.value })
          }
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={editCarForm.price}
          onChange={e =>
            setEditCarForm({ ...editCarForm, price: Number(e.target.value) })
          }
        />
      </td>
      <td>
        <button
          type="button"
          onClick={() => onSaveCar({ ...editCarForm, id: car.id })}
        >
          Save
        </button>
        <button type="button" onClick={onCancelCar}>
          Cancel
        </button>
      </td>
    </tr>
  );
};
