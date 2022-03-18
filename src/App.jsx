import "./App.css";
import Main from "./components/Main";
import Provider from "./components/store/Provider";

function App() {
  return (
    <section className="app-container">
    <Provider>
      <Main />
    </Provider>
    </section>
  );
}

export default App;
