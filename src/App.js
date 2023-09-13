import { BrowserRouter } from "react-router-dom";
import Router from "./Components/Router";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Container">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
