import './index.scss'
import Cabecalhoadm from '../../components/cabecalhoAdm'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Tituloadm from '../../components/tituloadm'


export default function ClientesConsultar() {

    const [token, setToken] = useState(null)
    const [clientes, setClientes] = useState([])

    const navigate = useNavigate()

    async function buscar() {
        const url = `http://localhost:5100/clientes?x-access-token=${token}`;
        let resp = await axios.get(url);
        setClientes(resp.data);

    }

    function levaraocadastro() {
        navigate('/adm/clientes/cadastrar')
    }

    function levaraosservicos() {
        navigate('/adm/servicos')
    }

    function levaraoalterar() {
        navigate('/adm/clientes/alterar')
    }

    async function excluir(id) {
        const confirmacao = window.confirm("Você realmente deseja excluir este cliente?");
        if (confirmacao) {
            const url = `http://localhost:5100/cliente/${id}?x-access-token=${token}`;
            await axios.delete(url);
            buscar();
        }
    }

    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)


        if (usu == 'undefined' || usu == 'null') {
            navigate('/entrar')
        }
    }, [])


    return (
        <div className='pagina-consultarclientes'>
            <Cabecalhoadm />
            <Tituloadm subtitulo="Clientes" titulo="Consultar" />
            <div className='botoes'>
                <button className='acao' onClick={buscar} >Exibir</button>
                <button className='acao' onClick={levaraosservicos} >Serviços</button>
                <button className='acao' onClick={levaraocadastro}>Adicionar</button>
                <button className='acao'>Filtro</button>
            </div>
            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Data Inserção</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(item => (
                            <tr>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{new Date(item.insercao).toLocaleDateString('pt-BR')}</td>
                                <td>
                                    <img src="/images/edit.png" alt="" className='img' onClick={levaraoalterar}/>
                                    <img src="/images/remove.png" alt="" className='img' onClick={() => excluir(item.id)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}