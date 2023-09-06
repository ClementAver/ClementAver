import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavLeft from "./components/NavLeft/NavLeft";
import GalerieRobillard from "./pages/projects/GalerieRobillard/GalerieRobillard";
import LaNuitDuDroit from "./pages/projects/LaNuitDuDroit/LaNuitDuDroit";
import Perial from "./pages/projects/Perial/Perial";
import About from "./pages/About/About";
import ScrollToAnchor from "./utils/ScrollToAnchor/ScrollToAnchor";
import LabelISR from "./pages/projects/LabelISR/LabelISR";
import FFB from "./pages/projects/FFB/FFB";
import Tisseo from "./pages/projects/Tisseo/Tisseo";
import LaPoste from "./pages/projects/LaPoste/LaPoste";

export default function App() {
  return (
    <div className="App">
      <NavLeft />
      <ScrollToAnchor />
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
          path="/perial"
          element={<Perial />}
        />
        <Route
          path="/labelisr"
          element={<LabelISR />}
        />
        <Route
          path="/ffb"
          element={<FFB />}
        />
        <Route
          path="/tisseo"
          element={<Tisseo />}
        />
        <Route
          path="/laposte"
          element={<LaPoste />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  );
}
