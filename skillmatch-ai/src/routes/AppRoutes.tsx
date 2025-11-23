import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Integrantes } from "../pages/Integrantes";
import { FAQ } from "../pages/Faq";
import { Simulador } from "../pages/Simulador";
import { Trilhas } from "../pages/Trilhas";
import { TrilhaDetalhe } from "../pages/TrilhaDetalhe";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ComoFunciona } from "../pages/ComoFunciona";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/simulador" element={<Simulador />} />
      <Route path="/trilhas" element={<Trilhas />} />
      <Route path="/trilhas/:id" element={<TrilhaDetalhe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
