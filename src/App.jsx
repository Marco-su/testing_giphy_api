import "./App.css";
import GetAndDestructuring from "./components/getAndDestructuring";
import GetByFetch from "./components/getByFetch";
import GetByPromise from "./components/getByPromise";
import GetUsingAsyncAwait from "./components/getUsingAsyncAwait";

function App() {
  return (
    <div className="App">
      <GetByPromise />
      <GetByFetch />
      <GetUsingAsyncAwait />
      <GetAndDestructuring />
    </div>
  );
}

export default App;
