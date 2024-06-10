import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SobreMim from "./pages/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={ <Home /> }/>
          <Route path="/sobremim" element={ <SobreMim /> }/>
        </Route>
        <Route path="/posts/:id" element={ <Post />}/>
        <Route path="*" element={ <NaoEncontrada /> } />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
