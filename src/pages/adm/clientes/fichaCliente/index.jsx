import { useNavigate, useParams } from 'react-router-dom';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.scss';

export default function FichaCliente() {

    const navigate = useNavigate('/')

    const [token, setToken] = useState()
    const { id } = useParams();
    const [cliente, setCliente] = useState(null);

    async function buscarClienteFicha() {
        try {
            const url = `http://localhost:5100/cliente/${id}?x-access-token=${token}`;
            const response = await axios.get(url);
            setCliente(response.data);
        } catch (error) {
            console.error("Erro ao buscar cliente:", error);
        }
    }

    useEffect(() => {

        let usu = localStorage.getItem('USUARIO');
        
        if (!token) {
            navigate('/entrar');
        }
        else {
            setToken(usu);
            buscarClienteFicha();
        }
    }, [id, token]);

    return (
        <div className='pagina-fichacliente'>
            <Cabecalhoadm />
            <div className='container'>
            {cliente ? <img src={cliente.foto || '/images/user.png'} className='img'/> : <img src='/images/user.png' className='img'/> }
            <div className='textos'>
            {cliente ? <p>{cliente.nome}</p> : <p>Carregando...</p> }
            {cliente ? <p>{cliente.email}</p> : <p>Carregando...</p>}
            {cliente ? <p>{cliente.telefone}</p> : <p>Carregando...</p>}
            {cliente ? <p>{cliente.endereco}</p> : <p>Carregando...</p>}
            </div>
            </div>
        </div>
    );
}
