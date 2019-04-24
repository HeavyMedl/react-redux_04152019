import React from "react";
import ReactDOM from "react-dom";

import { CalcTool } from "./components/CalcTool";

const calcReducer = (state = { result: 0, history: [] }, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        result: state.result + action.value,
        history: state.history.concat(action.type + " " + action.value)
      };
    case "SUBTRACT":
      return {
        ...state,
        result: state.result - action.value,
        history: state.history.concat(action.type + " " + action.value)
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.result * action.value,
        history: state.history.concat(action.type + " " + action.value)
      };
    case "DIVIDE":
      return {
        ...state,
        result: state.result / action.value,
        history: state.history.concat(action.type + " " + action.value)
      };
    default:
      return state;
  }
};

const createStore = reducer => {
  let currentState = undefined;
  const subscribers = [];

  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = reducer(currentState, action);
      subscribers.forEach(callbackFn => callbackFn());
    },
    subscribe: callbackFn => {
      subscribers.push(callbackFn);
    }
  };
};

const calcStore = createStore(calcReducer);

const createAddAction = value => ({ type: "ADD", value });
const createSubtractAction = value => ({ type: "SUBTRACT", value });
const createMultiplyAction = value => ({ type: "MULTIPLY", value });
const createDivideAction = value => ({ type: "DIVIDE", value });

const bindActionCreators = (actions, dispatch) => {
  return Object.keys(actions).reduce((boundActions, actionKey) => {
    boundActions[actionKey] = (...params) =>
      dispatch(actions[actionKey](...params));
    return boundActions;
  }, {});
};

const { add, subtract, multiply, divide } = bindActionCreators(
  {
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction
  },
  calcStore.dispatch
);

calcStore.subscribe(() => {
  ReactDOM.render(
    <CalcTool
      result={calcStore.getState().result}
      history={calcStore.getState().history}
      onAdd={add}
      onSubtract={subtract}
      onMultiply={multiply}
      onDivide={divide}
    />,
    document.querySelector("#root")
  );
});

// ReactDOM.render(
//   <CalcTool result={calcStore.getState()} onAdd={add} onSubtract={subtract}
//     onMultiply={multiply} onDivide={divide} />,
//   document.querySelector('#root'),
// );

add(0);
