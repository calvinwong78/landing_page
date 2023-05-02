import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rqqt from "./component/rq-qt";
import Main from "./main";

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/req-qt" element={<Rqqt/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
