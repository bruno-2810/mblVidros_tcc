import { useNavigate, useParams } from 'react-router-dom';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.scss';

export default function FichaServico() {

    const navigate = useNavigate('/')

    const [token, setToken] = useState()
    const { id } = useParams();
    const [servico, setServico] = useState(null);

    async function buscarServicoFicha() {
        try {
            const url = `http://localhost:5100/orcamento/${id}?x-access-token=${token}`;
            const response = await axios.get(url);
            setServico(response.data);
        } catch (error) {
            console.log(token)
            console.error("Erro ao buscar serviço:", error);
        }
    }

    useEffect(() => {

        let usu = localStorage.getItem('USUARIO');
        
        if (!token) {
            navigate('/entrar');
        }
        else {
            setToken(usu);
            buscarServicoFicha();
        }
    }, [id, token]);

    return (
        <div className='pagina-fichacliente'>
            <Cabecalhoadm />
            <div className='container'>
            <div className='textos'>
            {servico ? <p>{servico.titulo}</p> : <p>Carregando...</p> }
            {servico ? <p>{servico.cliente}</p> : <p>Carregando...</p>}
            {servico ? <p>{servico.descricao}</p> : <p>Carregando...</p>}
            {servico ? <p>{new Date(servico.realizacao).toLocaleDateString('pt-BR')}</p> : <p>Carregando...</p>}
            {servico ? <p>{servico.finalizado ? 'Serviço Entregue' : 'Pendente'}</p> : <p>Carregando...</p>}
            </div>
            </div>
        </div>
    );
}
