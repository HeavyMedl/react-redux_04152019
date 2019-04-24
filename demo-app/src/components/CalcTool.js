import React, { useState } from "react";

import { UnorderedList } from "./UnorderedList";

export const CalcTool = ({
  result,
  history,
  onAdd,
  onSubtract,
  onMultiply,
  onDivide
}) => {
  const [numInput, setNumInput] = useState(0);

  return (
    <>
      <form>
        <div>Result: {result}</div>
        <div>
          <label htmlFor="num-input">Input:</label>
          <input
            type="number"
            id="num-input"
            value={numInput}
            onChange={e => setNumInput(Number(e.target.value))}
          />
        </div>
        <div>
          <button type="button" onClick={() => onAdd(numInput)}>
            +
          </button>
          <button type="button" onClick={() => onSubtract(numInput)}>
            -
          </button>
          <button type="button" onClick={() => onMultiply(numInput)}>
            *
          </button>
          <button type="button" onClick={() => onDivide(numInput)}>
            /
          </button>
        </div>
      </form>
      <UnorderedList items={history} />
    </>
  );
};
