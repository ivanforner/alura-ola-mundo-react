import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={ <Home /> }/>
          <Route path="/sobremim" element={ <SobreMim /> }/>
        </Route>
        <Route path="*" element={ <div>Página não encontrada</div> } />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
