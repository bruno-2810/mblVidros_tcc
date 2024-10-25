import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./pages/inicio/App";


export default function Navegacao() {

    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
    )
}