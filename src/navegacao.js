import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./pages/inicio/App";
import Entrar from "./pages/entrar";
import ClientesConsultar from "./pages/adm/clientes/consultar";
import ClientesCadastrar from "./pages/adm/clientes/cadastrar";
import ServicosConsultar from "./pages/adm/servicos/consultar";
import ServicosCadastrar from "./pages/adm/servicos/cadastrar";
import FichaCliente from "./pages/adm/clientes/fichaCliente";


export default function Navegacao() {

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/entrar" element={<Entrar />} />
            <Route path="/adm/clientes" element={<ClientesConsultar />} />
            <Route path="/adm/servicos" element={<ServicosConsultar />} />
            <Route path="/adm/servicos/cadastrar" element={<ServicosCadastrar />} />
            <Route path="/adm/clientes/cadastrar/:id" element={<ClientesCadastrar />} />
            <Route path="/adm/clientes/cadastrar" element={<ClientesCadastrar />} />
            <Route path="/adm/cliente/ficha/:id" element={<FichaCliente />} />
        </Routes>
    </BrowserRouter>
    )
}