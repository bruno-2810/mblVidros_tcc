import './index.scss';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tituloadm from '../../components/tituloadm';


export default function ServicosConsultar() {



    const [token, setToken] = useState(null);
    const [servicos, setServicos] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [mostrarFiltro, setMostrarFiltro] = useState(false);
    const [filtroSelecionado, setFiltroSelecionado] = useState('');

    const navigate = useNavigate();

    async function buscar() {
        const url = `http://localhost:5100/orcamentos?filtro=${filtro}&x-access-token=${token}`;
        let resp = await axios.get(url);
        const listaServicos = resp.data;

        const servicosOrdenados = ordenarServicos(listaServicos);
        setServicos(servicosOrdenados);
    }

    function ordenarServicos(servicos) {
        if (filtroSelecionado === 'a-z') {
            return servicos.sort((a, b) => a.titulo.localeCompare(b.titulo));
        }
        if (filtroSelecionado === 'z-a') {
            return servicos.sort((a, b) => b.titulo.localeCompare(a.titulo));
        }
        if (filtroSelecionado === 'recentes') {
            return servicos.sort((a, b) => new Date(b.realizacao) - new Date(a.realizacao));
        }
        if (filtroSelecionado === 'antigos') {
            return servicos.sort((a, b) => new Date(a.realizacao) - new Date(b.realizacao));
        }
        return servicos;
    }


    function levaraocadastro() {
        navigate('/adm/servicos/cadastrar');
    }

    function levaraosclientes() {
        navigate('/adm/clientes');
    }

    function levaraoalterar(id, idcliente) {
        navigate(`/adm/servicos/cadastrar/${id}/${idcliente}`);
    }

    async function excluir(id) {
        const confirmacao = window.confirm("Você realmente deseja excluir este serviço?");
        if (confirmacao) {
            const url = `http://localhost:5100/orcamento/${id}?x-access-token=${token}`;
            await axios.delete(url);
            buscar();
        }
    }

    function exibirFiltro() {
        setMostrarFiltro(true);
    }

    function ocultarFiltro() {
        setMostrarFiltro(false);
        buscar()
    }

    function filtrosExibido() {
        if (mostrarFiltro) {
            return (
                <div className='balao-filtro'>
                    <h3>Classificar</h3>
                    <div className='btn-filtro'>
                        <label htmlFor="filtroAZ">A-Z</label>
                        <input type="checkbox" id="filtroAZ" checked={filtroSelecionado === 'a-z'} onChange={() => setFiltroSelecionado('a-z')} />
                    </div>
                    <div className='btn-filtro'>
                        <label htmlFor="filtroZA">Z-A</label>
                        <input type="checkbox" id="filtroZA" checked={filtroSelecionado === 'z-a'} onChange={() => setFiltroSelecionado('z-a')} />
                    </div>
                    <div className='btn-filtro'>
                        <label htmlFor="filtroRecentes">Recentes</label>
                        <input type="checkbox" id="filtroRecentes" checked={filtroSelecionado === 'recentes'} onChange={() => setFiltroSelecionado('recentes')} />
                    </div>
                    <div className='btn-filtro'>
                        <label htmlFor="filtroAntigos">Antigos</label>
                        <input type="checkbox" id="filtroAntigos" checked={filtroSelecionado === 'antigos'} onChange={() => setFiltroSelecionado('antigos')} />
                    </div>
                    <button onClick={ocultarFiltro} className='btn-concluido'>Concluído</button>
                </div>
            );
        }
        return null;
    }

    function levarFichaServico(id) {
        navigate(`/adm/servico/ficha/${id}`)
    }

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO');
        setToken(usu);
        if (usu === 'undefined' || usu === 'null') {
            navigate('/entrar');
        }
    }, []);


    return (
        <div className='pagina-consultarservicos'>
            <Cabecalhoadm />
            <Tituloadm subtitulo="Serviços" titulo="Consultar" />
            <div className='botoes'>
                <button className='acao' onClick={buscar}>Exibir</button>
                <button className='acao' onClick={levaraosclientes}>Clientes</button>
                <button className='acao' onClick={levaraocadastro}>Adicionar</button>
                <button className='acao' onClick={exibirFiltro}>Filtro</button>
                <div className='filtro-balao'>{mostrarFiltro && filtrosExibido()}</div>
            </div>

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Serviço</th>
                            <th>Cliente</th>
                            <th>Realização</th>
                            <th>Valor</th>
                            <th>Finalizado</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicos.map(item => (
                            <tr className='itemServico' >
                                <td onClick={() => levarFichaServico(item.idOrcamento)}>{item.titulo}</td>
                                <td onClick={() => levarFichaServico(item.idOrcamento)}>{item.cliente}</td>
                                <td onClick={() => levarFichaServico(item.idOrcamento)}>{new Date(item.realizacao).toLocaleDateString('pt-BR')}</td>
                                <td onClick={() => levarFichaServico(item.idOrcamento)}>
                                    R$ {item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </td>

                                <td onClick={() => levarFichaServico(item.idOrcamento)}>{item.finalizado ? "Sim" : "Não"}</td>
                                <td>
                                    <img src="/images/edit.png" alt="" className='img' onClick={() => levaraoalterar(item.idOrcamento, item.idCliente)} />
                                    <img src="/images/remove.png" alt="" className='img' onClick={() => excluir(item.idOrcamento)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}