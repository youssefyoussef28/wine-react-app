import "./App.css";
import Login from "./components/Login";
import Wines from "./components/Wines";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/wines" element={<Wines />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
