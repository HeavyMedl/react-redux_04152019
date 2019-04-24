import React, { useState } from "react";
import PropTypes from "prop-types";

export const ColorForm = ({ buttonText, onSubmitColor }) => {
  const [colorForm, setColorForm] = useState({
    name: "",
    hexCode: ""
  });

  const change = ({ target: { name, value } }) =>
    setColorForm({ ...colorForm, [name]: value });

  const submitColor = () => {
    onSubmitColor({ ...colorForm });

    setColorForm({
      name: "",
      hexCode: ""
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input
          type="text"
          id="color-name-input"
          value={colorForm.name}
          name="name"
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color Hex Code:</label>
        <input
          type="text"
          id="color-hexcode-input"
          value={colorForm.hexCode}
          name="hexCode"
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitColor}>
        {buttonText}
      </button>
    </form>
  );
};

ColorForm.defaultProps = {
  buttonText: "Submit Color"
};

ColorForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitColor: PropTypes.func.isRequired
};
