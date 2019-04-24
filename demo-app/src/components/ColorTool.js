import React from "react";
import PropTypes from "prop-types";

import { ToolHeader } from "./ToolHeader";
import { ColorForm } from "./ColorForm";

export const ColorTool = ({
  headerText,
  colors,
  onAppendColor,
  onDeleteColor
}) => {
  return (
    <>
      <ToolHeader headerText={headerText} />
      <ul>
        {colors.map(color => (
          <li key={color.id}>
            {color.name} - {color.hexCode}
            <button type="button" onClick={() => onDeleteColor(color.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={onAppendColor} />
    </>
  );
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      hexCode: PropTypes.string
    })
  ).isRequired,
  headerText: PropTypes.string.isRequired
};

ColorTool.defaultProps = {
  headerText: "Color Tool"
};
