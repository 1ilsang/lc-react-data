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

// Middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("logger", action.type);
  next(action);
};
const monitorMiddleware = (store) => (next) => (action) => {
  setTimeout(() => {
    console.log("monitor", action.type);
    next(action);
  }, 2000);
};

// Entry point
export const store = createStore(reducer, [
  loggerMiddleware,
  monitorMiddleware,
]);
store.subscribe(() => console.log("hit"));

// Action Fire!
// const Init = () => store.dispatch(actionCreator(...initAction));
// const Increment = () => store.dispatch(actionCreator(...incrementAction));
// Init();
// Increment();

// Selector
export const getState = store.getState;
