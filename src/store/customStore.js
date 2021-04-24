import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];
  function dispatch(action) {
    //call the reducer to get the new state

    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
    // notify the subscribers
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}

export default createStore(reducer);
