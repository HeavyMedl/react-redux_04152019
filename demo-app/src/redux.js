export const createStore = reducer => {
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

      return () => {
        subscribers.splice(subscribers.indexOf(callbackFn), 1);
      };
    }
  };
};

export const bindActionCreators = (actions, dispatch) => {
  return Object.keys(actions).reduce((boundActions, actionKey) => {
    boundActions[actionKey] = (...params) =>
      dispatch(actions[actionKey](...params));
    return boundActions;
  }, {});
};
