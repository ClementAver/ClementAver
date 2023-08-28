import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavLeft from "./components/NavLeft/NavLeft";

export default function App() {
  return (
    <div className="App">
      <NavLeft />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
