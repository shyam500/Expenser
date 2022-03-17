import "./App.css";
import Main from "./components/Main";
import Provider from "./components/store/Provider";

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
