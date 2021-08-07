// my-redux.js ////////////////////////////////////////
export const createStore = (reducer, middlewares = []) => {
  let state;
  const listeners = [];

  const subscribe = (subscriber, context = null) =>
    listeners.push({ subscriber, context });
  const publish = () =>
    listeners.forEach(({ subscriber, context }) => subscriber.call(context));
  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };
  // 이전의 state와의 관계를 끊어주기 위해 사용.
  // 이 예제에선 deepCopy로 동작하지 않는다!
  const getState = () => ({ ...state });
  const store = {
    dispatch,
    getState,
    subscribe,
  };

  middlewares = Array.from(middlewares).reverse();
  let lastDispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    lastDispatch = middleware(store)(lastDispatch);
  });

  return {
    ...store,
    dispatch: lastDispatch,
  };
};

export const actionCreator = ({ type, payload = {} }) => ({
  type,
  payload: { ...payload },
});
