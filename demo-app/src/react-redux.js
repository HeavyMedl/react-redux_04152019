import React from "react";

export const StoreContext = React.createContext(null);

export const Provider = StoreContext.Provider;

export const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {
  return PresentationalComponent => {
    class ContainerComponent extends React.Component {
      constructor(props) {
        super(props);

        this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);
      }

      componentDidMount() {
        this.unsubscribeFromStore = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        this.unsubscribeFromStore();
      }

      render() {
        return (
          <PresentationalComponent
            {...this.dispatchProps}
            {...mapStateToPropsFn(this.props.store.getState())}
            {...this.props}
          />
        );
      }
    }

    return () => (
      <StoreContext.Consumer>
        {store => <ContainerComponent store={store} />}
      </StoreContext.Consumer>
    );
  };
};
