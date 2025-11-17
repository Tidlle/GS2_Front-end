import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Integrantes } from "../pages/Integrantes";
import { FAQ } from "../pages/Faq";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
