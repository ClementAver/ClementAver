import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavLeft from "./components/NavLeft/NavLeft";
import GalerieRobillard from "./pages/GalerieRobillard/GalerieRobillard";
import LaNuitDuDroit from "./pages/LaNuitDuDroit/LaNuitDuDroit";
import About from "./pages/About/About";

export default function App() {
  return (
    <div className="App">
      <NavLeft />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/galerierobillard"
          element={<GalerieRobillard />}
        />
        <Route
          path="/lanuitdudroit"
          element={<LaNuitDuDroit />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<LaNuitDuDroit />}
        />
      </Routes>
    </div>
  );
}
