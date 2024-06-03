import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/sobremim" element={ <SobreMim /> }/>
        <Route path="*" element={ <div>Página não encontrada</div> } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
