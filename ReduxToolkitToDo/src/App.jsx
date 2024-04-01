import { useState } from "react";
import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <h1>Learn about redux toolkit</h1>
      <AddToDo />
      <Todos />
    </Provider>
  );
}

export default App;
