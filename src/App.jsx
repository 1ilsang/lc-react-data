import "./App.css";
// INFO: Hooks
import List from "./components/hooks/List";
// INFO: Redux-toolkit
import { Provider } from "react-redux";
import store from "./redux";
import Counter from "./components/redux/Counter";
import InCounter from "./components/myRedux/InCounter";

const App = () => {
  return (
    <>
      <h1>Hooks</h1>
      <List />
      <hr />
      <h1>Redux</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
      <hr />
      <h1>MyRedux</h1>
      <InCounter />
    </>
  );
};

export default App;
