import './index.scss';
import './responsividade.scss';
import Cabecalhoadm from '../../components/cabecalhoAdm';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tituloadm from '../../components/tituloadm';

export default function ClientesConsultar() {
    const [token, setToken] = useState(null);
    const [clientes, setClientes] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [mostrarFiltro, setMostrarFiltro] = useState(false);
    const [filtroSelecionado, setFiltroSelecionado] = useState('');

    const navigate = useNavigate();

    async function buscar() {
        const url = `http://localhost:5100/clientes?filtro=${filtro}&x-access-token=${token}`;
        let resp = await axios.get(url);
        const listaClientes = resp.data;

        const clientesOrdenados = ordenarClientes(listaClientes);
        setClientes(clientesOrdenados);
    }

    function ordenarClientes(clientes) {
        if (filtroSelecionado === 'a-z') {
            return clientes.sort((a, b) => a.nome.localeCompare(b.nome));
        }
        if (filtroSelecionado === 'z-a') {
            return clientes.sort((a, b) => b.nome.localeCompare(a.nome));
        }
        if (filtroSelecionado === 'recentes') {
            return clientes.sort((a, b) => new Date(b.insercao) - new Date(a.insercao));
        }
        if (filtroSelecionado === 'antigos') {
            return clientes.sort((a, b) => new Date(a.insercao) - new Date(b.insercao));
        }
        return clientes;
    }

    function levaraocadastro() {
        navigate('/adm/clientes/cadastrar');
    }

    function levaraosservicos() {
        navigate('/adm/servicos');
    }

    function levaraoalterar(id) {
        navigate(`/adm/clientes/cadastrar/${id}`);
    }

    async function excluir(id) {
        const confirmacao = window.confirm("Você realmente deseja excluir este cliente?");
        try {
            if (confirmacao) {
                const url = `http://localhost:5100/cliente/${id}?x-access-token=${token}`;
                await axios.delete(url);
                buscar();
            }
            
        } catch (error) {
            alert('Por favor, delete primeiro o serviço no qual este cliente está vinculado')
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

    function levaraFichaCliente(id) {
        navigate(`/adm/cliente/ficha/${id}`)
    }

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO');
        setToken(usu);
        if (usu === 'undefined' || usu === 'null') {
            navigate('/entrar');
        }
    }, []);

    return (
        <div className='pagina-consultarclientes'>
            <Cabecalhoadm />
            <Tituloadm subtitulo="Clientes" titulo="Consultar" />
            <div className='botoes'>
                <button className='acao' onClick={buscar}>Exibir</button>
                <button className='acao' onClick={levaraosservicos}>Serviços</button>
                <button className='acao' onClick={levaraocadastro}>Adicionar</button>
                <button className='acao' onClick={exibirFiltro}>Filtro</button>
                <div className='filtro-balao'>{mostrarFiltro && filtrosExibido()}</div>
            </div>

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Data Inserção</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(item => (
                            <tr className='itemCliente' >
                                <td onClick={() => levaraFichaCliente(item.id)}>{item.id}</td>
                                <td onClick={() => levaraFichaCliente(item.id)}>{item.nome}</td>
                                <td onClick={() => levaraFichaCliente(item.id)}>{item.telefone}</td>
                                <td onClick={() => levaraFichaCliente(item.id)}>{new Date(item.insercao).toLocaleDateString('pt-BR')}</td>
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
    );
}
