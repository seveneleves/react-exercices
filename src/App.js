import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import LogIn from "./containers/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
