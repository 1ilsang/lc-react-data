import { createStore, actionCreator } from "./store";

// Reducer
const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "init":
      return { ...state, count: payload.count };
    case "increment":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
};

// Actions
export const initAction = {
  type: "init",
  payload: {
    count: 1,
  },
};
export const incrementAction = {
  type: "increment",
};

// Middleware: Redux-thunk, Redux-saga
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("logger", action.type);
  next(action);
};
const monitorMiddleware = (store) => (next) => (action) => {
  setTimeout(() => {
    console.log("monitor", action.type);
    next(action);
  }, 500);
};

// Entry point
export const store = createStore(reducer, [
  loggerMiddleware,
  monitorMiddleware,
]);
store.subscribe(() => console.log("store state:", store.getState()));

// Action Fire!
export const Init = () => {
  store.dispatch(actionCreator(initAction));
  // 생략된 것
  // store.dispatch({ type: initAction.type, payload: initAction.payload });
  // store.dispatch({ type: "init", payload: { count: 1 } });
};
export const Increment = () => {
  store.dispatch(actionCreator(incrementAction));
  // store.dispatch({
  //   type: incrementAction.type,
  //   payload: incrementAction.payload || {},
  // });
  // store.dispatch({ type: "increment", payload: {} });
};

// Selector
export const selector = store.getState;
