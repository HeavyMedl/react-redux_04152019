import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { CarToolContainer } from "./containers/CarToolContainer";

import { carToolStore } from "./stores/carToolStore";

ReactDOM.render(
  <>
    <Provider store={carToolStore}>
      <CarToolContainer headerText="Big Willie's Steamboat" />
    </Provider>
  </>,
  document.querySelector("#root")
);
