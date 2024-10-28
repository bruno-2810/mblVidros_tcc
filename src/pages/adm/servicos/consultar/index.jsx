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
        const url = `http://localhost:5100/servicos?filtro=${filtro}&x-access-token=${token}`;
        let resp = await axios.get(url);
        const listaServicos = resp.data;

        const servicosOrdenados = ordenarServicos(listaServicos);
        setServicos(servicosOrdenados);
    }

    function ordenarServicos(servicos) {
        if (filtroSelecionado === 'a-z') {
            return servicos.sort((a, b) => a.nome.localeCompare(b.nome));
        }
        if (filtroSelecionado === 'z-a') {
            return servicos.sort((a, b) => b.nome.localeCompare(a.nome));
        }
        if (filtroSelecionado === 'recentes') {
            return servicos.sort((a, b) => new Date(b.insercao) - new Date(a.insercao));
        }
        if (filtroSelecionado === 'antigos') {
            return servicos.sort((a, b) => new Date(a.insercao) - new Date(b.insercao));
        }
        return servicos;
    }


    function levaraocadastro() {
        navigate('/adm/servicos/cadastrar');
    }

    function levaraosclientes() {
        navigate('/adm/clientes');
    }

    function levaraoalterar(id) {
        navigate(`/adm/servicos/cadastrar/${id}`);
    }

    async function excluir(id) {
        const confirmacao = window.confirm("Você realmente deseja excluir este cliente?");
        if (confirmacao) {
            const url = `http://localhost:5100/cliente/${id}?x-access-token=${token}`;
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
                                <td>{item.servico}</td>
                                <td>{item.cliente}</td>
                                <td>{item.realizacao}</td>
                                <td>{item.valor}</td>
                                <td>{item.finalizado}</td>
                                <td>
                                    <img src="/images/edit.png" alt="" className='img' onClick={() => levaraoalterar(item.id)} />
                                    <img src="/images/remove.png" alt="" className='img' onClick={() => excluir(item.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}