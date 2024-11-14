import { useNavigate, useParams } from 'react-router-dom';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.scss';
import './responsividade.scss';

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
            console.error("Erro ao buscar serviço:", error);
        }
    }

    function levaraconulta() {
        navigate('/adm/servicos')
    }

    useEffect(() => {

        let usu = localStorage.getItem('USUARIO');

        if (!usu) {
            navigate('/entrar');
        }
        else {
            setToken(usu);
            buscarServicoFicha();
        }
    }, [id, token]);

    return (
        <div className='pagina-fichaservico'>
            <Cabecalhoadm />
            <div className='container'>
                <div className='titulo'>
                    {servico ? <p>{servico.titulo}</p> : <p>Carregando...</p>}
                </div>
                <div className='conteudo'>
                    <div className='coluna1'>
                        {servico ? <p>nome do cliente: <span>{servico.cliente}</span></p> : <p>Carregando...</p>}
                        <div className='spandesc'>
                            <p>descrição:&nbsp;</p>
                            {servico ? <p className='descricao'><span>{servico.descricao}</span></p> : <p className='descricao'>Carregando...</p>}
                        </div>
                        {servico ? (
                            <p>valor: <span>R$ {servico.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
                        ) : (
                            <p>Carregando...</p>
                        )}

                    </div>
                    <div className='coluna2'>
                        {servico ? <p>data de realização: <span>{new Date(servico.realizacao).toLocaleDateString('pt-BR')}</span></p> : <p>Carregando...</p>}
                        {servico ? <p>situação: <span>{servico.finalizado ? 'Finalizado' : 'Pendente'}</span></p> : <p>Carregando...</p>}
                    </div>
                </div>
                <div className='botao'>
                    <button onClick={levaraconulta} className='btn-voltar'>Voltar</button>
                </div>
            </div>
        </div>
    );
}
