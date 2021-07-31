import "./App.css";
// INFO: Hooks
import List from "./components/hooks/List";
// INFO: Redux-toolkit
import { Provider } from "react-redux";
import store from "./redux";
import Counter from "./components/redux/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <List />
      <Counter />
    </Provider>
  );
};

export default App;
